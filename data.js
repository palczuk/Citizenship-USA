// USCIS 2025 Civics Test — 128 Questions and Answers
// Source: M-1778 (09/25), uscis.gov/citizenship
// Questions 30, 38, 39, 57 reflect officeholders as of August 2026 — verify at uscis.gov/citizenship/testupdates
const CIVICS_QUESTIONS = [
  {
    "id": 1,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What is the form of government of the United States?",
    "a": [
      "Republic",
      "Constitution-based federal republic",
      "Representative democracy"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 2,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What is the supreme law of the land?",
    "a": [
      "(U.S.) Constitution"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 3,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "Name one thing the U.S. Constitution does.",
    "a": [
      "Forms the government",
      "Defines powers of government",
      "Defines the parts of government",
      "Protects the rights of the people"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 4,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "The U.S. Constitution starts with the words “We the People.” What does “We the People” mean?",
    "a": [
      "Self-government",
      "Popular sovereignty",
      "Consent of the governed",
      "People should govern themselves",
      "(Example of) social contract"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 5,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "How are changes made to the U.S. Constitution?",
    "a": [
      "Amendments",
      "The amendment process"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 6,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What does the Bill of Rights protect?",
    "a": [
      "(The basic) rights of Americans",
      "(The basic) rights of people living in the United States"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 7,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "How many amendments does the U.S. Constitution have?",
    "a": [
      "Twenty-seven (27)"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 8,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "Why is the Declaration of Independence important?",
    "a": [
      "It says America is free from British control.",
      "It says all people are created equal.",
      "It identifies inherent rights.",
      "It identifies individual freedoms."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 9,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What founding document said the American colonies were free from Britain?",
    "a": [
      "Declaration of Independence"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 10,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "Name two important ideas from the Declaration of Independence and the U.S. Constitution.",
    "a": [
      "Equality",
      "Liberty",
      "Social contract",
      "Natural rights",
      "Limited government",
      "Self-government"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 11,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "The words “Life, Liberty, and the pursuit of Happiness” are in what founding document?",
    "a": [
      "Declaration of Independence"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 12,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What is the economic system of the United States?",
    "a": [
      "Capitalism",
      "Free market economy"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 13,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "What is the rule of law?",
    "a": [
      "Everyone must follow the law.",
      "Leaders must obey the law.",
      "Government must obey the law.",
      "No one is above the law."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 14,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "Many documents influenced the U.S. Constitution. Name one.",
    "a": [
      "Declaration of Independence",
      "Articles of Confederation",
      "Federalist Papers",
      "Anti-Federalist Papers",
      "Virginia Declaration of Rights",
      "Fundamental Orders of Connecticut",
      "Mayflower Compact",
      "Iroquois Great Law of Peace"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 15,
    "section": "American Government",
    "sub": "Principles of American Government",
    "q": "There are three branches of government. Why?",
    "a": [
      "So one part does not become too powerful",
      "Checks and balances",
      "Separation of powers"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 16,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name the three branches of government.",
    "a": [
      "Legislative, executive, and judicial",
      "Congress, president, and the courts"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 17,
    "section": "American Government",
    "sub": "System of Government",
    "q": "The President of the United States is in charge of which branch of government?",
    "a": [
      "Executive branch"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 18,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What part of the federal government writes laws?",
    "a": [
      "(U.S.) Congress",
      "(U.S. or national) legislature",
      "Legislative branch"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 19,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What are the two parts of the U.S. Congress?",
    "a": [
      "Senate and House (of Representatives)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 20,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name one power of the U.S. Congress.",
    "a": [
      "Writes laws",
      "Declares war",
      "Makes the federal budget"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 21,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How many U.S. senators are there?",
    "a": [
      "One hundred (100)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 22,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How long is a term for a U.S. senator?",
    "a": [
      "Six (6) years"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 23,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who is one of your state’s U.S. senators now?",
    "a": [
      "Answers will vary by state."
    ],
    "star": false,
    "personal": true,
    "current": false,
    "note": "D.C. residents and U.S. territory residents should answer that they have no U.S. senators. Look up your current senators before your interview."
  },
  {
    "id": 24,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How many voting members are in the House of Representatives?",
    "a": [
      "Four hundred thirty-five (435)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 25,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How long is a term for a member of the House of Representatives?",
    "a": [
      "Two (2) years"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 26,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Why do U.S. representatives serve shorter terms than U.S. senators?",
    "a": [
      "To more closely follow public opinion"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 27,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How many senators does each state have?",
    "a": [
      "Two (2)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 28,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Why does each state have two senators?",
    "a": [
      "Equal representation (for small states)",
      "The Great Compromise (Connecticut Compromise)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 29,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name your U.S. representative.",
    "a": [
      "Answers will vary by district."
    ],
    "star": false,
    "personal": true,
    "current": false,
    "note": "Residents of territories with nonvoting delegates may name that delegate, or state the territory has no voting representative. Look up your current representative before your interview."
  },
  {
    "id": 30,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the name of the Speaker of the House of Representatives now?",
    "a": [
      "Mike Johnson"
    ],
    "star": true,
    "personal": false,
    "current": true,
    "note": "Answers change with elections. Verify at uscis.gov/citizenship/testupdates before your interview."
  },
  {
    "id": 31,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who does a U.S. senator represent?",
    "a": [
      "Citizens of their state",
      "People of their state"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 32,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who elects U.S. senators?",
    "a": [
      "Citizens from their state"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 33,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who does a member of the House of Representatives represent?",
    "a": [
      "Citizens in their (congressional) district",
      "Citizens in their district",
      "People from their (congressional) district",
      "People in their district"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 34,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who elects members of the House of Representatives?",
    "a": [
      "Citizens from their (congressional) district"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 35,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Some states have more representatives than other states. Why?",
    "a": [
      "(Because of) the state’s population",
      "(Because) they have more people",
      "(Because) some states have more people"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 36,
    "section": "American Government",
    "sub": "System of Government",
    "q": "The President of the United States is elected for how many years?",
    "a": [
      "Four (4) years"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 37,
    "section": "American Government",
    "sub": "System of Government",
    "q": "The President of the United States can serve only two terms. Why?",
    "a": [
      "(Because of) the 22nd Amendment",
      "To keep the president from becoming too powerful"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 38,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the name of the President of the United States now?",
    "a": [
      "Donald Trump"
    ],
    "star": true,
    "personal": false,
    "current": true,
    "note": "Answers change with elections. Verify at uscis.gov/citizenship/testupdates before your interview."
  },
  {
    "id": 39,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the name of the Vice President of the United States now?",
    "a": [
      "JD Vance"
    ],
    "star": true,
    "personal": false,
    "current": true,
    "note": "Answers change with elections. Verify at uscis.gov/citizenship/testupdates before your interview."
  },
  {
    "id": 40,
    "section": "American Government",
    "sub": "System of Government",
    "q": "If the president can no longer serve, who becomes president?",
    "a": [
      "The Vice President (of the United States)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 41,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name one power of the president.",
    "a": [
      "Signs bills into law",
      "Vetoes bills",
      "Enforces laws",
      "Commander in Chief (of the military)",
      "Chief diplomat",
      "Appoints federal judges"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 42,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who is Commander in Chief of the U.S. military?",
    "a": [
      "The President (of the United States)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 43,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who signs bills to become laws?",
    "a": [
      "The President (of the United States)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 44,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who vetoes bills?",
    "a": [
      "The President (of the United States)"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 45,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who appoints federal judges?",
    "a": [
      "The President (of the United States)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 46,
    "section": "American Government",
    "sub": "System of Government",
    "q": "The executive branch has many parts. Name one.",
    "a": [
      "President (of the United States)",
      "Cabinet",
      "Federal departments and agencies"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 47,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What does the President’s Cabinet do?",
    "a": [
      "Advises the President (of the United States)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 48,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What are two Cabinet-level positions?",
    "a": [
      "Attorney General",
      "Secretary of Agriculture",
      "Secretary of Commerce",
      "Secretary of Education",
      "Secretary of Energy",
      "Secretary of Health and Human Services",
      "Secretary of Homeland Security",
      "Secretary of Housing and Urban Development",
      "Secretary of the Interior",
      "Secretary of Labor",
      "Secretary of State",
      "Secretary of Transportation",
      "Secretary of the Treasury",
      "Secretary of Veterans Affairs",
      "Secretary of War (Defense)",
      "Vice-President",
      "Administrator of the Environmental Protection Agency",
      "Administrator of the Small Business Administration",
      "Director of the Central Intelligence Agency",
      "Director of the Office of Management and Budget",
      "Director of National Intelligence",
      "United States Trade Representative"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 49,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Why is the Electoral College important?",
    "a": [
      "It decides who is elected president.",
      "It provides a compromise between the popular election of the president and congressional selection."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 50,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is one part of the judicial branch?",
    "a": [
      "Supreme Court",
      "Federal Courts"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 51,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What does the judicial branch do?",
    "a": [
      "Reviews laws",
      "Explains laws",
      "Resolves disputes (disagreements) about the law",
      "Decides if a law goes against the (U.S.) Constitution"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 52,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the highest court in the United States?",
    "a": [
      "Supreme Court"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 53,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How many seats are on the Supreme Court?",
    "a": [
      "Nine (9)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 54,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How many Supreme Court justices are usually needed to decide a case?",
    "a": [
      "Five (5)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 55,
    "section": "American Government",
    "sub": "System of Government",
    "q": "How long do Supreme Court justices serve?",
    "a": [
      "(For) life",
      "Lifetime appointment",
      "(Until) retirement"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 56,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Supreme Court justices serve for life. Why?",
    "a": [
      "To be independent (of politics)",
      "To limit outside (political) influence"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 57,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who is the Chief Justice of the United States now?",
    "a": [
      "John Roberts"
    ],
    "star": false,
    "personal": false,
    "current": true,
    "note": "Answers change with appointments. Verify at uscis.gov/citizenship/testupdates before your interview."
  },
  {
    "id": 58,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name one power that is only for the federal government.",
    "a": [
      "Print paper money",
      "Mint coins",
      "Declare war",
      "Create an army",
      "Make treaties",
      "Set foreign policy"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 59,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Name one power that is only for the states.",
    "a": [
      "Provide schooling and education",
      "Provide protection (police)",
      "Provide safety (fire departments)",
      "Give a driver’s license",
      "Approve zoning and land use"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 60,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the purpose of the 10th Amendment?",
    "a": [
      "(It states that the) powers not given to the federal government belong to the states or to the people."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 61,
    "section": "American Government",
    "sub": "System of Government",
    "q": "Who is the governor of your state now?",
    "a": [
      "Answers will vary by state."
    ],
    "star": true,
    "personal": true,
    "current": false,
    "note": "D.C. residents should answer that D.C. does not have a governor. Look up your current governor before your interview."
  },
  {
    "id": 62,
    "section": "American Government",
    "sub": "System of Government",
    "q": "What is the capital of your state?",
    "a": [
      "Answers will vary by state."
    ],
    "star": false,
    "personal": true,
    "current": false,
    "note": "D.C. residents should answer that D.C. is not a state and has no capital. U.S. territory residents should name the capital of the territory."
  },
  {
    "id": 63,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "There are four amendments to the U.S. Constitution about who can vote. Describe one of them.",
    "a": [
      "Citizens eighteen (18) and older (can vote).",
      "You don’t have to pay (a poll tax) to vote.",
      "Any citizen can vote. (Women and men can vote.)",
      "A male citizen of any race (can vote)."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 64,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "Who can vote in federal elections, run for federal office, and serve on a jury in the United States?",
    "a": [
      "Citizens",
      "Citizens of the United States",
      "U.S. citizens"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 65,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "What are three rights of everyone living in the United States?",
    "a": [
      "Freedom of expression",
      "Freedom of speech",
      "Freedom of assembly",
      "Freedom to petition the government",
      "Freedom of religion",
      "The right to bear arms"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 66,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "What do we show loyalty to when we say the Pledge of Allegiance?",
    "a": [
      "The United States",
      "The flag"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 67,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "Name two promises that new citizens make in the Oath of Allegiance.",
    "a": [
      "Give up loyalty to other countries",
      "Defend the (U.S.) Constitution",
      "Obey the laws of the United States",
      "Serve in the military (if needed)",
      "Serve (help, do important work for) the nation (if needed)",
      "Be loyal to the United States"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 68,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "How can people become United States citizens?",
    "a": [
      "Be born in the United States, under the conditions set by the 14th Amendment",
      "Naturalize",
      "Derive citizenship (under conditions set by Congress)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 69,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "What are two examples of civic participation in the United States?",
    "a": [
      "Vote",
      "Run for office",
      "Join a political party",
      "Help with a campaign",
      "Join a civic group",
      "Join a community group",
      "Give an elected official your opinion (on an issue)",
      "Contact elected officials",
      "Support or oppose an issue or policy",
      "Write to a newspaper"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 70,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "What is one way Americans can serve their country?",
    "a": [
      "Vote",
      "Pay taxes",
      "Obey the law",
      "Serve in the military",
      "Run for office",
      "Work for local, state, or federal government"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 71,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "Why is it important to pay federal taxes?",
    "a": [
      "Required by law",
      "All people pay to fund the federal government",
      "Required by the (U.S.) Constitution (16th Amendment)",
      "Civic duty"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 72,
    "section": "American Government",
    "sub": "Rights and Responsibilities",
    "q": "It is important for all men age 18 through 25 to register for the Selective Service. Name one reason why.",
    "a": [
      "Required by law",
      "Civic duty",
      "Makes the draft fair, if needed"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 73,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "The colonists came to America for many reasons. Name one.",
    "a": [
      "Freedom",
      "Political liberty",
      "Religious freedom",
      "Economic opportunity",
      "Escape persecution"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 74,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Who lived in America before the Europeans arrived?",
    "a": [
      "American Indians",
      "Native Americans"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 75,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "What group of people was taken and sold as slaves?",
    "a": [
      "Africans",
      "People from Africa"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 76,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "What war did the Americans fight to win independence from Britain?",
    "a": [
      "American Revolution",
      "The (American) Revolutionary War",
      "War for (American) Independence"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 77,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Name one reason why the Americans declared independence from Britain.",
    "a": [
      "High taxes",
      "Taxation without representation",
      "British soldiers stayed in Americans’ houses (boarding, quartering)",
      "They did not have self-government",
      "Boston Massacre",
      "Boston Tea Party (Tea Act)",
      "Stamp Act",
      "Sugar Act",
      "Townshend Acts",
      "Intolerable (Coercive) Acts"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 78,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Who wrote the Declaration of Independence?",
    "a": [
      "(Thomas) Jefferson"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 79,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "When was the Declaration of Independence adopted?",
    "a": [
      "July 4, 1776"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 80,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "The American Revolution had many important events. Name one.",
    "a": [
      "(Battle of) Bunker Hill",
      "Declaration of Independence",
      "Washington Crossing the Delaware (Battle of Trenton)",
      "(Battle of) Saratoga",
      "Valley Forge (Encampment)",
      "(Battle of) Yorktown (British surrender at Yorktown)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 81,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "There were 13 original states. Name five.",
    "a": [
      "New Hampshire",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
      "Virginia",
      "North Carolina",
      "South Carolina",
      "Georgia"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 82,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "What founding document was written in 1787?",
    "a": [
      "(U.S.) Constitution"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 83,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    "a": [
      "(James) Madison",
      "(Alexander) Hamilton",
      "(John) Jay",
      "Publius"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 84,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Why were the Federalist Papers important?",
    "a": [
      "They helped people understand the (U.S.) Constitution.",
      "They supported passing the (U.S.) Constitution."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 85,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Benjamin Franklin is famous for many things. Name one.",
    "a": [
      "Founded the first free public libraries",
      "First Postmaster General of the United States",
      "Helped write the Declaration of Independence",
      "Inventor",
      "U.S. diplomat"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 86,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "George Washington is famous for many things. Name one.",
    "a": [
      "“Father of Our Country”",
      "First president of the United States",
      "General of the Continental Army",
      "President of the Constitutional Convention"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 87,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Thomas Jefferson is famous for many things. Name one.",
    "a": [
      "Writer of the Declaration of Independence",
      "Third president of the United States",
      "Doubled the size of the United States (Louisiana Purchase)",
      "First Secretary of State",
      "Founded the University of Virginia",
      "Writer of the Virginia Statute on Religious Freedom"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 88,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "James Madison is famous for many things. Name one.",
    "a": [
      "“Father of the Constitution”",
      "Fourth president of the United States",
      "President during the War of 1812",
      "One of the writers of the Federalist Papers"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 89,
    "section": "American History",
    "sub": "Colonial Period and Independence",
    "q": "Alexander Hamilton is famous for many things. Name one.",
    "a": [
      "First Secretary of the Treasury",
      "One of the writers of the Federalist Papers",
      "Helped establish the First Bank of the United States",
      "Aide to General George Washington",
      "Member of the Continental Congress"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 90,
    "section": "American History",
    "sub": "1800s",
    "q": "What territory did the United States buy from France in 1803?",
    "a": [
      "Louisiana Territory",
      "Louisiana"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 91,
    "section": "American History",
    "sub": "1800s",
    "q": "Name one war fought by the United States in the 1800s.",
    "a": [
      "War of 1812",
      "Mexican-American War",
      "Civil War",
      "Spanish-American War"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 92,
    "section": "American History",
    "sub": "1800s",
    "q": "Name the U.S. war between the North and the South.",
    "a": [
      "The Civil War"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 93,
    "section": "American History",
    "sub": "1800s",
    "q": "The Civil War had many important events. Name one.",
    "a": [
      "(Battle of) Fort Sumter",
      "Emancipation Proclamation",
      "(Battle of) Vicksburg",
      "(Battle of) Gettysburg",
      "Sherman’s March",
      "(Surrender at) Appomattox",
      "(Battle of) Antietam/Sharpsburg",
      "Lincoln was assassinated."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 94,
    "section": "American History",
    "sub": "1800s",
    "q": "Abraham Lincoln is famous for many things. Name one.",
    "a": [
      "Freed the slaves (Emancipation Proclamation)",
      "Saved (or preserved) the Union",
      "Led the United States during the Civil War",
      "16th president of the United States",
      "Delivered the Gettysburg Address"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 95,
    "section": "American History",
    "sub": "1800s",
    "q": "What did the Emancipation Proclamation do?",
    "a": [
      "Freed the slaves",
      "Freed slaves in the Confederacy",
      "Freed slaves in the Confederate states",
      "Freed slaves in most Southern states"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 96,
    "section": "American History",
    "sub": "1800s",
    "q": "What U.S. war ended slavery?",
    "a": [
      "The Civil War"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 97,
    "section": "American History",
    "sub": "1800s",
    "q": "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
    "a": [
      "14th Amendment"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 98,
    "section": "American History",
    "sub": "1800s",
    "q": "When did all men get the right to vote?",
    "a": [
      "After the Civil War",
      "During Reconstruction",
      "(With the) 15th Amendment",
      "1870"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 99,
    "section": "American History",
    "sub": "1800s",
    "q": "Name one leader of the women’s rights movement in the 1800s.",
    "a": [
      "Susan B. Anthony",
      "Elizabeth Cady Stanton",
      "Sojourner Truth",
      "Harriet Tubman",
      "Lucretia Mott",
      "Lucy Stone"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 100,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Name one war fought by the United States in the 1900s.",
    "a": [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War",
      "(Persian) Gulf War"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 101,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Why did the United States enter World War I?",
    "a": [
      "Because Germany attacked U.S. (civilian) ships",
      "To support the Allied Powers (England, France, Italy, and Russia)",
      "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 102,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "When did all women get the right to vote?",
    "a": [
      "1920",
      "After World War I",
      "(With the) 19th Amendment"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 103,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "What was the Great Depression?",
    "a": [
      "Longest economic recession in modern history"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 104,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "When did the Great Depression start?",
    "a": [
      "The Great Crash (1929)",
      "Stock market crash of 1929"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 105,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Who was president during the Great Depression and World War II?",
    "a": [
      "(Franklin) Roosevelt"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 106,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Why did the United States enter World War II?",
    "a": [
      "(Bombing of) Pearl Harbor",
      "Japanese attacked Pearl Harbor",
      "To support the Allied Powers (England, France, and Russia)",
      "To oppose the Axis Powers (Germany, Italy, and Japan)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 107,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Dwight Eisenhower is famous for many things. Name one.",
    "a": [
      "General during World War II",
      "President at the end of (during) the Korean War",
      "34th president of the United States",
      "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate System)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 108,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Who was the United States’ main rival during the Cold War?",
    "a": [
      "Soviet Union",
      "USSR",
      "Russia"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 109,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "During the Cold War, what was one main concern of the United States?",
    "a": [
      "Communism",
      "Nuclear war"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 110,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Why did the United States enter the Korean War?",
    "a": [
      "To stop the spread of communism"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 111,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Why did the United States enter the Vietnam War?",
    "a": [
      "To stop the spread of communism"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 112,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "What did the civil rights movement do?",
    "a": [
      "Fought to end racial discrimination"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 113,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Martin Luther King, Jr. is famous for many things. Name one.",
    "a": [
      "Fought for civil rights",
      "Worked for equality for all Americans",
      "Worked to ensure that people would “not be judged by the color of their skin, but by the content of their character”"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 114,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Why did the United States enter the Persian Gulf War?",
    "a": [
      "To force the Iraqi military from Kuwait"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 115,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "What major event happened on September 11, 2001 in the United States?",
    "a": [
      "Terrorists attacked the United States",
      "Terrorists took over two planes and crashed them into the World Trade Center in New York City",
      "Terrorists took over a plane and crashed into the Pentagon in Arlington, Virginia",
      "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 116,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Name one U.S. military conflict after the September 11, 2001 attacks.",
    "a": [
      "(Global) War on Terror",
      "War in Afghanistan",
      "War in Iraq"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 117,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Name one American Indian tribe in the United States.",
    "a": [
      "Apache",
      "Blackfeet",
      "Cayuga",
      "Cherokee",
      "Cheyenne",
      "Chippewa",
      "Choctaw",
      "Creek",
      "Crow",
      "Hopi",
      "Huron",
      "Inupiat",
      "Lakota",
      "Mohawk",
      "Mohegan",
      "Navajo",
      "Oneida",
      "Onondaga",
      "Pueblo",
      "Seminole",
      "Seneca",
      "Shawnee",
      "Sioux",
      "Teton",
      "Tuscarora"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 118,
    "section": "American History",
    "sub": "Recent American History and Other Important Historical Information",
    "q": "Name one example of an American innovation.",
    "a": [
      "Light bulb",
      "Automobile (cars, internal combustion engine)",
      "Skyscrapers",
      "Airplane",
      "Assembly line",
      "Landing on the moon",
      "Integrated circuit (IC)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 119,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "What is the capital of the United States?",
    "a": [
      "Washington, D.C."
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 120,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "Where is the Statue of Liberty?",
    "a": [
      "New York (Harbor)",
      "Liberty Island",
      "New Jersey",
      "near New York City",
      "on the Hudson (River)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 121,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "Why does the flag have 13 stripes?",
    "a": [
      "(Because there were) 13 original colonies",
      "(Because the stripes) represent the original colonies"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 122,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "Why does the flag have 50 stars?",
    "a": [
      "(Because there is) one star for each state",
      "(Because) each star represents a state",
      "(Because there are) 50 states"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 123,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "What is the name of the national anthem?",
    "a": [
      "The Star-Spangled Banner"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 124,
    "section": "Symbols and Holidays",
    "sub": "Symbols",
    "q": "The Nation’s first motto was “E Pluribus Unum.” What does that mean?",
    "a": [
      "Out of many, one",
      "We all become one"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 125,
    "section": "Symbols and Holidays",
    "sub": "Holidays",
    "q": "What is Independence Day?",
    "a": [
      "A holiday to celebrate U.S. independence (from Britain)",
      "The country’s birthday"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 126,
    "section": "Symbols and Holidays",
    "sub": "Holidays",
    "q": "Name three national U.S. holidays.",
    "a": [
      "New Year’s Day",
      "Martin Luther King, Jr. Day",
      "Presidents Day (Washington’s Birthday)",
      "Memorial Day",
      "Juneteenth",
      "Independence Day",
      "Labor Day",
      "Columbus Day",
      "Veterans Day",
      "Thanksgiving Day",
      "Christmas Day"
    ],
    "star": true,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 127,
    "section": "Symbols and Holidays",
    "sub": "Holidays",
    "q": "What is Memorial Day?",
    "a": [
      "A holiday to honor soldiers who died in military service"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  },
  {
    "id": 128,
    "section": "Symbols and Holidays",
    "sub": "Holidays",
    "q": "What is Veterans Day?",
    "a": [
      "A holiday to honor people in the (U.S.) military",
      "A holiday to honor people who have served (in the U.S. military)"
    ],
    "star": false,
    "personal": false,
    "current": false,
    "note": null
  }
];
