import { siteConfig } from './site-config';

export type GuideTable = {
  heading: string;
  intro?: string;
  headers: string[];
  rows: string[][];
};

export type GuideSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuidePage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  deck: string;
  category: 'Survivor Guides' | 'Michael Myers Guides' | 'Maps' | 'Story' | 'Core Guides';
  targetKeyword: string;
  secondaryKeywords?: string[];
  quickAnswer: string;
  keyPoints: string[];
  steps: string[];
  table?: GuideTable;
  sections: GuideSection[];
  mistakes: string[];
  related: string[];
  faq: GuideFaq[];
  sourceNotes: string[];
};

export const sourceLinks = [
  {
    label: 'Official Halloween: The Game site',
    href: 'https://halloweengame.com/',
  },
  {
    label: 'Steam store page',
    href: 'https://store.steampowered.com/app/3219630/Halloween_The_Game/',
  },
  {
    label: 'Official news archive',
    href: 'https://halloweengame.com/news/',
  },
];

export const launchMaps = [
  'East Haddonfield',
  'Haddonfield Heights',
  'Orange Grove Estates',
  'Haddonfield Town Center',
];

export const guidePages: GuidePage[] = [
  {
    slug: 'halloween-the-game-characters',
    title: 'Halloween The Game Characters Guide',
    metaDescription:
      'A clear guide to confirmed Halloween: The Game characters, playable sides, Heroes of Haddonfield naming, Michael Myers, and what still needs verification.',
    h1: 'Halloween The Game Characters Guide',
    deck:
      'Understand the confirmed character groups without mixing public facts with unverified roster rumors.',
    category: 'Core Guides',
    targetKeyword: 'halloween the game characters',
    quickAnswer:
      'Halloween: The Game has two playable sides: Michael Myers and the Heroes of Haddonfield. Official launch information describes ten playable civilian characters at launch and two legacy character packs, but individual ability details should be checked against the in-game roster and current patch notes.',
    keyPoints: [
      'Michael Myers is the solo threat in the 1v4 multiplayer mode.',
      'The player team is officially called Heroes of Haddonfield, even though many players search for survivors.',
      'NPC residents matter to match objectives, but they should not be treated as confirmed playable characters unless the game labels them that way.',
    ],
    steps: [
      'Separate confirmed sides from character rumors before planning builds.',
      'Check the current character screen for ability names, unlocks, and restrictions.',
      'Treat legacy movie characters and DLC as separate from the launch civilian roster.',
      'Update your notes whenever a patch changes progression, ability text, or character availability.',
    ],
    table: {
      heading: 'Confirmed Character Groups',
      headers: ['Group', 'What is confirmed', 'What to verify'],
      rows: [
        [
          'Michael Myers',
          'Playable solo role focused on stalking, hunting, and pressuring Haddonfield.',
          'Exact ability values, cooldowns, unlock trees, and patch changes.',
        ],
        [
          'Heroes of Haddonfield',
          'Playable civilian team that protects or rescues residents, uses tools, contacts police, and looks for escape chances.',
          'Individual character names, personal abilities, progression, and loadout rules.',
        ],
        [
          'Residents and NPCs',
          'Public materials describe NPC interaction as part of match tension and objectives.',
          'Which residents appear on each map and how objective states change around them.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Why Players Say Survivors',
        body: [
          'The official role name is Heroes of Haddonfield. Searchers will still use survivor language because the match fantasy is easy to understand: four civilians trying to stay alive, rescue others, call for help, and create a way out.',
          'This site uses survivor terms when they help readers find the guide, but it keeps the official naming visible so patch notes and in-game menus stay easier to follow.',
        ],
      },
      {
        heading: 'Roster Confidence',
        body: [
          'Launch marketing confirms the sides and broad objectives. It does not justify inventing exact stats or ability recipes. When a character-specific build page is added later, it should cite the current in-game text or an official update.',
        ],
      },
    ],
    mistakes: [
      'Do not assume every named resident is playable.',
      'Do not copy character ability text from unofficial sites without checking the game.',
      'Do not plan builds around cooldowns or numbers unless the current patch confirms them.',
    ],
    related: [
      'halloween-the-game-survivors',
      'halloween-the-game-michael-myers',
      'halloween-the-game-objectives',
      'halloween-the-game-walkthrough',
    ],
    faq: [
      {
        question: 'Who are the main characters in Halloween: The Game?',
        answer:
          'The confirmed playable sides are Michael Myers and the Heroes of Haddonfield. Public launch material also references ten playable civilian characters at launch.',
      },
      {
        question: 'Are the Heroes of Haddonfield the same as survivors?',
        answer:
          'In search terms, yes. In official naming, the player team is called Heroes of Haddonfield.',
      },
      {
        question: 'Can I trust exact character stats right now?',
        answer:
          'Only if they match the current in-game text or official patch notes. This guide avoids unverified numbers.',
      },
    ],
    sourceNotes: [
      'Updated with public launch information available on September 9, 2026.',
      'Character abilities and roster-specific details should be verified in-game before being treated as final.',
    ],
  },
  {
    slug: 'halloween-the-game-survivors',
    title: 'Halloween The Game Survivors Guide',
    metaDescription:
      'Survivor-focused Halloween: The Game guide explaining Heroes of Haddonfield, objectives, teamwork, police contact, items, and escape priorities.',
    h1: 'Halloween The Game Survivors Guide',
    deck:
      'A practical launch guide for players searching for survivor tips while learning the official Heroes of Haddonfield role.',
    category: 'Survivor Guides',
    targetKeyword: 'halloween the game survivors',
    quickAnswer:
      'The survivor side is officially called Heroes of Haddonfield. Your job is to protect or rescue residents, use weapons and household items, contact the police, find escape opportunities, and survive Michael Myers without assuming every map has fixed item or exit locations.',
    keyPoints: [
      'Read the active objective before committing to a route.',
      'Move with purpose, but avoid turning the whole team into one easy target.',
      'Save defensive tools for contested objectives, police contact, and escape moments.',
    ],
    steps: [
      'Start by identifying the current objective and nearby safe movement paths.',
      'Assign one player to scout while others protect residents or gather useful items.',
      'Prioritize police contact when the match makes that objective available.',
      'Treat every escape route as dynamic until the in-game UI confirms its state.',
      'Leave when the route is open instead of over-looting or chasing perfect rescues.',
    ],
    table: {
      heading: 'Hero Priorities',
      headers: ['Priority', 'Why it matters', 'Verification note'],
      rows: [
        [
          'Protect or rescue residents',
          'Public materials describe residents as part of the Hero objective loop.',
          'Exact resident behavior can vary and should be checked in match.',
        ],
        [
          'Use weapons and household items',
          'Items can buy time and help the team contest objectives.',
          'Exact item effects and durability need current in-game confirmation.',
        ],
        [
          'Contact police',
          'Police contact is a confirmed Hero task.',
          'The precise device, location, and timing rules are not listed here unless verified.',
        ],
        [
          'Find escape opportunities',
          'Escape is the goal players search for first.',
          'Do not memorize fixed exits from old clips until the live map confirms them.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Team Shape',
        body: [
          'A reliable Hero team usually needs both information and cover. One player checking an objective alone may move faster, but Michael can punish isolated movement. A full stack can also fail if nobody watches alternate pressure points.',
          'Use short callouts: objective seen, police route contested, item found, Michael nearby. Long debates waste the same time Michael is trying to take from you.',
        ],
      },
      {
        heading: 'When Information Is Missing',
        body: [
          'On a fresh map, treat the first minute as scouting. Mark landmarks mentally, notice which doors and sightlines are useful, and avoid writing down fixed item spawns until repeated matches or official notes confirm them.',
        ],
      },
    ],
    mistakes: [
      'Calling everything a chase and ignoring residents or police contact.',
      'Using every defensive item early before a key objective is threatened.',
      'Assuming an escape route is open because it worked in a previous match.',
    ],
    related: [
      'halloween-the-game-objectives',
      'halloween-the-game-how-to-escape',
      'halloween-the-game-escape-routes',
      'halloween-the-game-items',
    ],
    faq: [
      {
        question: 'Why does the game call survivors Heroes of Haddonfield?',
        answer:
          'That is the official role name for the civilian team. The guide also uses survivor language because it is how many players search.',
      },
      {
        question: 'Should Heroes split up?',
        answer:
          'Split only with a purpose. Scouting and parallel objectives can help, but isolated players are easier for Michael to pressure.',
      },
      {
        question: 'Do Heroes have fixed escape locations?',
        answer:
          'The maps include dynamic elements, so this guide avoids fixed route claims unless the live game or patch notes confirm them.',
      },
    ],
    sourceNotes: [
      'Uses official launch descriptions for the Hero side and avoids unverified step recipes.',
      'Mechanics involving escape, police contact, and item effects should be updated as patch notes and in-game testing become available.',
    ],
  },
  {
    slug: 'halloween-the-game-michael-myers',
    title: 'Halloween The Game Michael Myers Guide',
    metaDescription:
      'Learn how Michael Myers works in Halloween: The Game, including stalking, hunting, objective pressure, map control, and what ability details remain unverified.',
    h1: 'Halloween The Game Michael Myers Guide',
    deck:
      'Play Michael as a slow pressure problem for the whole town, not just a tunnel-vision chaser.',
    category: 'Michael Myers Guides',
    targetKeyword: 'halloween the game michael myers',
    quickAnswer:
      'Michael Myers is the solo role in Halloween: The Game multiplayer. Public information confirms a stalking and hunting fantasy, while exact ability numbers and cooldowns should be verified in the live game. Your practical job is to isolate Heroes, interrupt police and escape objectives, and turn map knowledge into pressure.',
    keyPoints: [
      'Use stalking and presence to make Heroes spend time before the chase begins.',
      'Contest objectives that move the team closer to police contact or escape.',
      'Avoid chasing one Hero so long that the rest of the map becomes free.',
    ],
    steps: [
      'Open by reading where Heroes are likely to find residents, items, or police progress.',
      'Use stalking pressure to slow confident movement and force bad routes.',
      'Break up groups before committing to a long chase.',
      'Return to active objectives instead of following noise with no payoff.',
      'Adapt when the map shifts; dynamic elements can make old patrol habits weaker.',
    ],
    table: {
      heading: 'Michael Pressure Plan',
      headers: ['Goal', 'How to think about it', 'What not to assume'],
      rows: [
        [
          'Stalk',
          'Build tension, gather information, and make Heroes afraid to move cleanly.',
          'Exact stalk values or thresholds without current confirmation.',
        ],
        [
          'Hunt',
          'Punish isolated Heroes and force teams to spend tools defensively.',
          'Guaranteed chase routes or fixed loop strength on dynamic maps.',
        ],
        [
          'Deny objectives',
          'Interrupt police contact, escape setup, and resident rescues.',
          'That every objective spawns in one predictable spot.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Objective Pressure Beats Raw Chasing',
        body: [
          'The strongest Michael play is not simply following the first Hero you see forever. Halloween: The Game is built around a town objective loop, so each chase has an opportunity cost.',
          'Ask what the other Heroes gain while you chase. If the answer is police progress, escape setup, or free rescues, switch targets or return to the contested area.',
        ],
      },
      {
        heading: 'Map Knowledge',
        body: [
          'Learn landmark names, choke points, and places where Heroes naturally regroup. Because map elements can be dynamic, build a patrol habit around current information rather than memorized item routes.',
        ],
      },
    ],
    mistakes: [
      'Tunnel-visioning one Hero while three others finish the map.',
      'Treating old footage as proof of current ability values.',
      'Ignoring police contact until the team has already created momentum.',
    ],
    related: [
      'halloween-the-game-michael-myers-abilities',
      'halloween-the-game-maps',
      'halloween-the-game-objectives',
      'halloween-the-game-characters',
    ],
    faq: [
      {
        question: 'Is Michael Myers playable?',
        answer:
          'Yes. Public launch information describes Michael Myers as a playable role in the 1v4 multiplayer mode.',
      },
      {
        question: 'What does Michael Myers do?',
        answer:
          'He stalks, hunts, isolates Heroes, and pressures objectives such as police contact and escape opportunities.',
      },
      {
        question: 'Does this guide list exact Michael stats?',
        answer:
          'Not yet. Exact values should be copied only from current in-game text or official patch notes.',
      },
    ],
    sourceNotes: [
      'Based on official public descriptions of Michael Myers as a stalking and hunting role.',
      'Detailed ability tuning is marked pending until verified from the current launch build.',
    ],
  },
  {
    slug: 'halloween-the-game-maps',
    title: 'Halloween The Game Maps Guide',
    metaDescription:
      'Confirmed Halloween: The Game launch maps, dynamic map notes, and how to read Haddonfield without relying on unverified fixed spawns.',
    h1: 'Halloween The Game Maps Guide',
    deck:
      'Use confirmed launch map names as a starting point, then let the match confirm objectives, item locations, and escape routes.',
    category: 'Maps',
    targetKeyword: 'halloween the game map',
    secondaryKeywords: ['halloween the game maps'],
    quickAnswer:
      `Current launch information lists four maps: ${launchMaps.join(', ')}. Halloween: The Game also uses dynamic map elements, so do not treat item spawns, escape routes, or objective locations as fixed unless the live match confirms them.`,
    keyPoints: [
      'Learn landmarks first, then learn objective patterns.',
      'Expect dynamic elements to affect routes, items, and pressure points.',
      'Use map knowledge differently as Heroes and as Michael Myers.',
    ],
    steps: [
      'Identify the map name and the first clear landmark as soon as the match starts.',
      'Track where residents, police progress, and escape opportunities appear in the current match.',
      'Build a backup route before committing to a long path.',
      'Update map notes only after repeated confirmation or official patch information.',
    ],
    table: {
      heading: 'Launch Maps',
      intro: 'These names are included as launch map references. Tactical details remain deliberately cautious.',
      headers: ['Map', 'How to approach it', 'Unverified details to avoid'],
      rows: launchMaps.map((map) => [
        map,
        'Confirm landmarks, active objectives, and safe rotation paths in the current match.',
        'Fixed item spawns, guaranteed exits, and exact objective chains.',
      ]),
    },
    sections: [
      {
        heading: 'Dynamic Map Elements',
        body: [
          'Dynamic elements are important because they punish copy-paste route memory. A route that looked clean in one match may not offer the same value in another.',
          'For guide writing, this means map pages should describe how to read a location rather than pretending every useful item or escape path has a permanent address.',
        ],
      },
      {
        heading: 'Hero Versus Michael Reads',
        body: [
          'Heroes should value safety, objective access, and backup movement. Michael should value routes that split the team, delay police contact, and make escape attempts expensive.',
        ],
      },
    ],
    mistakes: [
      'Memorizing a fixed item route from a single match.',
      'Ignoring the map name and trying to play every location the same way.',
      'Writing down exact escape positions before they are verified.',
    ],
    related: [
      'halloween-the-game-objectives',
      'halloween-the-game-escape-routes',
      'halloween-the-game-how-to-escape',
      'halloween-the-game-michael-myers',
    ],
    faq: [
      {
        question: 'How many Halloween: The Game maps are listed for launch?',
        answer:
          'The launch map list used here contains East Haddonfield, Haddonfield Heights, Orange Grove Estates, and Haddonfield Town Center.',
      },
      {
        question: 'Are item locations fixed?',
        answer:
          'This guide does not treat them as fixed. Public information points to dynamic map elements, so item and escape locations should be checked in match.',
      },
      {
        question: 'Which map should I learn first?',
        answer:
          'Start with the map you see most often, and focus on landmarks, objective paths, and safe movement before memorizing details.',
      },
    ],
    sourceNotes: [
      'Launch map names are included from currently available project notes and should be cross-checked against official updates.',
      'Dynamic element warnings are intentionally repeated because fixed-spawn claims are easy to get wrong.',
    ],
  },
  {
    slug: 'halloween-the-game-how-to-escape',
    title: 'Halloween The Game How To Escape Guide',
    metaDescription:
      'Quick answer for how to escape in Halloween: The Game, with cautious survivor steps, police and objective notes, and dynamic map warnings.',
    h1: 'How To Escape In Halloween The Game',
    deck:
      'A practical escape framework that gives you the right priorities without pretending the live game has one universal route.',
    category: 'Survivor Guides',
    targetKeyword: 'halloween the game how to escape',
    quickAnswer:
      'To escape, follow the active objective chain, keep residents and teammates alive long enough to create help or exit opportunities, contact police when available, gather useful tools, and move to a confirmed escape route only after the match shows it is active. Exact route requirements can vary by map and version.',
    keyPoints: [
      'The objective UI matters more than a memorized route.',
      'Police contact and resident rescue can be part of the path to survival.',
      'Escaping late is better than dying while searching for a perfect route early.',
    ],
    steps: [
      'Check the current objective as soon as control begins.',
      'Find a useful item or safe teammate before moving deep into danger.',
      'Advance rescue, protection, or police objectives when the match offers them.',
      'Listen and rotate away from Michael before a path fully collapses.',
      'Commit to escape when the route is confirmed instead of lingering for extra loot.',
    ],
    table: {
      heading: 'Escape Decision Table',
      headers: ['Situation', 'Best response', 'Why'],
      rows: [
        [
          'Objective is unclear',
          'Scout nearby landmarks and regroup around confirmed prompts.',
          'Random searching gives Michael time.',
        ],
        [
          'Police contact appears possible',
          'Send cover with the player progressing it.',
          'Confirmed support objectives are likely to be contested.',
        ],
        [
          'Escape route is active',
          'Move decisively and bring defensive tools if available.',
          'Most failed escapes happen when the team hesitates.',
        ],
        [
          'Michael is camping a route',
          'Force a rotation, use items carefully, or pressure another objective.',
          'One blocked route should not freeze the whole team.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Think In Objective States',
        body: [
          'Escape is not just a door at the edge of the map. It is the result of several match states: information, tools, police pressure, route access, and whether Michael is forced to defend too many things at once.',
          'When a player asks how to escape, the shortest honest answer is: finish what the current match asks for, keep a backup route, and leave when the game gives the opening.',
        ],
      },
      {
        heading: 'Why This Guide Avoids Fixed Recipes',
        body: [
          'The game uses dynamic map elements, and public information does not support a permanent route-by-route recipe yet. Exact requirements should be added only after they are confirmed by current in-game prompts or official patch notes.',
        ],
      },
    ],
    mistakes: [
      'Ignoring active objectives while searching every room.',
      'Trying to escape alone when a teammate could cover police or route progress.',
      'Assuming the first route you found is the only possible way out.',
    ],
    related: [
      'halloween-the-game-objectives',
      'halloween-the-game-escape-routes',
      'halloween-the-game-how-to-call-police',
      'halloween-the-game-items',
    ],
    faq: [
      {
        question: 'Is there one fixed escape route?',
        answer:
          'No reliable public guide should claim that yet. Dynamic map elements mean the active route and requirements can vary.',
      },
      {
        question: 'Do I need to call the police to escape?',
        answer:
          'Police contact is a confirmed Hero task, but exact escape dependencies should be verified in the live game.',
      },
      {
        question: 'What is the safest first step?',
        answer:
          'Read the current objective and secure information or a useful item before taking a long isolated route.',
      },
    ],
    sourceNotes: [
      'Built around confirmed Hero objectives and dynamic map language.',
      'Exact escape route recipes are intentionally marked pending verification.',
    ],
  },
  {
    slug: 'halloween-the-game-objectives',
    title: 'Halloween The Game Objectives Guide',
    metaDescription:
      'Understand Halloween: The Game objectives for Heroes and Michael Myers, including residents, police contact, escape chances, and map pressure.',
    h1: 'Halloween The Game Objectives Guide',
    deck:
      'Learn what each side is trying to accomplish and how to avoid wasting time on the wrong part of the match.',
    category: 'Core Guides',
    targetKeyword: 'halloween the game objectives',
    quickAnswer:
      'Heroes of Haddonfield focus on protecting or rescuing residents, using weapons and household items, contacting police, finding escape opportunities, and surviving. Michael Myers pressures the same objective loop by stalking, hunting, isolating Heroes, and interrupting progress.',
    keyPoints: [
      'Objectives are shared pressure points, not separate chores.',
      'Every Hero action should either create safety, information, police progress, or escape progress.',
      'Michael wins time by making those actions slow, risky, or impossible.',
    ],
    steps: [
      'Identify whether the team currently needs information, protection, police progress, items, or escape access.',
      'Choose the action that moves the objective state forward fastest without isolating the team.',
      'Call out when Michael leaves one objective so another player can progress it.',
      'Stop repeating an action if the map state has changed.',
    ],
    table: {
      heading: 'Objective Pressure Points',
      headers: ['Objective area', 'Hero focus', 'Michael pressure'],
      rows: [
        [
          'Residents',
          'Protect, rescue, and respond to the match state around NPCs.',
          'Force delays, isolate helpers, and punish predictable rescue routes.',
        ],
        [
          'Police contact',
          'Progress the contact objective when it appears and cover the player doing it.',
          'Interrupt the contact point or make the team spend items defending it.',
        ],
        [
          'Items',
          'Use weapons and household objects to create time rather than hoard them forever.',
          'Bait early item use before the most important objective phase.',
        ],
        [
          'Escape opportunities',
          'Confirm route state, gather cover, and leave decisively.',
          'Deny the route, split the team, or force a risky rotation.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Objective Tempo',
        body: [
          'Tempo is the difference between doing a correct task and doing it soon enough to matter. A Hero can find a useful object too late, and Michael can win value from time even without immediately ending a chase.',
          'Good teams keep asking which action changes the next minute. If nothing changes, the action is probably busywork.',
        ],
      },
      {
        heading: 'Patch-Safe Guide Writing',
        body: [
          'Objective pages are especially vulnerable to wrong details after updates. Keep exact timers, required items, and location recipes out of the guide until they are verified for the current version.',
        ],
      },
    ],
    mistakes: [
      'Treating objectives as optional while only chasing or hiding.',
      'Leaving the police objective uncovered when Michael is nearby.',
      'Writing exact item requirements into a guide without current confirmation.',
    ],
    related: [
      'halloween-the-game-survivors',
      'halloween-the-game-how-to-escape',
      'halloween-the-game-how-to-call-police',
      'halloween-the-game-maps',
    ],
    faq: [
      {
        question: 'What are the main objectives in Halloween: The Game?',
        answer:
          'Public information points to protecting or rescuing residents, using items, contacting police, finding escape chances, and surviving Michael Myers.',
      },
      {
        question: 'Does Michael have objectives too?',
        answer:
          'Yes. Michael pressures the Hero objective loop by stalking, hunting, isolating players, and disrupting progress.',
      },
      {
        question: 'Will objective details change?',
        answer:
          'They can. Objective rules are exactly the kind of information that should be checked against current patch notes.',
      },
    ],
    sourceNotes: [
      'Reflects public launch descriptions of the multiplayer objective loop.',
      'Exact timers, locations, and item requirements remain pending verification.',
    ],
  },
  {
    slug: 'halloween-the-game-escape-routes',
    title: 'Halloween The Game Escape Routes Guide',
    metaDescription:
      'A cautious Halloween: The Game escape routes guide covering dynamic maps, route confirmation, backup plans, and survivor coordination.',
    h1: 'Halloween The Game Escape Routes Guide',
    deck:
      'Escape routes are best treated as live match information, not fixed map trivia.',
    category: 'Survivor Guides',
    targetKeyword: 'halloween the game escape routes',
    quickAnswer:
      'Escape routes exist as part of the Hero survival loop, but the game uses dynamic map elements and public information does not confirm fixed locations for every route. Treat escape as a match-state problem: identify a route, check its requirements, plan cover, and keep a backup if Michael blocks it.',
    keyPoints: [
      'Confirm a route before committing the team.',
      'Carry or save items for the final contested movement.',
      'A backup route matters because Michael can over-defend the obvious exit.',
    ],
    steps: [
      'Scout without dragging the whole team into danger.',
      'Call out route information only after you know what the match is showing.',
      'Pair route progress with police or resident pressure when possible.',
      'Force Michael to choose between multiple threats before the final move.',
      'Do not wait at a route so long that the team loses all map pressure.',
    ],
    table: {
      heading: 'Route Confidence',
      headers: ['Claim type', 'Current status', 'How to handle it'],
      rows: [
        [
          'Escape opportunities exist',
          'Confirmed at the public objective level.',
          'Build guides around route confirmation and team movement.',
        ],
        [
          'Fixed route locations',
          'Not safe to state universally here.',
          'Verify on current maps before publishing exact locations.',
        ],
        [
          'Item-specific route requirements',
          'Pending reliable confirmation.',
          'Use in-game prompts and patch notes before writing recipes.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Route Pressure',
        body: [
          'An escape route is valuable only if the team can reach it with enough time and protection. A discovered route that everyone announces too early can become a trap.',
          'Strong Hero teams keep pressure elsewhere, then rotate together when the route is ready.',
        ],
      },
      {
        heading: 'Backup Planning',
        body: [
          'If Michael is waiting at the obvious path, stop feeding the same lane. Use another objective, another angle, or a teammate with a defensive item to change the state before trying again.',
        ],
      },
    ],
    mistakes: [
      'Standing at an inactive route while objectives stall.',
      'Assuming old map callouts prove the current route position.',
      'Rotating alone through a high-risk path with no item or teammate.',
    ],
    related: [
      'halloween-the-game-how-to-escape',
      'halloween-the-game-maps',
      'halloween-the-game-objectives',
      'halloween-the-game-items',
    ],
    faq: [
      {
        question: 'Are escape routes random?',
        answer:
          'The guide can confirm dynamic map elements, but it avoids overclaiming the exact randomization rules until verified.',
      },
      {
        question: 'Should every Hero run to the first route found?',
        answer:
          'No. Confirm the route state and keep pressure elsewhere so Michael cannot shut down the whole team in one place.',
      },
      {
        question: 'Can Michael block an escape route?',
        answer:
          'Michael can pressure and contest escape attempts. Exact blocking mechanics should be checked in the current build.',
      },
    ],
    sourceNotes: [
      'Route advice is written around confirmed escape opportunities and dynamic map behavior.',
      'Exact route maps should be added only after reliable current-version verification.',
    ],
  },
  {
    slug: 'halloween-the-game-how-to-call-police',
    title: 'Halloween The Game How To Call Police Guide',
    metaDescription:
      'How to approach calling the police in Halloween: The Game, with confirmed objective context and clear notes on unverified device or item requirements.',
    h1: 'How To Call Police In Halloween The Game',
    deck:
      'Police contact is confirmed as a Hero task. The exact live-match method needs current verification, so this guide focuses on how to approach it safely.',
    category: 'Survivor Guides',
    targetKeyword: 'halloween the game how to call police',
    quickAnswer:
      'Calling the police is part of the Heroes of Haddonfield objective loop, but public information does not reliably confirm the exact device, item, location, timer, or number of steps. In match, follow the active objective prompt, send cover with the player making contact, and expect Michael to contest it.',
    keyPoints: [
      'Treat police contact as a contested team objective.',
      'Do not publish a device or item recipe until it is verified.',
      'Cover and timing matter more than reaching the objective alone.',
    ],
    steps: [
      'Wait for the match objective or UI prompt that points toward police contact.',
      'Check the surrounding route before starting the interaction.',
      'Have at least one teammate nearby or pressuring another objective.',
      'Use defensive items to finish the contact, not just to start it.',
      'Rotate out after progress is made instead of letting Michael trap the area.',
    ],
    table: {
      heading: 'Police Contact Checklist',
      headers: ['Question', 'Recommended answer', 'Why'],
      rows: [
        [
          'Is the objective active?',
          'Follow the current match prompt.',
          'The game state matters more than a general guide.',
        ],
        [
          'Is Michael nearby?',
          'Delay, bait pressure, or bring cover.',
          'Police progress is likely to draw attention.',
        ],
        [
          'Do you know the exact requirement?',
          'Use the in-game instruction until verified externally.',
          'Unverified item recipes mislead new players.',
        ],
      ],
    },
    sections: [
      {
        heading: 'What Is Confirmed',
        body: [
          'Public materials describe Heroes contacting police as one of their survival tasks. That is enough to guide team priorities, but not enough to claim an exact interaction chain.',
        ],
      },
      {
        heading: 'How To Play Around It',
        body: [
          'Police contact creates pressure because it forces Michael to respond. Even a failed attempt can create value if another Hero uses that time to rescue a resident, move an item, or prepare an escape route.',
        ],
      },
    ],
    mistakes: [
      'Starting police contact alone with no cover and no exit plan.',
      'Repeating an unverified phone, radio, or item claim as fact.',
      'Leaving the objective after progress starts but before the team can benefit from it.',
    ],
    related: [
      'halloween-the-game-objectives',
      'halloween-the-game-how-to-escape',
      'halloween-the-game-survivors',
      'halloween-the-game-escape-routes',
    ],
    faq: [
      {
        question: 'Can Heroes call the police?',
        answer:
          'Yes. Police contact is described as part of the Hero objective loop.',
      },
      {
        question: 'What item do I need to call police?',
        answer:
          'This guide does not state a required item until current in-game prompts or official notes verify it.',
      },
      {
        question: 'Should one player handle police contact?',
        answer:
          'One player may perform the interaction, but the team should cover, distract, or pressure another objective.',
      },
    ],
    sourceNotes: [
      'Police contact is confirmed as a task; exact interaction details are pending verification.',
      'This page is structured so a verified step list can be added quickly after enough current evidence exists.',
    ],
  },
  {
    slug: 'halloween-the-game-michael-myers-abilities',
    title: 'Halloween The Game Michael Myers Abilities Guide',
    metaDescription:
      'Michael Myers abilities guide for Halloween: The Game, covering confirmed stalking and hunting themes while avoiding unverified cooldowns or stats.',
    h1: 'Halloween The Game Michael Myers Abilities Guide',
    deck:
      'A launch-safe ability overview that separates confirmed role fantasy from numbers that still need verification.',
    category: 'Michael Myers Guides',
    targetKeyword: 'halloween the game michael myers abilities',
    quickAnswer:
      'Confirmed public information frames Michael Myers around stalking and hunting. It also references player abilities, but exact ability names, cooldowns, values, and progression rules should be verified in the current game before being published as fact.',
    keyPoints: [
      'Build around pressure, information, isolation, and objective denial.',
      'Do not rely on exact ability numbers from pre-release footage or old posts.',
      'Update ability pages whenever patch notes change tuning.',
    ],
    steps: [
      'Read the current in-game ability text before choosing a build.',
      'Test how stalking pressure affects Hero movement and objective timing.',
      'Use hunting tools to finish isolated targets or force item use.',
      'Return to objectives when ability pressure has done its job.',
    ],
    table: {
      heading: 'Ability Themes',
      headers: ['Theme', 'Confirmed use', 'Pending verification'],
      rows: [
        [
          'Stalking',
          'Central to Michael fantasy and pressure.',
          'Exact meter, range, effects, and thresholds.',
        ],
        [
          'Hunting',
          'Used to chase, isolate, and punish Heroes.',
          'Cooldowns, movement modifiers, and counterplay values.',
        ],
        [
          'Objective denial',
          'Michael can pressure police, rescue, item, and escape states.',
          'Specific ability interactions with each objective.',
        ],
      ],
    },
    sections: [
      {
        heading: 'How To Evaluate An Ability',
        body: [
          'Ask what the ability changes: information, positioning, time, fear, or objective access. An ability can be strong even without an immediate down if it forces three Heroes to stop progressing the map.',
        ],
      },
      {
        heading: 'What To Record For Future Builds',
        body: [
          'When verified build pages are added, capture the exact in-game ability name, current patch, effect text, tradeoffs, and objective matchups. Avoid copying pre-release wording if launch text differs.',
        ],
      },
    ],
    mistakes: [
      'Publishing cooldowns without a current source.',
      'Judging an ability only by chase value and ignoring objective pressure.',
      'Assuming every Hero team will counter abilities the same way.',
    ],
    related: [
      'halloween-the-game-michael-myers',
      'halloween-the-game-maps',
      'halloween-the-game-objectives',
      'halloween-the-game-characters',
    ],
    faq: [
      {
        question: 'What abilities does Michael Myers have?',
        answer:
          'Public information confirms stalking and hunting themes, but exact current ability names and values should be verified in-game.',
      },
      {
        question: 'Are Michael ability cooldowns listed here?',
        answer:
          'No. The page avoids cooldowns until reliable current-version confirmation is available.',
      },
      {
        question: 'What should new Michael players focus on first?',
        answer:
          'Focus on objective pressure and isolating Heroes rather than chasing one player across the entire map.',
      },
    ],
    sourceNotes: [
      'Uses official public role descriptions for broad ability themes.',
      'Exact tuning is held back until current launch-build evidence is available.',
    ],
  },
  {
    slug: 'halloween-the-game-items',
    title: 'Halloween The Game Items Guide',
    metaDescription:
      'Halloween: The Game items guide covering confirmed weapons and household objects, survivor item priorities, and unverified item-effect cautions.',
    h1: 'Halloween The Game Items Guide',
    deck:
      'Use items to buy objective time, not to invent fake stat tables before the current build is verified.',
    category: 'Survivor Guides',
    targetKeyword: 'halloween the game items',
    quickAnswer:
      'Official information confirms that Heroes can use weapons and household items against Michael Myers. The exact item roster, spawn logic, durability, stun values, and objective requirements should be verified in-game, so the safest first rule is to save useful items for police contact, rescue, and escape pressure.',
    keyPoints: [
      'Items are tools for time, space, and objective progress.',
      'Do not hoard a useful item until it no longer matters.',
      'Do not publish exact item effects without a current source.',
    ],
    steps: [
      'Pick up items that support the next objective instead of chasing a perfect loadout.',
      'Communicate important tools so the team knows who can cover.',
      'Use defensive items when Michael contests a high-value action.',
      'Replace spent or low-value items only if it does not stall the objective.',
    ],
    table: {
      heading: 'Item Categories',
      headers: ['Category', 'Likely purpose', 'Verification needed'],
      rows: [
        [
          'Weapons',
          'Create space, defend teammates, and contest Michael pressure.',
          'Exact effects, durability, and recovery rules.',
        ],
        [
          'Household items',
          'Support improvised defense or objective play.',
          'Full list, interaction rules, and map spawn behavior.',
        ],
        [
          'Objective tools',
          'May be tied to police, rescue, or escape progress if the game prompts for them.',
          'Whether a specific tool is required for a specific route.',
        ],
      ],
    },
    sections: [
      {
        heading: 'Item Value Is Contextual',
        body: [
          'The best item is the one that protects the next important action. A defensive tool near a police objective may be worth more than a stronger-looking item carried far away from the team.',
        ],
      },
      {
        heading: 'Guide Update Rules',
        body: [
          'Future item pages should record item name, map availability, effect text, current version, and whether the item is required by an objective. If any part is uncertain, mark it as pending rather than filling the gap.',
        ],
      },
    ],
    mistakes: [
      'Using every item during the first scare instead of saving one for a key objective.',
      'Carrying an item without telling teammates what cover is available.',
      'Publishing a complete item list from unverified community memory.',
    ],
    related: [
      'halloween-the-game-survivors',
      'halloween-the-game-how-to-escape',
      'halloween-the-game-how-to-call-police',
      'halloween-the-game-maps',
    ],
    faq: [
      {
        question: 'What items are in Halloween: The Game?',
        answer:
          'Public information confirms weapons and household items, but this page waits for reliable current-version evidence before listing exact item names and effects.',
      },
      {
        question: 'Should I use items on Michael immediately?',
        answer:
          'Use them when they protect an important objective, teammate, or escape attempt. Panic use can waste team resources.',
      },
      {
        question: 'Are item spawns fixed?',
        answer:
          'This guide does not assume fixed spawns because the maps include dynamic elements.',
      },
    ],
    sourceNotes: [
      'Uses public launch descriptions of weapons and household items.',
      'Exact item tables are intentionally deferred until verified from the live game.',
    ],
  },
  {
    slug: 'halloween-the-game-walkthrough',
    title: 'Halloween The Game Walkthrough',
    metaDescription:
      'Spoiler-light Halloween: The Game walkthrough hub for multiplayer fundamentals and The Night He Came Home story mode verification notes.',
    h1: 'Halloween The Game Walkthrough',
    deck:
      'A spoiler-light launch walkthrough that helps players start cleanly while leaving room for verified chapter-by-chapter story updates.',
    category: 'Story',
    targetKeyword: 'halloween the game walkthrough',
    quickAnswer:
      'Halloween: The Game includes a standalone single-player story mode called The Night He Came Home. Public information confirms the mode, but not a complete verified chapter-by-chapter walkthrough here yet. For now, use the walkthrough as a first-run framework: follow mission prompts, learn objective language, note map landmarks, and avoid assuming multiplayer routes apply exactly to story mode.',
    keyPoints: [
      'Story mode exists separately from 1v4 multiplayer.',
      'Chapter names and exact mission objectives should be verified before publication.',
      'The best launch walkthrough helps players learn systems without inventing spoilers.',
    ],
    steps: [
      'Start story mode by following the first objective prompt exactly.',
      'Record the mission name, location, and any required interaction from the in-game text.',
      'Separate story-only rules from multiplayer rules.',
      'Update the walkthrough after each verified chapter with concise steps and spoiler labels.',
    ],
    table: {
      heading: 'Walkthrough Status',
      headers: ['Area', 'Status', 'Next update needed'],
      rows: [
        [
          'The Night He Came Home',
          'Confirmed standalone single-player story mode.',
          'Verified mission names, objectives, and chapter order.',
        ],
        [
          'Multiplayer basics',
          'Confirmed 1v4 mode with Heroes and Michael Myers.',
          'Current objective-specific step screenshots or notes.',
        ],
        [
          'Map-by-map walkthroughs',
          'Launch map names are listed separately.',
          'Reliable route and objective evidence for each map.',
        ],
      ],
    },
    sections: [
      {
        heading: 'First-Run Approach',
        body: [
          'Do not rush to write a fake mission guide from trailers or secondhand comments. On a first run, capture objective language, failure conditions, and whether the mission teaches a mechanic used in multiplayer.',
          'Once verified, each story chapter should get a short walkthrough with a spoiler-light top answer and a clearly labeled spoiler section underneath.',
        ],
      },
      {
        heading: 'How Story Helps Multiplayer',
        body: [
          'A good story walkthrough can teach landmarks, objective wording, and the rhythm of Michael pressure. It should not claim that a story route proves multiplayer item spawns or escape locations.',
        ],
      },
    ],
    mistakes: [
      'Publishing chapter order before checking the live story mode.',
      'Mixing story-only scripted objectives with multiplayer objectives.',
      'Using walkthrough filler instead of direct, verified steps.',
    ],
    related: [
      'halloween-the-game-characters',
      'halloween-the-game-michael-myers',
      'halloween-the-game-maps',
      'halloween-the-game-objectives',
    ],
    faq: [
      {
        question: 'Does Halloween: The Game have a story mode?',
        answer:
          'Yes. Public launch information describes a standalone single-player story mode called The Night He Came Home.',
      },
      {
        question: 'Is this a complete story walkthrough?',
        answer:
          'Not yet. It is a launch-safe framework until chapter names and objectives are verified from the current game.',
      },
      {
        question: 'Will multiplayer guides help story mode?',
        answer:
          'They can help with systems and landmarks, but story-specific objectives should be treated separately.',
      },
    ],
    sourceNotes: [
      'Confirms the existence of The Night He Came Home while avoiding unverified mission details.',
      'Designed for fast expansion into chapter guides once reliable evidence is available.',
    ],
  },
];

export const guideMap = new Map(guidePages.map((guide) => [guide.slug, guide]));

export function getGuide(slug: string) {
  return guideMap.get(slug);
}

export function getRelatedGuides(guide: GuidePage) {
  return guide.related
    .map((slug) => getGuide(slug))
    .filter((item): item is GuidePage => Boolean(item));
}

export const popularGuides = [
  'halloween-the-game-how-to-escape',
  'halloween-the-game-objectives',
  'halloween-the-game-maps',
  'halloween-the-game-characters',
].map((slug) => getGuide(slug)!);

export const survivorCluster = [
  'halloween-the-game-survivors',
  'halloween-the-game-escape-routes',
  'halloween-the-game-how-to-call-police',
  'halloween-the-game-items',
  'halloween-the-game-maps',
].map((slug) => getGuide(slug)!);

export const michaelCluster = [
  'halloween-the-game-michael-myers',
  'halloween-the-game-michael-myers-abilities',
  'halloween-the-game-maps',
  'halloween-the-game-objectives',
  'halloween-the-game-characters',
].map((slug) => getGuide(slug)!);

export const latestGuides = [...guidePages].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export const homeMetadata = {
  title: 'Halloween: The Game Guides',
  description:
    'Quick, careful Halloween: The Game guides for Heroes of Haddonfield, Michael Myers, maps, objectives, escape routes, police contact, items, and story mode.',
};

export function guidePath(slug: string) {
  return `/${slug}`;
}

export function pageLastUpdated() {
  return siteConfig.lastUpdated;
}
