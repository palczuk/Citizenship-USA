(function () {
  "use strict";

  const ALL = CIVICS_QUESTIONS;
  const QUIZABLE = ALL.filter((q) => !q.personal);
  const STARRED_QUIZABLE = QUIZABLE.filter((q) => q.star);

  /* ---------------------------------------------------------------------
     Tab switching
  --------------------------------------------------------------------- */
  const tabButtons = document.querySelectorAll("nav.tabs button");
  const views = {
    study: document.getElementById("view-study"),
    quiz: document.getElementById("view-quiz"),
  };
  function showView(name) {
    Object.entries(views).forEach(([key, el]) => el.classList.toggle("hidden", key !== name));
    tabButtons.forEach((b) => b.classList.toggle("active", b.dataset.view === name));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  tabButtons.forEach((b) => b.addEventListener("click", () => showView(b.dataset.view)));
  document.querySelectorAll("[data-goto]").forEach((el) =>
    el.addEventListener("click", () => showView(el.dataset.goto))
  );

  /* ---------------------------------------------------------------------
     STUDY VIEW
  --------------------------------------------------------------------- */
  const studyList = document.getElementById("study-list");
  const searchInput = document.getElementById("study-search");
  const starOnlyToggle = document.getElementById("star-only-toggle");
  const sectionJump = document.getElementById("section-jump");
  const studyCountLabel = document.getElementById("study-count-label");

  const SECTION_ORDER = ["American Government", "American History", "Symbols and Holidays"];

  function slug(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function buildSectionJump() {
    sectionJump.innerHTML = "";
    SECTION_ORDER.forEach((sec) => {
      const a = document.createElement("a");
      a.href = "#" + slug(sec);
      a.textContent = sec;
      sectionJump.appendChild(a);
    });
  }

  function renderStudy() {
    const query = searchInput.value.trim().toLowerCase();
    const starOnly = starOnlyToggle.checked;

    studyList.innerHTML = "";
    let shown = 0;

    SECTION_ORDER.forEach((sectionName) => {
      const sectionQs = ALL.filter((q) => q.section === sectionName);
      const subs = [...new Set(sectionQs.map((q) => q.sub))];

      let sectionHasVisible = false;
      const sectionFrag = document.createDocumentFragment();

      const catHead = document.createElement("div");
      catHead.className = "category-head";
      catHead.id = slug(sectionName);
      sectionFrag.appendChild(catHead);

      subs.forEach((subName) => {
        const subQs = sectionQs.filter((q) => q.sub === subName).filter((q) => {
          if (starOnly && !q.star) return false;
          if (!query) return true;
          const hay = (q.q + " " + q.a.join(" ")).toLowerCase();
          return hay.includes(query);
        });
        if (subQs.length === 0) return;
        sectionHasVisible = true;

        const subHead = document.createElement("div");
        subHead.className = "subcategory-head";
        subHead.textContent = subName;
        sectionFrag.appendChild(subHead);

        subQs.forEach((q) => {
          shown++;
          sectionFrag.appendChild(buildQaCard(q));
        });
      });

      if (sectionHasVisible) {
        const countAll = sectionQs.length;
        const countVisible = sectionQs.filter((q) => {
          if (starOnly && !q.star) return false;
          if (!query) return true;
          const hay = (q.q + " " + q.a.join(" ")).toLowerCase();
          return hay.includes(query);
        }).length;
        catHead.innerHTML =
          `<h2>${sectionName}</h2><span class="count">${countVisible} of ${countAll}</span>`;
        studyList.appendChild(sectionFrag);
      }
    });

    studyCountLabel.textContent = `${shown} of ${ALL.length} questions`;

    if (shown === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No questions match your search.";
      studyList.appendChild(empty);
    }
  }

  function buildQaCard(q) {
    const card = document.createElement("div");
    card.className = "qa-card";

    const top = document.createElement("div");
    top.className = "qa-top";

    const num = document.createElement("div");
    num.className = "qa-num";
    num.textContent = "#" + q.id;

    const question = document.createElement("div");
    question.className = "qa-question";
    question.textContent = q.q;

    const badges = document.createElement("div");
    badges.className = "qa-badges";
    if (q.star) badges.appendChild(makeBadge("badge-star", "★ 65/20"));
    if (q.current) badges.appendChild(makeBadge("badge-current", "Updates"));
    if (q.personal) badges.appendChild(makeBadge("badge-personal", "Your answer"));

    top.appendChild(num);
    top.appendChild(question);
    top.appendChild(badges);
    top.addEventListener("click", () => card.classList.toggle("open"));

    const answers = document.createElement("div");
    answers.className = "qa-answers";
    const ul = document.createElement("ul");
    q.a.forEach((ans) => {
      const li = document.createElement("li");
      li.textContent = ans;
      ul.appendChild(li);
    });
    answers.appendChild(ul);
    if (q.note) {
      const note = document.createElement("div");
      note.className = "qa-note";
      note.textContent = q.note;
      answers.appendChild(note);
    }

    card.appendChild(top);
    card.appendChild(answers);
    return card;
  }

  function makeBadge(cls, text) {
    const span = document.createElement("span");
    span.className = "badge " + cls;
    span.textContent = text;
    return span;
  }

  searchInput.addEventListener("input", renderStudy);
  starOnlyToggle.addEventListener("change", () => {
    starOnlyToggle.parentElement.classList.toggle("on", starOnlyToggle.checked);
    renderStudy();
  });

  buildSectionJump();
  renderStudy();

  /* ---------------------------------------------------------------------
     QUIZ VIEW — setup
  --------------------------------------------------------------------- */
  const quizSetup = document.getElementById("quiz-setup");
  const quizPlay = document.getElementById("quiz-play");
  const quizResults = document.getElementById("quiz-results");

  const modeCards = document.querySelectorAll(".mode-card");
  const countRow = document.getElementById("count-row");
  const countSlider = document.getElementById("count-slider");
  const countValue = document.getElementById("count-value");
  const styleRadios = document.querySelectorAll('input[name="quiz-style"]');
  const startBtn = document.getElementById("start-quiz-btn");

  let selectedMode = "standard"; // standard | six520 | custom

  modeCards.forEach((card) => {
    card.addEventListener("click", () => {
      modeCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedMode = card.dataset.mode;
      countRow.classList.toggle("hidden", selectedMode !== "custom");
    });
  });

  countSlider.addEventListener("input", () => {
    countValue.textContent = countSlider.value;
  });

  styleRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      styleRadios.forEach((r) => r.closest(".chip-toggle").classList.toggle("on", r.checked));
    });
  });

  startBtn.addEventListener("click", () => {
    const style = document.querySelector('input[name="quiz-style"]:checked').value;
    let pool, count, passRatio;

    if (selectedMode === "standard") {
      pool = QUIZABLE;
      count = Math.min(20, pool.length);
      passRatio = 12 / 20;
    } else if (selectedMode === "six520") {
      pool = STARRED_QUIZABLE;
      count = Math.min(10, pool.length);
      passRatio = 6 / 10;
    } else {
      pool = QUIZABLE;
      count = Math.max(1, Math.min(parseInt(countSlider.value, 10), pool.length));
      passRatio = 0.6;
    }

    // "se for menos, faça randômico" — if fewer questions are available than
    // requested, randomize among what exists; otherwise randomly sample.
    const questions = sample(pool, count);
    startQuiz(questions, style, passRatio);
  });

  function sample(arr, n) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, n);
  }

  /* ---------------------------------------------------------------------
     QUIZ VIEW — play
  --------------------------------------------------------------------- */
  const hudFill = document.getElementById("hud-fill");
  const hudLabel = document.getElementById("hud-label");
  const tallyCorrect = document.getElementById("tally-correct");
  const tallyWrong = document.getElementById("tally-wrong");
  const questionCard = document.getElementById("question-card");
  const quitQuizBtn = document.getElementById("quit-quiz-btn");

  let state = null;

  function startQuiz(questions, style, passRatio) {
    state = {
      questions,
      style, // "mc" | "recall"
      index: 0,
      correct: 0,
      wrong: 0,
      passRatio,
      missed: [],
    };
    quizSetup.classList.add("hidden");
    quizResults.classList.add("hidden");
    quizPlay.classList.remove("hidden");
    renderQuestion();
  }

  function updateHud() {
    const total = state.questions.length;
    const done = state.correct + state.wrong;
    hudFill.style.width = Math.round((done / total) * 100) + "%";
    hudLabel.textContent = `Question ${Math.min(state.index + 1, total)} of ${total}`;
    tallyCorrect.textContent = "✓ " + state.correct;
    tallyWrong.textContent = "✗ " + state.wrong;
  }

  function renderQuestion() {
    updateHud();
    const q = state.questions[state.index];
    questionCard.innerHTML = "";

    const meta = document.createElement("div");
    meta.className = "question-meta";
    meta.textContent = `${q.section} · ${q.sub}${q.star ? " · ★ 65/20" : ""}`;

    const text = document.createElement("div");
    text.className = "question-text";
    text.textContent = q.q;

    questionCard.appendChild(meta);
    questionCard.appendChild(text);

    if (state.style === "mc") {
      renderMultipleChoice(q);
    } else {
      renderRecall(q);
    }
  }

  function renderMultipleChoice(q) {
    const correctAnswer = q.a[0];
    const distractors = buildDistractors(q, 3);
    const options = sample([correctAnswer, ...distractors], 4);
    const letters = ["A", "B", "C", "D"];

    const wrap = document.createElement("div");
    wrap.className = "options";

    options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${escapeHtml(opt)}</span>`;
      btn.addEventListener("click", () => handleMcAnswer(btn, opt, correctAnswer, wrap, q));
      wrap.appendChild(btn);
    });

    questionCard.appendChild(wrap);

    const feedback = document.createElement("div");
    feedback.className = "feedback-note";
    feedback.id = "feedback-note";
    questionCard.appendChild(feedback);

    const footer = document.createElement("div");
    footer.className = "quiz-footer";
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-primary hidden";
    nextBtn.id = "next-btn";
    nextBtn.textContent = state.index + 1 === state.questions.length ? "See results" : "Next question →";
    nextBtn.addEventListener("click", advance);
    footer.appendChild(nextBtn);
    questionCard.appendChild(footer);
  }

  function handleMcAnswer(btn, chosen, correctAnswer, wrap, q) {
    const allBtns = wrap.querySelectorAll(".option-btn");
    allBtns.forEach((b) => (b.disabled = true));

    const isCorrect = chosen === correctAnswer;
    btn.classList.add(isCorrect ? "correct" : "wrong");
    if (!isCorrect) {
      allBtns.forEach((b) => {
        if (b.textContent.trim().endsWith(correctAnswer)) b.classList.add("correct");
      });
    }

    const feedback = document.getElementById("feedback-note");
    feedback.classList.add("show", isCorrect ? "good" : "bad");
    feedback.textContent = isCorrect
      ? "Correct! " + (q.a.length > 1 ? "Other accepted answers: " + q.a.slice(1).join(", ") : "")
      : "Not quite. Accepted answer: " + q.a.join(" · ");

    recordAnswer(isCorrect, q);
    document.getElementById("next-btn").classList.remove("hidden");
  }

  function renderRecall(q) {
    const revealBtn = document.createElement("button");
    revealBtn.className = "btn btn-ghost";
    revealBtn.textContent = "Reveal accepted answers";

    const revealWrap = document.createElement("div");
    revealWrap.className = "recall-reveal hidden";

    const answersBox = document.createElement("div");
    answersBox.className = "qa-answers-list";
    answersBox.innerHTML = "<strong>Accepted answers</strong>";
    const ul = document.createElement("ul");
    q.a.forEach((ans) => {
      const li = document.createElement("li");
      li.textContent = ans;
      ul.appendChild(li);
    });
    answersBox.appendChild(ul);

    const actions = document.createElement("div");
    actions.className = "recall-actions";
    const rightBtn = document.createElement("button");
    rightBtn.className = "btn btn-correct";
    rightBtn.textContent = "I got it right";
    const wrongBtn = document.createElement("button");
    wrongBtn.className = "btn btn-wrong";
    wrongBtn.textContent = "I got it wrong";

    rightBtn.addEventListener("click", () => finishRecall(true, q));
    wrongBtn.addEventListener("click", () => finishRecall(false, q));

    actions.appendChild(rightBtn);
    actions.appendChild(wrongBtn);
    revealWrap.appendChild(answersBox);
    revealWrap.appendChild(actions);

    revealBtn.addEventListener("click", () => {
      revealWrap.classList.remove("hidden");
      revealBtn.classList.add("hidden");
    });

    questionCard.appendChild(revealBtn);
    questionCard.appendChild(revealWrap);

    const footer = document.createElement("div");
    footer.className = "quiz-footer";
    const nextBtn = document.createElement("button");
    nextBtn.className = "btn btn-primary hidden";
    nextBtn.id = "next-btn";
    nextBtn.textContent = state.index + 1 === state.questions.length ? "See results" : "Next question →";
    nextBtn.addEventListener("click", advance);
    footer.appendChild(nextBtn);
    questionCard.appendChild(footer);
  }

  function finishRecall(isCorrect, q) {
    recordAnswer(isCorrect, q);
    document.getElementById("next-btn").classList.remove("hidden");
    document.querySelectorAll(".recall-actions .btn").forEach((b) => (b.disabled = true));
  }

  function recordAnswer(isCorrect, q) {
    if (isCorrect) {
      state.correct++;
    } else {
      state.wrong++;
      state.missed.push(q);
    }
    updateHud();
  }

  function advance() {
    state.index++;
    if (state.index >= state.questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function buildDistractors(q, n) {
    const excludeSet = new Set(q.a.map((a) => a.toLowerCase()));
    const candidates = QUIZABLE.filter((other) => other.id !== q.id);
    const shuffled = sample(candidates, candidates.length);
    const picked = [];
    for (const c of shuffled) {
      const primary = c.a[0];
      if (excludeSet.has(primary.toLowerCase())) continue;
      if (picked.includes(primary)) continue;
      picked.push(primary);
      if (picked.length === n) break;
    }
    return picked;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  quitQuizBtn.addEventListener("click", () => {
    quizPlay.classList.add("hidden");
    quizSetup.classList.remove("hidden");
  });

  /* ---------------------------------------------------------------------
     QUIZ VIEW — results
  --------------------------------------------------------------------- */
  function showResults() {
    quizPlay.classList.add("hidden");
    quizResults.classList.remove("hidden");

    const total = state.questions.length;
    const pct = Math.round((state.correct / total) * 100);
    const passed = state.correct / total >= state.passRatio;

    quizResults.innerHTML = "";
    const card = document.createElement("div");
    card.className = "results-card";

    const stamp = document.createElement("div");
    stamp.className = "results-stamp" + (passed ? "" : " fail");
    stamp.textContent = passed ? "Passed" : "Keep studying";

    const score = document.createElement("div");
    score.className = "results-score";
    score.textContent = `${state.correct} / ${total}`;

    const sub = document.createElement("div");
    sub.className = "results-sub";
    sub.textContent = `${pct}% correct — you'd need ${Math.ceil(total * state.passRatio)} of ${total} to pass this round.`;

    const actions = document.createElement("div");
    actions.className = "results-actions";
    const retryBtn = document.createElement("button");
    retryBtn.className = "btn btn-primary";
    retryBtn.textContent = "New quiz";
    retryBtn.addEventListener("click", () => {
      quizResults.classList.add("hidden");
      quizSetup.classList.remove("hidden");
    });
    const studyBtn = document.createElement("button");
    studyBtn.className = "btn btn-ghost";
    studyBtn.textContent = "Review missed in Study";
    studyBtn.addEventListener("click", () => {
      showView("study");
      if (state.missed.length) {
        searchInput.value = state.missed[0].q.slice(0, 20);
        renderStudy();
      }
    });
    actions.appendChild(retryBtn);
    actions.appendChild(studyBtn);

    card.appendChild(stamp);
    card.appendChild(score);
    card.appendChild(sub);
    card.appendChild(actions);

    if (state.missed.length) {
      const review = document.createElement("div");
      review.className = "review-list";
      const heading = document.createElement("div");
      heading.className = "section-title";
      heading.style.fontSize = "1.1rem";
      heading.textContent = `Missed questions (${state.missed.length})`;
      review.appendChild(heading);

      state.missed.forEach((q) => {
        const item = document.createElement("div");
        item.className = "review-item";
        item.innerHTML = `<span class="review-icon bad-icon">✗</span>
          <div class="review-text">
            <div class="rq">#${q.id} — ${escapeHtml(q.q)}</div>
            <div class="ra">${escapeHtml(q.a.join(" · "))}</div>
          </div>`;
        review.appendChild(item);
      });
      card.appendChild(review);
    }

    quizResults.appendChild(card);
  }

  // default mode selection on load
  document.querySelector('.mode-card[data-mode="standard"]').classList.add("selected");
})();
