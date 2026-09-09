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

const guideContentUpdates: Record<string, Partial<GuidePage>> = {
  'halloween-the-game-characters': {
    quickAnswer: `Halloween: The Game launches with four movie legacy Heroes, six new civilian Heroes, and Michael Myers as the Boogeyman side. Bob, Lynda, Annie, and Laurie are confirmed legacy playable characters, while Jennifer, Tanya, Rachel, Eric, Marcus, and Thomas round out the civilian roster. In matches, character choice matters less than role discipline: Heroes must locate residents, arm them, assign them to tasks, and open escape routes while Michael uses stalking, mobility, and pressure to break the rescue chain.`,
    keyPoints: [
      `Confirmed legacy Heroes: Bob, Lynda, Annie, and Laurie.`,
      `Confirmed new Heroes: Jennifer, Tanya, Rachel, Eric, Marcus, and Thomas.`,
      `Michael Myers is the playable 1v4 threat, with Killer Sense, Stalk, Shape Jump, Shape Dash, and equipped abilities.`,
      `NPC residents are part of the character ecosystem; Heroes can command them to follow, hide, search, fight, call police, or move toward escape.`,
      `Exact balance, perks, cosmetics, and unlock levels can change with patches, so treat numbers as version-specific.`
    ],
    steps: [
      `Choose a Hero based on the job you intend to do: scouting objectives, escorting residents, carrying repair items, or distracting Michael.`,
      `Find residents early and give them useful orders instead of playing as a lone survivor. A resident sent to search or call police can create progress while you work elsewhere.`,
      `Match items to the character's current job. Repair kits, gas cans, keys, fuse pieces, bolt cutters, weapons, and distraction items are only valuable when moved toward an active route.`,
      `When playing Michael, pick a target cluster, stalk long enough to improve pressure, then interrupt the objective that would create the fastest escape.`,
      `Rotate between residents, Heroes, and exit routes. Characters win or lose through map pressure, not through isolated duels.`
    ],
    table: {
      heading: `Confirmed Character Groups`,
      headers: [`Group`, `Confirmed Names`, `Match Role`, `What Players Should Do`],
      rows: [
        [`Legacy Heroes`, `Bob, Lynda, Annie, Laurie`, `Playable civilian side`, `Use them to rescue residents, gather route items, call police, and escape.`],
        [`New Heroes`, `Jennifer, Tanya, Rachel, Eric, Marcus, Thomas`, `Playable civilian side`, `Fill practical match jobs such as scout, repair runner, escort, or defender.`],
        [`Michael Myers`, `The Boogeyman`, `Playable killer side`, `Stalk, isolate, disable objectives, and stop police or vehicle escapes.`],
        [`Residents`, `Match-spawned NPC civilians`, `Rescue and command targets`, `Direct them to hide, follow, search, call cops, fight, defend, or leave through opened routes.`]
      ]
    },
    sections: [
      {
        heading: `Legacy Characters in Practice`,
        body: [`The confirmed movie characters make the roster recognizable, but the live match is built around what they do after spawning. Laurie, Annie, Lynda, and Bob still need to play the same core civilian loop: read the objective prompts, collect route items, keep residents moving, and avoid giving Michael easy isolated kills. A legacy name does not replace teamwork; it gives fans a familiar face inside the rescue plan.`]
      },
      {
        heading: `New Heroes and Team Jobs`,
        body: [`The six new Heroes give lobbies enough variety for different jobs. One player can sweep houses for keys, tools, weapons, and residents; another can bring repair pieces to a car or gate; another can escort civilians to a cellar or open route. Because objectives and escape opportunities can vary by match, the most useful character is the one whose player adapts fastest to the route that is actually active.`]
      },
      {
        heading: `How Michael Changes the Character Game`,
        body: [`Michael is not just chasing one Hero at a time. His pressure comes from making the entire character network unsafe: residents stop moving, phones become risky, lights and electronics can be threatened, and open routes need guarding. Strong Michael players identify which Hero is carrying progress, then use stalking and mobility to turn that progress into panic.`]
      }
    ],
    mistakes: [
      `Choosing a favorite character and ignoring the current objective route.`,
      `Leaving residents idle instead of assigning them useful commands.`,
      `Treating NPC residents as background dressing; they are part of the win condition.`,
      `As Michael, tunneling one noisy Hero while another player quietly opens the escape.`
    ],
    faq: [
      { question: `Who are the confirmed playable Heroes?`, answer: `Official roster information confirms Bob, Lynda, Annie, Laurie, Jennifer, Tanya, Rachel, Eric, Marcus, and Thomas as civilian Heroes.` },
      { question: `Is Michael Myers playable?`, answer: `Yes. Halloween: The Game is built around a 1v4 setup where one player can play Michael Myers and four players play Heroes.` },
      { question: `Do characters have fixed escape routes?`, answer: `No reliable source confirms character-locked exits. Escape opportunities and objective states can vary by match, so character choice should support the route your team finds.` }
    ],
    sourceNotes: [
      `Official launch and legacy-character posts confirm the character names and 1v4 structure.`,
      `Official multiplayer material and recent guides support the resident-command loop used in the practical advice above.`
    ]
  },
  'halloween-the-game-survivors': {
    quickAnswer: `Survivors, called Heroes in Halloween: The Game, win by rescuing residents and escaping through a route such as a storm cellar, sedan, gate, police wagon, or other match-enabled opportunity. The practical loop is: find residents, assign commands, collect the route items the match asks for, call police when possible, and move people toward the safest escape before Michael collapses the map.`,
    keyPoints: [
      `Heroes are not just hiding; they actively rescue and direct Haddonfield residents.`,
      `Residents can be asked to follow, hide, search, attack, defend, call police, or escape when an exit is available.`,
      `Escape routes can include storm cellars, a sedan, a gate, and police wagon extraction, with exact availability varying by match.`,
      `Useful items include route tools, repair supplies, keys, weapons, and distractions.`,
      `Stamina matters more after launch tuning, so sprint only when moving between cover, breaking line of sight, or carrying urgent progress.`
    ],
    steps: [
      `In the opening minute, enter nearby homes and look for both residents and route clues. Do not spend too long looting one room if objective prompts are already pointing elsewhere.`,
      `Give residents jobs immediately. A resident calling police or searching another building can save time while your Hero carries a key, repair kit, or gas can.`,
      `Commit to the clearest route. If you find sedan parts, build around the car; if you find a cellar key or bolt cutters, start moving people toward a cellar; if phone access is available, begin police pressure.`,
      `Use weapons and distractions to create time, not to start unnecessary fights. Michael usually wins if Heroes gather in one place without finishing the route.`,
      `Once an exit opens, extract residents and Heroes in an orderly way. Holding a route too long gives Michael time to close distance, sabotage, or catch stragglers.`
    ],
    table: {
      heading: `Hero Match Priorities`,
      headers: [`Phase`, `Main Job`, `Good Sign`, `Danger Sign`],
      rows: [
        [`Opening`, `Find residents and route clues`, `Residents receive commands quickly`, `Players loot silently while residents remain idle`],
        [`Mid Match`, `Move route items and call police`, `One route is clearly being completed`, `Every Hero chases a different plan`],
        [`Chase`, `Break line of sight and preserve stamina`, `Michael loses track long enough for progress`, `You sprint in open streets with no destination`],
        [`Escape`, `Guide residents and leave`, `Exit is used as soon as it is ready`, `Team waits around a completed route`]
      ]
    },
    sections: [
      {
        heading: `The Resident Economy`,
        body: [`The biggest difference from a simple hide-and-seek horror match is that residents are active resources. A Hero who finds three residents and gives each a useful order may create more escape progress than a Hero who personally carries every item. Send residents to call police when phones are available, order vulnerable residents to hide if Michael is nearby, and bring followers to an exit only after the route is nearly usable.`]
      },
      {
        heading: `When to Fight`,
        body: [`Weapons can buy time, protect a resident, or punish Michael for overcommitting, but they are not the main victory condition. Use a shotgun, rifle, axe, knife, or other confirmed defensive item when it opens space for an objective. Firecrackers and similar distractions are best saved for rescues, doorway escapes, or breaking a chase near a route.`]
      },
      {
        heading: `How to Pick a Route`,
        body: [`The right escape plan is the one your match is already giving you. A repair kit plus gas can makes the sedan more attractive; a key or bolt cutters near a cellar makes the cellar route faster; active phone access supports police escalation. Because maps are dynamic, avoid waiting for a perfect route that may not appear in the same place next round.`]
      }
    ],
    mistakes: [
      `Trying to solo-loot the map while residents do nothing.`,
      `Starting the sedan, gate, and police plan at the same time with no coordination.`,
      `Using sprint for routine travel and having no stamina when Michael arrives.`,
      `Keeping followers in dangerous streets before an exit is actually ready.`
    ],
    faq: [
      { question: `Are Survivors called Heroes?`, answer: `Yes. Official material uses Hero for the civilian player side, while many players still search for survivor guides.` },
      { question: `Can residents help with objectives?`, answer: `Yes. Reliable gameplay coverage describes residents taking commands such as search, call police, follow, hide, attack, defend, and escape.` },
      { question: `Should I always rush the car?`, answer: `No. The sedan is strong when its items appear early, but a cellar, gate, or police extraction can be faster depending on the match.` }
    ],
    sourceNotes: [
      `Official multiplayer coverage confirms resident commands and dynamic match structure.`,
      `Recent escape guides independently describe storm cellar, sedan, gate, and police extraction routes.`
    ]
  },
  'halloween-the-game-michael-myers': {
    quickAnswer: `Michael Myers wins by building pressure, not by chasing randomly. His core loop is to locate clusters with Killer Sense and sound cues, stalk targets to improve threat, use Shape Jump or Shape Dash to appear where Heroes feel safe, then interrupt the objective route that would let residents escape. A good Michael player watches the map economy: phones, cars, gates, cellars, residents, and police pressure all matter.`,
    keyPoints: [
      `Killer Sense helps Michael locate civilian activity and likely resident clusters.`,
      `Stalk rewards line-of-sight pressure and makes later engagements more dangerous.`,
      `Shape Jump is his signature reposition tool, but official material ties it to darkness and being out of direct line of sight unless supported by abilities.`,
      `Shape Dash creates chase pressure and can punish survivors who cross open space.`,
      `Abilities such as Detection Pulse, Blackout, Reality Tear, Evil Presence, Shape Mines, and Shadow Strike change how Michael controls objectives.`
    ],
    steps: [
      `Open by scanning for active houses, resident movement, phones, and early route progress. Do not spend the first minute tunneling a single Hero who is not carrying objective value.`,
      `Stalk from cover or darkness whenever Heroes are busy with residents, repairs, or phone calls. This lets you threaten the group before starting the chase.`,
      `Use mobility to cut routes, not just to follow footprints. Shape Jump near likely exits, phone areas, or objective buildings before Heroes finish the interaction.`,
      `Choose targets by progress. A Hero carrying keys, repair tools, gas, or escorting multiple residents is usually worth more than an isolated decoy.`,
      `After a down or disruption, rotate immediately to the next threatened objective. Michael becomes strongest when Heroes feel that every route is watched.`
    ],
    table: {
      heading: `Michael Gameplay Loop`,
      headers: [`Loop Step`, `What It Means`, `Best Use`, `Common Mistake`],
      rows: [
        [`Find`, `Use sense, sound, and objective movement`, `Locate grouped residents and active routes`, `Chasing the first person seen`],
        [`Stalk`, `Build threat before direct contact`, `Watch from darkness or angles while Heroes work`, `Breaking cover too early`],
        [`Collapse`, `Use jump, dash, or ability pressure`, `Arrive where escape progress is happening`, `Using mobility only after losing a chase`],
        [`Deny`, `Stop exits, phones, cars, and escorts`, `Force Heroes to restart or scatter`, `Camping an empty area after the route changes`]
      ]
    },
    sections: [
      {
        heading: `Stalking With Purpose`,
        body: [`Stalk is valuable because it lets Michael turn information into future threat. The best moments are when Heroes are distracted by a skill check, a resident command, or a route item. Watch long enough to make the next approach count, then strike when they must choose between finishing the task and running. Patch notes also show that stalk behavior can be tuned, so exact timing should be treated as patch-sensitive.`]
      },
      {
        heading: `Objective Pressure`,
        body: [`Michael should think in routes. If the team is gathering sedan parts, patrol the car and the nearby buildings that might contain missing pieces. If police calls are progressing, interrupt phone users and watch for arriving officers or wagon pressure. If a cellar or gate opens, punish the escort path rather than chasing a Hero who already left the area.`]
      },
      {
        heading: `Target Selection`,
        body: [`The highest-value target is usually the player creating escape progress. That can be a repair runner, a resident escort, a phone caller, or a Hero carrying a key item. New Michael players often chase the loudest player; experienced ones ask which player would end the match fastest if left alone.`]
      }
    ],
    mistakes: [
      `Starting every encounter as a raw chase instead of stalking first.`,
      `Using Shape Jump into lit or watched positions without considering line of sight.`,
      `Ignoring phone calls until police pressure has already escalated.`,
      `Camping one exit while another route becomes active elsewhere.`,
      `Using Blackout, Detection Pulse, or Reality Tear without a follow-up path to an objective.`
    ],
    faq: [
      { question: `How do you play Michael Myers well?`, answer: `Track objective progress, stalk before committing, use mobility to cut off routes, and target Heroes who are moving residents, calling police, or carrying route items.` },
      { question: `Does Michael rely on exact cooldown numbers?`, answer: `No guide should depend on fixed cooldowns right now. Exact values can change by patch, but ability roles and timing windows are still useful to learn.` },
      { question: `What should beginners stop doing?`, answer: `Stop chasing the first visible Hero forever. Michael wins by denying the team economy, not by taking scenic tours through empty streets.` }
    ],
    sourceNotes: [
      `Official multiplayer and progression posts confirm Killer Sense, Stalk, Shape Jump, Shape Dash, and named abilities.`,
      `Patch notes confirm Stalk, Shape Dash, Reality Tear, Detection Pulse, and Evil Presence have already received launch-window tuning.`,
      `Recent guide coverage supports Blackout, Reality Tear, and Detection Pulse as practical objective-pressure tools.`
    ]
  },
  'halloween-the-game-maps': {
    quickAnswer: `Halloween: The Game has four confirmed launch maps: East Haddonfield, Haddonfield Heights, Orange Grove Estates, and Haddonfield Town Center. They are not just reskins. East Haddonfield leans rural and spread out, Haddonfield Heights is the familiar residential neighborhood around the Myers and Strode homes, Orange Grove Estates is a larger suburban estate area with multi-story houses and yards, and Haddonfield Town Center concentrates players around storefronts, civic buildings, roads, and the cemetery. Exact item, resident, and exit positions can vary by match.`,
    keyPoints: [
      `East Haddonfield: rural edge of town with landmarks such as The Rabbit in Red Lounge, Phelps Garage, Midwest Feed Company, farmland, and open roads.`,
      `Haddonfield Heights: classic residential Haddonfield with the Myers house, Strode house, and a visible water tower.`,
      `Orange Grove Estates: wealthier residential blocks with multi-story homes, detached garages, balconies, fences, hedges, park space, playground, basketball court, Doyle house, and Wallace house.`,
      `Haddonfield Town Center: business and civic district with Nichols Hardware, A-Side Music Store, Hill Garden Center, Patty's Pub, post office, auto repair, and the cemetery.`,
      `Dynamic map features mean route items and exits should be treated as match-specific rather than memorized as fixed spawns.`
    ],
    steps: [
      `At spawn, identify the map by its biggest landmark cluster before looting deeply. This tells your team whether rotations are likely to be street-heavy, house-heavy, or business-heavy.`,
      `Call out route clues by landmark, not vague directions. Saying garage, pub, cemetery, Myers house, or park is faster than saying over here.`,
      `On wider maps, move repair items and residents earlier because long returns are dangerous once Michael has pressure.`,
      `On dense residential maps, check back doors, fences, garages, and dark interiors before committing to a chase route.`,
      `As Michael, patrol the likely routes between landmarks instead of standing on one objective. Dynamic exits reward area control.`
    ],
    table: {
      heading: `Launch Map Differences`,
      headers: [`Map`, `Recognizable Landmarks`, `Layout Feel`, `Hero Consideration`, `Michael Consideration`],
      rows: [
        [`East Haddonfield`, `Rabbit in Red Lounge, Phelps Garage, Midwest Feed Company, farmland`, `More rural, more spread out, more exposed travel`, `Plan rotations and avoid crossing long roads without stamina`, `Cut off open-road movement and punish isolated item runners`],
        [`Haddonfield Heights`, `Myers house, Strode house, water tower`, `Classic residential blocks and house-to-house movement`, `Use interiors and yards, but do not trap followers in dead-end rooms`, `Watch familiar homes and intercept escorts moving between them`],
        [`Orange Grove Estates`, `Doyle house, Wallace house, large homes, garages, balconies, park areas`, `Layered suburban homes, yards, fences, hedges, vertical angles`, `Clear floors methodically and move residents before Michael locks a house down`, `Pressure stairways, exits, and yard crossings after forcing people inside`],
        [`Haddonfield Town Center`, `Hardware store, music store, pub, post office, auto repair, cemetery`, `Landmark-dense business district with streets and storefronts`, `Use named businesses for callouts and regroup around completed route pieces`, `Control intersections and objective buildings where routes naturally converge`]
      ]
    },
    sections: [
      {
        heading: `East Haddonfield`,
        body: [`East Haddonfield is the rural edge of the launch map set. Official location material highlights The Rabbit in Red Lounge, Phelps Garage, Midwest Feed Company, farmland, and open roads, which makes travel feel more exposed than in a pure neighborhood map. Heroes should avoid drifting alone across roads with key items; Michael should look for those long rotations and cut them off before the team can regroup.`]
      },
      {
        heading: `Haddonfield Heights`,
        body: [`Haddonfield Heights is the most immediately recognizable suburban setting, anchored by the Myers house, Strode house, and water tower. Expect house interiors, yards, and neighborhood routing to matter. Heroes should check multiple exits before escorting residents inside homes. Michael can create pressure by moving between the familiar houses instead of chasing through every room.`]
      },
      {
        heading: `Orange Grove Estates`,
        body: [`Orange Grove Estates is built around larger suburban properties: multi-story homes, garages, balconies, fences, hedges, recreational areas, and the Doyle and Wallace houses. This creates more vertical and yard-based decision-making. Heroes need to avoid splitting followers across floors; Michael can force panic by controlling stairs, doorways, and the transitions between homes and yards.`]
      },
      {
        heading: `Haddonfield Town Center`,
        body: [`Town Center gives players the clearest landmark vocabulary: hardware store, music store, pub, post office, auto repair, cemetery, and other storefront-style areas. That makes callouts easier, but it also creates predictable crossing points. Heroes should use landmarks to coordinate route items quickly; Michael should watch intersections, phone-capable buildings, and the paths from businesses toward exits.`]
      }
    ],
    mistakes: [
      `Using the same route plan on all four maps.`,
      `Memorizing fixed item positions instead of reading the match's active objective prompts.`,
      `Giving vague callouts when the map has strong landmark names.`,
      `As Michael, camping a single landmark while residents and route items move elsewhere.`
    ],
    faq: [
      { question: `How many maps are confirmed?`, answer: `Four launch maps are confirmed: East Haddonfield, Haddonfield Heights, Orange Grove Estates, and Haddonfield Town Center.` },
      { question: `Are item spawns fixed?`, answer: `No reliable official source supports fixed guaranteed item coordinates. Specific item and exit positions can vary by match.` },
      { question: `Which map is best for beginners?`, answer: `Haddonfield Town Center and Haddonfield Heights are easier to communicate on because their landmarks are very readable, but match objectives still matter more than map preference.` }
    ],
    sourceNotes: [
      `Official map location posts confirm the four launch maps and the landmark details summarized here.`,
      `Official multiplayer material confirms dynamic map features and randomized match elements.`
    ]
  },
  'halloween-the-game-how-to-escape': {
    quickAnswer: `To escape in Halloween: The Game, look for the match's active escape opportunities and commit to one route. Current reliable guides consistently describe four primary routes: storm cellar, sedan, gate, and police wagon. Some guides also describe a conditional police car escape after a police encounter, but that route is less consistently documented and should be treated as opportunistic. Exact locations may vary by match, and mechanics may change with patches.`,
    keyPoints: [
      `Storm Cellar: usually opened with an Escape Key or Bolt Cutters; some matches may require clearing boards or vines first.`,
      `Sedan: repair the engine, add fuel, find the keys, then survive the driving escape; crashes or Michael pressure can ruin progress.`,
      `Gate: clear blockers, restore power or fuse progress when required, then unlock or cut the final barrier.`,
      `Police Wagon: escalates from repeated successful police calls and does not behave like a simple item route.`,
      `Police Car: reported by some current guides as a conditional escape after police events, but less reliable than the four main routes.`
    ],
    steps: [
      `First, identify the route your match is actually offering. Check objective prompts, nearby landmarks, and discovered escape icons instead of assuming last match's layout.`,
      `If you find an Escape Key or Bolt Cutters, scout storm cellars and gates. These tools can convert a discovered exit into a real escape quickly.`,
      `If you find a Repair Kit, Gas Can, or Sedan Keys, start a car plan. Assign one player to protect the item runner and another to keep residents moving.`,
      `If phones and residents are accessible, start police pressure early. Repeated calls can bring officers and eventually police wagon extraction.`,
      `Once a route opens, leave with residents and Heroes instead of over-looting. Michael becomes stronger when the team waits around a completed exit.`
    ],
    table: {
      heading: `Escape Methods`,
      headers: [`Escape Method`, `What You Need`, `What To Do`, `Main Risk`, `Dynamic / Fixed?`],
      rows: [
        [`Storm Cellar`, `Escape Key or Bolt Cutters; sometimes a weapon/tool to clear blockers`, `Find the cellar, open or cut the lock, clear boards/vines if present, then move Heroes and residents through it`, `Michael can find the route, interrupt the opener, or close pressure around the hatch`, `Dynamic location and blockers`],
        [`Sedan`, `Repair Kit, Gas Can, Sedan Keys`, `Repair the car, fuel it, start it, then drive out through the escape sequence`, `Crashes, Michael attacks, Blackout-style disruption, or missing parts can stall the route`, `Dynamic parts and car state`],
        [`Gate`, `Fuse or power progress when required; Escape Key or Bolt Cutters for the final lock`, `Clear blockers, restore the needed mechanism, complete the interaction, then unlock or cut through`, `The gate can become an obvious ambush point once discovered`, `Dynamic location and requirements`],
        [`Police Wagon`, `Successful police calls and match escalation`, `Use phones or command residents to call police, survive until officers and wagon pressure arrive, then extract`, `Michael can interrupt callers, kill or pressure officers, and force the team away`, `Dynamic timing and escalation`],
        [`Police Car`, `A police event and usable car/key state reported in current guides`, `Use it only if the match event makes it available; treat it as a bonus route, not the main plan`, `Availability is less predictable and Michael can prevent the setup`, `Conditional, not guaranteed`]
      ]
    },
    sections: [
      {
        heading: `Storm Cellar Route`,
        body: [`The cellar is usually the cleanest low-noise escape when your team finds the right opener. Current guides describe Escape Keys and Bolt Cutters as common ways to open it, with some matches adding physical blockers such as boards or vines. Bring followers only when the hatch is nearly ready, because a crowd standing around a discovered cellar gives Michael a perfect collapse point.`]
      },
      {
        heading: `Sedan Route`,
        body: [`The car route is item-heavy but powerful. Guides consistently describe a Repair Kit, Gas Can, and Sedan Keys as the core chain: fix the engine, add fuel, start the car, then drive out. The risk is that every missing part creates another trip, and every trip gives Michael a chance to stalk the runner or sabotage the area. Do not start the car route alone unless the parts are already close together.`]
      },
      {
        heading: `Gate Route`,
        body: [`The gate route asks the team to solve a visible map exit rather than hide forever. Current coverage describes clearing blockers, restoring required power or fuse progress, and then opening the final lock with a key or cutters. This route rewards coordination because one player can prep the gate while another moves residents or distracts Michael.`]
      },
      {
        heading: `Police in the Escape Plan`,
        body: [`Police are not just flavor text. Heroes and residents can call authorities through available phones, and repeated successful calls can escalate the match toward officers and a police wagon escape. This makes phone control a real win path. If Michael is already camping a physical exit, police pressure can force him to choose between guarding that route and stopping the next call.`]
      },
      {
        heading: `What Changes Each Match`,
        body: [`Exact item positions, exit placements, active blockers, resident locations, and safe travel paths can vary because the game uses dynamic map features. The right way to play is to recognize the route type, not memorize a fixed coordinate. Mechanics may also change with patches, so treat exact timings and cooldowns as version-specific.`]
      }
    ],
    mistakes: [
      `Waiting for the perfect escape method instead of finishing the route already in progress.`,
      `Carrying route items without telling teammates where they are going.`,
      `Calling police once and assuming the job is done. Police pressure depends on continued successful escalation.`,
      `Gathering residents at an unopened exit and feeding Michael multiple targets.`,
      `Treating the reported police car escape as guaranteed every match.`
    ],
    faq: [
      { question: `What are the main escape routes?`, answer: `The main routes described by multiple current guides are storm cellar, sedan, gate, and police wagon. A police car escape is also reported, but should be treated as conditional until more official detail is available.` },
      { question: `What items do I need to escape?`, answer: `It depends on the route. Cellars and gates often need Escape Keys or Bolt Cutters, the sedan uses Repair Kit, Gas Can, and Sedan Keys, and police wagon pressure requires successful calls rather than a carried item.` },
      { question: `Why does the same route feel different next match?`, answer: `Halloween: The Game uses dynamic map features and randomized match elements, so exact locations, blockers, and route states can change.` }
    ],
    sourceNotes: [
      `AllThings.How, GamesRadar, Mobalytics/Gamebase, and GamerBlurb independently describe the main escape routes used here.`,
      `Official Steam and multiplayer descriptions confirm dynamic map features, NPC interactions, police/authority gameplay, and civilian survival objectives.`
    ]
  },
  'halloween-the-game-objectives': {
    quickAnswer: `Objectives in Halloween: The Game are the concrete tasks that turn a match from hiding into escaping: rescue residents, command them, discover escape opportunities, repair or unlock routes, call police, and move people out before Michael stops the chain. The exact prompts can vary, but current guides report objectives such as Save Haddonfield Residents, Help Residents Escape, Save Special Targets, Find a Way to Escape, Use Storm Cellar, Repair Car, and police-call escalation.`,
    keyPoints: [
      `Objectives usually connect to residents, escape routes, or police escalation.`,
      `Special Targets can appear as randomized active NPCs or priority civilians, so check match prompts early.`,
      `Repair-style objectives commonly point toward the sedan or a powered gate route.`,
      `Unlock/cut objectives commonly point toward storm cellars, gates, or other locked exits.`,
      `Police objectives create pressure over time and can lead toward officers or police wagon extraction.`
    ],
    steps: [
      `Read the opening objective prompt and name the likely route out loud: residents, car, cellar, gate, or police.`,
      `Assign one player or resident to information gathering while another starts moving route items.`,
      `Do not hoard items just because they look rare. Take them to the objective they serve.`,
      `When the objective changes, rotate quickly. A completed repair or successful phone call usually creates a new risk point Michael can pressure.`,
      `Finish with extraction, not score-chasing. The objective chain is only complete when Heroes and residents actually leave.`
    ],
    table: {
      heading: `Objective Types`,
      headers: [`Objective`, `What It Usually Means`, `Items or Actions`, `Player Priority`],
      rows: [
        [`Save Residents`, `Find NPC civilians and prevent Michael from clearing the map`, `Search buildings, command residents, escort them`, `Do this early; idle residents are lost time`],
        [`Help Residents Escape`, `Move NPCs through a usable route`, `Open cellar, gate, car, wagon, or other active exit`, `Open the route before gathering followers`],
        [`Find a Way to Escape`, `Scout for active route opportunities`, `Check landmarks, prompts, exit icons, route items`, `Commit once a route is plausible`],
        [`Repair Car`, `Build the sedan escape`, `Repair Kit, Gas Can, Sedan Keys`, `Protect the runner and avoid unnecessary detours`],
        [`Use Storm Cellar`, `Unlock or cut open a cellar exit`, `Escape Key, Bolt Cutters, possible blocker clearing`, `Quiet route, but risky once Michael discovers it`],
        [`Call Police`, `Escalate authority response`, `Use phones or residents when available`, `Repeat and protect callers until extraction pressure appears`]
      ]
    },
    sections: [
      {
        heading: `Objective Priority`,
        body: [`If two objectives are available, choose the one closest to completion. A half-fueled car with the keys found is worth more than a theoretical gate on the far side of the map. A resident already near an opened cellar should be extracted before the team starts another repair chain. The match rewards finishing practical progress.`]
      },
      {
        heading: `Special Targets`,
        body: [`Official multiplayer information describes randomized active Special Targets and NPC involvement. Treat these as objective pressure points. If the match marks a target, protecting or moving that person can be more important than looting another house. Michael will often use the same target as bait, so approach with stamina and an exit plan.`]
      },
      {
        heading: `How Objectives Change Michael's Route`,
        body: [`Every completed task tells Michael where to go next. A phone call reveals police pressure, a repaired car creates a car-defense phase, and an opened route creates an extraction path. Strong Hero teams use that information too: one player shows pressure at the obvious route while another quietly moves residents toward the real exit.`]
      }
    ],
    mistakes: [
      `Reading objectives as flavor text instead of routing instructions.`,
      `Starting every objective and finishing none.`,
      `Keeping objective items in inventory while teammates search for the same item elsewhere.`,
      `Ignoring Special Targets until Michael has already found them.`
    ],
    faq: [
      { question: `Are objectives fixed every match?`, answer: `The broad objective types are consistent, but exact locations, route availability, residents, and blockers can vary by match.` },
      { question: `Which objective should I do first?`, answer: `Find residents and identify the nearest viable escape route. Early police pressure is also valuable if phones are accessible.` },
      { question: `Do objectives tell me the exact item location?`, answer: `Not always. Use prompts and landmarks to narrow the search, then coordinate so multiple players are not duplicating the same route.` }
    ],
    sourceNotes: [
      `Recent civilian-role guides document objective prompt examples and resident interactions.`,
      `Official multiplayer and Steam descriptions support dynamic map features, NPC interactions, and survival objectives.`
    ]
  },
  'halloween-the-game-escape-routes': {
    quickAnswer: `The best-documented escape routes are storm cellar, sedan, gate, and police wagon. Multiple current guide sources agree on these four. A police car escape is also reported, but because it depends on police events and is less consistently described, treat it as a situational bonus rather than your main plan. Route locations and requirements can vary by match.`,
    keyPoints: [
      `Storm Cellar is usually a fast exit if your team has an Escape Key or Bolt Cutters and can clear any blockers.`,
      `Sedan needs a longer item chain: Repair Kit, Gas Can, and Sedan Keys.`,
      `Gate can require clearing blockers, restoring fuse or power progress, and opening the final lock.`,
      `Police Wagon depends on successful police-call escalation and surviving the response phase.`,
      `Police Car is reported in some guides after police-related events, but should not be planned as guaranteed.`
    ],
    steps: [
      `Sort discovered routes into fast, item-heavy, and escalation routes. Cellar is often fast, sedan is item-heavy, and police wagon is escalation-based.`,
      `Place residents near safety only after the route is close to usable. Residents waiting in the wrong place make Michael's job easier.`,
      `Keep one player watching for Michael while another completes the lock, repair, phone, or fuse interaction.`,
      `If Michael hard-camps a route, switch pressure. A police call or second route can force him to move.`,
      `When a route opens, use it. Overstaying after success is one of the easiest ways to lose rescued residents.`
    ],
    table: {
      heading: `Route Comparison`,
      headers: [`Route`, `Core Requirement`, `Best When`, `Weakness`],
      rows: [
        [`Storm Cellar`, `Key or Bolt Cutters, plus any match blockers`, `You find opener tools early and nearby residents are movable`, `Small area can become an ambush once discovered`],
        [`Sedan`, `Repair Kit, Gas Can, Sedan Keys`, `Parts appear close enough to coordinate quickly`, `Multiple trips and crash risk create many failure points`],
        [`Gate`, `Clear blockers, restore mechanism, unlock or cut final barrier`, `Team can defend a visible route and split tasks`, `Michael can read the route and camp the final interaction`],
        [`Police Wagon`, `Repeated successful police calls and response escalation`, `Phones or resident callers are accessible`, `Slow pressure; Michael can interrupt callers and officers`],
        [`Police Car`, `Conditional police event and usable vehicle state`, `The opportunity appears naturally during police pressure`, `Not reliable enough to build the whole match around`]
      ]
    },
    sections: [
      {
        heading: `Cellar Versus Gate`,
        body: [`Cellars and gates both reward opener tools, but they play differently. A cellar can be quieter and faster if the team has the right item, while a gate usually feels more exposed and may require a longer setup. If Michael is already near one, the other may become the safer route simply because it buys distance.`]
      },
      {
        heading: `Car Route Timing`,
        body: [`The sedan is strong only when your team turns parts into progress quickly. A Repair Kit sitting in one house, a Gas Can in another, and keys in a third is a coordination problem, not a finished plan. Use residents and teammates to scout while the item carrier takes the shortest safe path to the car.`]
      },
      {
        heading: `Police Routes`,
        body: [`Police pressure is strongest when started early and repeated. A single call can help, but current guides describe escalation toward arriving officers and a police wagon as the real route. Michael players know this, so expect phone areas and callers to become dangerous once the team begins the police plan.`]
      }
    ],
    mistakes: [
      `Calling every possible exit an equal plan. Some routes are faster only when their items are already found.`,
      `Driving without knowing the exit path or with Michael positioned nearby.`,
      `Bringing residents to a gate before the blocker, fuse, or lock step is solved.`,
      `Assuming a reported conditional police car will appear in every match.`
    ],
    faq: [
      { question: `What escape route should I prioritize?`, answer: `Prioritize the route with the most completed requirements. A nearly open cellar beats an untouched sedan; a ready car beats an uncertain police wagon.` },
      { question: `Can Michael stop an open route?`, answer: `Michael can still pressure the path, interrupt stragglers, and in some reported cases close or disrupt route progress. Treat an open route as urgent, not safe.` },
      { question: `Are route positions the same every game?`, answer: `No. The game uses dynamic map features, so route positions, blockers, and nearby items can change.` }
    ],
    sourceNotes: [
      `AllThings.How, GamesRadar, Mobalytics/Gamebase, and GamerBlurb align on cellar, sedan, gate, and police wagon as major escape routes.`,
      `Official material supports dynamic map features and authority-alert survival play.`
    ]
  },
  'halloween-the-game-how-to-call-police': {
    quickAnswer: `To call police in Halloween: The Game, find a usable phone or direct an eligible resident to make the call, complete or protect the interaction, then keep escalating with additional successful calls until police response creates real pressure and can lead toward a police wagon escape. Police are not an instant win button: Michael can interrupt callers, pressure phone buildings, and exploit teams that stop doing other objectives.`,
    keyPoints: [
      `Phones and resident commands are the practical ways current guides describe police calls.`,
      `A successful call can trigger police-response messages and later escalation.`,
      `Repeated calls matter because police wagon extraction is tied to escalation rather than one quick item pickup.`,
      `Calling police competes with other routes; protect callers while someone else advances an escape.`,
      `Police behavior and timing can change with patches, so avoid relying on exact timers.`
    ],
    steps: [
      `Find a phone-capable location or a resident who can be ordered to call police.`,
      `Check Michael's pressure before starting. If he is nearby, have a teammate distract, defend, or move him away first.`,
      `Start the call and finish the required interaction or skill check. Do not abandon it unless Michael is about to secure a kill.`,
      `After a successful call, rotate. Michael may return to the phone location, so repeat pressure from another phone or keep another route moving.`,
      `When officers or wagon pressure arrives, shift from calling to extraction. Move residents and Heroes toward the opportunity instead of continuing to loot.`
    ],
    table: {
      heading: `Police Call Flow`,
      headers: [`Step`, `What To Do`, `Why It Matters`, `Michael Counterplay`],
      rows: [
        [`Locate`, `Find phones or residents who can call`, `Police pressure starts only when the team finds an access point`, `Patrol likely buildings and listen for activity`],
        [`Protect`, `Guard the caller or distract Michael`, `Interrupted calls waste time and reveal intent`, `Collapse on phones and isolate callers`],
        [`Repeat`, `Stack successful calls when available`, `Escalation can lead toward police wagon extraction`, `Force callers to scatter or stop calling`],
        [`Extract`, `Move people once police pressure becomes usable`, `The win condition is leaving, not just making calls`, `Attack escorts and disrupt the final route`]
      ]
    },
    sections: [
      {
        heading: `Why Police Calls Are a Route`,
        body: [`Police calls are not only defensive support. Current guide coverage describes police escalation with officers and a police wagon escape path, while official descriptions confirm that civilians can alert authorities. That means a phone is effectively an objective station. If your team protects calls early, Michael has to defend more than physical exits.`]
      },
      {
        heading: `Using Residents to Call`,
        body: [`Official multiplayer information and guide coverage describe residents taking commands, including calling the cops. This is powerful because it lets player Heroes carry items, escort others, or scout routes while a resident contributes to police pressure. The risk is that an exposed resident can become an easy target, so do not send callers into danger without reading Michael's location.`]
      },
      {
        heading: `When to Stop Calling`,
        body: [`Stop calling when extraction is ready or when another route is clearly faster. A team that keeps repeating phone calls while a car, cellar, or gate is already open is wasting its safest window. The police plan works best as pressure that becomes an exit, not as background noise.`]
      }
    ],
    mistakes: [
      `Making one call and assuming police will solve the match.`,
      `Starting calls while Michael is already inside the building.`,
      `Sending residents to call with no follow-up protection.`,
      `Ignoring a ready physical escape because the team is obsessed with police escalation.`
    ],
    faq: [
      { question: `Can residents call police?`, answer: `Yes. Current gameplay coverage describes residents being ordered to call the cops, and official material confirms NPC interaction as a core part of multiplayer.` },
      { question: `Does one call summon the police wagon?`, answer: `Reliable guides describe police response as escalation, so do not treat a single call as a guaranteed wagon. Keep progressing and watch match prompts.` },
      { question: `Should Michael defend phones?`, answer: `Yes. Phone access can become a win path, so Michael should pressure callers and rotate if the team starts stacking calls.` }
    ],
    sourceNotes: [
      `Official Steam and multiplayer descriptions support alerting authorities and NPC interactions.`,
      `Recent civilian and escape guides describe phone calls, resident police commands, officer response, and police wagon extraction.`
    ]
  },
  'halloween-the-game-michael-myers-abilities': {
    quickAnswer: `Michael's kit is built around information, darkness, sudden repositioning, and objective denial. The core tools to understand are Killer Sense, Stalk, Shape Jump, and Shape Dash, with equipable abilities such as Detection Pulse, Shape Mines, Evil Presence, Shadow Strike, Blackout, and Reality Tear changing how he finds, chases, and blocks Heroes. Exact cooldown values may change by patch, but the use cases are clear enough to build a match plan.`,
    keyPoints: [
      `Killer Sense helps locate civilian activity and keeps Michael from wandering blindly.`,
      `Stalk turns observation into threat; use it before committing to a chase.`,
      `Shape Jump moves Michael through darkness and out-of-sight angles, making light control important.`,
      `Shape Dash helps punish open movement and finish chase pressure.`,
      `Detection Pulse, Blackout, and Reality Tear are repeatedly highlighted by current guide coverage as strong practical tools.`
    ],
    steps: [
      `Use information first. Start with Killer Sense or Detection Pulse-style reads before choosing where to move.`,
      `Stalk targets who are busy with calls, repairs, route items, or residents. A distracted Hero gives better value than a random chase.`,
      `Shape Jump to the objective path, not just to the last place you saw someone. Predict where the runner must go next.`,
      `Use Blackout or similar denial when Heroes are relying on lights, electronics, phones, or vehicle progress.`,
      `Save Reality Tear-style pressure for situations where normal Shape Jump rules would keep you out of the play.`
    ],
    table: {
      heading: `Michael Ability Uses`,
      headers: [`Ability / Tool`, `What It Does`, `When To Use It`, `Common Mistake`],
      rows: [
        [`Killer Sense`, `Helps locate civilian activity`, `Opening search, mid-match rotations, finding likely clusters`, `Ignoring objective context after sensing movement`],
        [`Stalk`, `Builds threat through observation`, `Before committing near phones, cars, residents, or exits`, `Breaking cover too soon`],
        [`Shape Jump`, `Repositions through darkness and unseen angles`, `Cutting off routes or appearing near objectives`, `Trying to jump through obvious light and line of sight`],
        [`Shape Dash`, `Creates burst chase pressure`, `Punishing open crossings or finishing a near catch`, `Dashing without an exit angle or target plan`],
        [`Detection Pulse`, `Improves information on civilians and residents`, `When the team goes quiet or objectives split`, `Using it and then chasing low-value targets`],
        [`Blackout`, `Disrupts lights and electronics in Michael's area`, `Before collapsing on phones, cars, or lit safe zones`, `Using it far from the objective it should deny`],
        [`Reality Tear`, `Lets Michael bend normal reposition limits`, `When light or line-of-sight rules would otherwise block pressure`, `Spending it for movement with no objective payoff`],
        [`Evil Presence`, `Pressures nearby civilians and stamina economy`, `During grouped chases or exit defense`, `Letting Heroes reset instead of staying close`],
        [`Shape Mines`, `Creates trap-style area control`, `Around likely objective paths or exits`, `Placing traps where no one needs to travel`],
        [`Shadow Strike`, `Adds ambush pressure`, `After stalking or during dark approach angles`, `Treating it like a replacement for map control`]
      ]
    },
    sections: [
      {
        heading: `Information Abilities`,
        body: [`Detection Pulse and Killer Sense-style information are strongest when they answer a decision: which objective is active, where residents are being moved, or which player is carrying route progress. If the pulse sends you toward a lone decoy while the sedan is nearly repaired, the ability did not fail; the target choice did.`]
      },
      {
        heading: `Darkness and Movement`,
        body: [`Official material ties Shape Jump to darkness and being out of direct line of sight, which makes map lighting a real part of Michael's kit. Reality Tear matters because guide coverage describes it as a way to apply jump pressure when normal conditions would be restrictive. Use these tools to arrive before the objective completes, not after Heroes already leave.`]
      },
      {
        heading: `Denial Abilities`,
        body: [`Blackout, Evil Presence, Shape Mines, and similar pressure tools are strongest near the team's win condition. A blackout around a dead area is only scary for a moment; a blackout near a phone, car, gate, or final escort path can erase real progress. Think of abilities as route control, not isolated jump scares.`]
      }
    ],
    mistakes: [
      `Memorizing cooldowns before learning when each ability creates objective pressure.`,
      `Using information abilities with no plan for the target revealed.`,
      `Holding strong abilities too long while Heroes finish a route.`,
      `Jumping into visible, lit positions where Heroes already expect you.`
    ],
    faq: [
      { question: `What are Michael's most important abilities?`, answer: `For practical play, learn Killer Sense, Stalk, Shape Jump, Shape Dash, Detection Pulse, Blackout, and Reality Tear first. They define information, mobility, and objective denial.` },
      { question: `Are cooldowns listed here?`, answer: `No. Launch-window patches already adjusted several Michael tools, so exact cooldown values should be checked in-game for your current version.` },
      { question: `Is Blackout only for scares?`, answer: `No. It is most useful when it disrupts electronics, lights, phones, vehicles, or a route the Heroes are actively using.` }
    ],
    sourceNotes: [
      `Official progression and multiplayer posts confirm named Michael tools and the role of darkness for Shape Jump.`,
      `Official 1.0.1 patch notes confirm launch-window tuning for Stalk, Shape Dash, Reality Tear, Detection Pulse, and Evil Presence.`,
      `Recent ability guides highlight Detection Pulse, Blackout, and Reality Tear as practical build choices.`
    ]
  },
  'halloween-the-game-items': {
    quickAnswer: `The important items in Halloween: The Game are route items first: Escape Keys, Bolt Cutters, Repair Kits, Gas Cans, Sedan Keys, fuses or power parts, and weapons or distractions used to buy time. Repair Kit is directly reinforced by official patch notes, while current guide coverage consistently connects keys, cutters, gas, repair, and sedan keys to the major escape routes. Exact spawn locations may vary by match.`,
    keyPoints: [
      `Escape Key: opens locked route steps such as cellars or gates when the match supports it.`,
      `Bolt Cutters: can open or cut certain locks and are often tied to cellar or gate progress.`,
      `Repair Kit: used for vehicle or repair objectives; official patch notes mention repair kit spawn fixes.`,
      `Gas Can and Sedan Keys: key pieces of the sedan escape chain.`,
      `Fuse or power items: tied to gate or powered objective steps when the match presents them.`,
      `Weapons and distractions are time-buying tools, not the main win condition.`
    ],
    steps: [
      `Identify the item category before carrying it across the map: opener, repair part, fuel/key, fuse/power, weapon, distraction, or mobility.`,
      `Call out the item and destination immediately. A Repair Kit is only useful if the car or repair objective knows it is coming.`,
      `Do not drop route items in random rooms. If you must switch items, leave them near the objective or a named landmark.`,
      `Give weapons to the player protecting an interaction or escorting residents, not necessarily the player who found them.`,
      `When an escape route is ready, stop looting for better items and leave.`
    ],
    table: {
      heading: `Important Items and Uses`,
      headers: [`Item`, `Use`, `Best Route`, `Reliability Note`],
      rows: [
        [`Escape Key`, `Unlocks certain escape points`, `Storm Cellar or Gate`, `Route and lock placement may vary`],
        [`Bolt Cutters`, `Cuts locks or opens certain blocked exits`, `Storm Cellar or Gate`, `Do not assume every locked route accepts cutters`],
        [`Repair Kit`, `Repairs car or damaged route state`, `Sedan`, `Official patch notes confirm repair kit spawn tuning`],
        [`Gas Can`, `Fuels the sedan`, `Sedan`, `Useful only after or alongside repair progress`],
        [`Sedan Keys`, `Starts the car`, `Sedan`, `The car still requires safe driving and route execution`],
        [`Fuse / Power Part`, `Restores objective mechanism`, `Gate or powered route`, `Requirement depends on active match objective`],
        [`Shotgun / Rifle / Ammo`, `Buys space and protects interactions`, `Any contested route`, `Use defensively; ammo and exact availability vary`],
        [`Wood Axe / Knife`, `Melee defense or blocker clearing`, `Cellar, Gate, escort defense`, `Close range is risky against Michael`],
        [`Firecrackers`, `Distraction and escape timing`, `Chase break or route defense`, `Best when saved for a real rescue window`],
        [`Bicycle / mobility pickup`, `Reported mobility option in current guide coverage`, `Long rotations`, `Availability and exact behavior should be checked in current patch`]
      ]
    },
    sections: [
      {
        heading: `Route Items Come First`,
        body: [`If an item opens a route, it is more valuable than a weapon. A Hero carrying a Repair Kit, Gas Can, Sedan Keys, Escape Key, Bolt Cutters, or fuse piece should move with a destination. The team should protect that movement because Michael can win by forcing route items to sit unused on the floor.`]
      },
      {
        heading: `Weapons and Distractions`,
        body: [`Weapons are best used to protect objective interactions, defend residents, or create a few seconds of space. Firecrackers and similar distraction tools should be saved for a chase break, rescue, phone call, or final exit push. Starting a fight without route progress usually helps Michael by clustering the team.`]
      },
      {
        heading: `Spawn Rules`,
        body: [`Do not build your match around guaranteed coordinates. Official and guide material support dynamic map features, and launch patch notes have already adjusted repair kit spawning. Exact item positions, route blockers, and availability can vary by match and version.`]
      }
    ],
    mistakes: [
      `Holding a route item while continuing to loot unrelated rooms.`,
      `Using the only defensive item for a flashy fight instead of protecting the exit interaction.`,
      `Dropping keys or parts without a landmark callout.`,
      `Assuming an item found in one house will spawn there every match.`
    ],
    faq: [
      { question: `What items should beginners care about most?`, answer: `Learn Escape Key, Bolt Cutters, Repair Kit, Gas Can, Sedan Keys, fuse or power parts, and basic weapons or distractions first.` },
      { question: `Are item locations fixed?`, answer: `No reliable source supports fixed guaranteed coordinates. Exact locations may vary by match.` },
      { question: `Should I fight Michael with weapons?`, answer: `Use weapons to create time for objectives, not as the main plan. Escaping and rescuing residents still matter most.` }
    ],
    sourceNotes: [
      `Official patch notes specifically mention repair kit spawn behavior.`,
      `Recent escape and civilian-role guides connect keys, bolt cutters, repair kits, gas cans, sedan keys, fuses, weapons, and distractions to gameplay routes.`
    ]
  },
  'halloween-the-game-walkthrough': {
    quickAnswer: `Story Mode, The Night He Came Home, is a Michael-focused single-player campaign that current walkthrough sources describe as a chapter-based progression from escaping Smith's Grove to moving through Haddonfield landmarks and the babysitter story arc. Treat this page as a practical route overview: finish the chapter objective, learn the Michael tool introduced there, collect optional items only when safe, and move forward instead of roaming every corner.`,
    keyPoints: [
      `Official material confirms Story Mode: The Night He Came Home and a Michael Myers perspective.`,
      `Current walkthrough coverage reports a prologue at Smith's Grove followed by Haddonfield chapters.`,
      `Reported chapter beats include The Road to Haddonfield, Main Street, Returning Home, The Babysitters, and Into The Shadows.`,
      `Story chapters teach movement, stalking, Shape Jump, target pressure, and final pursuit structure.`,
      `Collectibles, optional challenges, and rewards can vary in importance; finish the objective before hunting every extra.`
    ],
    steps: [
      `Prologue: Escape From Smith's Grove. Learn basic movement, exits, power or gate interactions, and how the campaign wants you to read objective prompts.`,
      `Chapter 1: The Road to Haddonfield. Follow the route into town, use stealth and pursuit fundamentals, and avoid over-searching before the chapter path opens.`,
      `Chapter 2: Main Street. Use the town-center landmark flow, including reported Rabbit in Red guidance, to practice moving between public buildings and objective markers.`,
      `Chapter 3: Returning Home. Expect Myers-house story beats and more direct use of Michael's stalking and repositioning tools.`,
      `Chapter 4: The Babysitters. Current walkthroughs place the babysitter cast pressure here; track targets methodically rather than sprinting between every noise.`,
      `Chapter 5: Into The Shadows. Treat the finale as a pressure test of everything learned: objective reading, darkness, Shape Jump, pursuit, and target control.`
    ],
    table: {
      heading: `Story Mode Chapter Guide`,
      headers: [`Segment`, `Reported Focus`, `Practical Tip`, `What Not To Do`],
      rows: [
        [`Prologue`, `Smith's Grove escape and basic systems`, `Follow prompts and learn interaction rules`, `Roam blindly before opening the path`],
        [`The Road to Haddonfield`, `Transition into town`, `Use stealth and route reading`, `Sprint past cues and miss the intended path`],
        [`Main Street`, `Town landmarks and public buildings`, `Use recognizable businesses as navigation anchors`, `Chase side details before the chapter objective`],
        [`Returning Home`, `Myers-house story beats`, `Use stalking and repositioning deliberately`, `Treat it like a straight-line chase`],
        [`The Babysitters`, `Pressure around key characters`, `Isolate targets and control the route between houses`, `Bounce between targets with no priority`],
        [`Into The Shadows`, `Final progression and mastery check`, `Apply darkness, jump timing, and objective control`, `Ignore mechanics introduced earlier`]
      ]
    },
    sections: [
      {
        heading: `How to Use the Walkthrough`,
        body: [`For V1, avoid treating story walkthroughs as collectible maps. The reliable high-level path is clearer than every optional pickup position. Start each chapter by identifying the required objective, finish the new mechanic lesson, then sweep for optional content only if the area is safe and the path forward is known.`]
      },
      {
        heading: `Story Progression`,
        body: [`Official material confirms the campaign is played from Michael's perspective and begins with his escape from Smith's Grove. Recent walkthroughs then describe a move through Haddonfield locations, including town-center and homecoming beats, before focusing on the babysitter arc and final chapter pressure. The exact collectible order should be checked against the current patch, but the progression spine is stable enough for players to follow.`]
      },
      {
        heading: `Chapter Strategy`,
        body: [`Each chapter should be played as a lesson in Michael's toolkit. Early sections teach movement and objective prompts. Town and home chapters teach navigation through landmarks. Later babysitter chapters teach target selection and pressure. If you are stuck, ask which mechanic the chapter just introduced; the solution usually uses that tool.`]
      }
    ],
    mistakes: [
      `Searching every optional corner before understanding the required objective.`,
      `Ignoring chapter prompts because multiplayer habits take over.`,
      `Using chase pressure before learning how the chapter wants you to stalk or reposition.`,
      `Assuming third-party collectible positions will stay exact after patches.`
    ],
    faq: [
      { question: `What is the story mode called?`, answer: `Official material calls it Story Mode: The Night He Came Home.` },
      { question: `Do you play as Michael?`, answer: `Yes. Official story-mode material describes the campaign from Michael Myers' perspective, beginning with Smith's Grove escape.` },
      { question: `Is this a full collectible guide?`, answer: `No. This is a progression walkthrough for getting through the chapters. Exact collectible positions should be checked against the current game version.` }
    ],
    sourceNotes: [
      `Official Steam and story-mode posts confirm The Night He Came Home, the Michael perspective, and Smith's Grove opening setup.`,
      `Whisper of the House and Destructoid walkthrough coverage support the chapter names and progression outline summarized here.`
    ]
  }
};

const enhancedGuidePages: GuidePage[] = guidePages.map((guide) => ({
  ...guide,
  ...(guideContentUpdates[guide.slug] ?? {}),
}));


export const guideMap = new Map(enhancedGuidePages.map((guide) => [guide.slug, guide]));

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

export const latestGuides = [...enhancedGuidePages].sort((a, b) =>
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
