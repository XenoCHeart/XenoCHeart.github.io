let jokers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Common"
  // }
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Spectral"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  {
    name: "Plain Deck",
    text: [
      "Base Deck",
    ],
    image_url: "img/CUCK/decks/plaindeck.png",
    rarity: "Deck",
    banner: "Crimson's Ultimate Card Kollection"
  },
  {
    name: "Extreme Deck",
    text: [
      "{C:blue}1{} hand",
      "{C:red}1{} discard",
    ],
    image_url: "img/CUCK/decks/extremedeck.png",
    rarity: "Deck",
    banner: "Crimson's Ultimate Card Kollection"
  },
  {
    name: "Plain Deck",
    text: [
      "{C:attention}Played{} cards become {C:attention}debuffed{} after scoring",
      "Jokers will spawn as Eternal regardless of stake",
      "{C:green}1 in 4{} cards are drawn face down",
    ],
    image_url: "img/CUCK/decks/insanedeck.png",
    rarity: "Deck",
    banner: "Crimson's Ultimate Card Kollection"
  },
  {
  name: "Six Deck",
  text: [
    "All cards are {C:green}Sixes{}",
  ],
  image_url: "img/CUCK/decks/sixdeck.png",
  rarity: "Deck",
  banner: "Crimson's Ultimate Card Kollection"
  },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
  {
    name: "Overflowing Stock",
    text: [
      '{C:attention}+1{} card slot',
      'available in shop'
    ],
    image_url: "img/T3Vouchers/overstock_three.png",
    rarity: "Voucher",
    banner: "Tier 3 Vouchers"
  },
  {
    name: "Money Minting",
    text: [
      'All cards and packs in',
      'shop are {C:attention}75%{} off'
    ],
    image_url: "img/T3Vouchers/money_mint.png",
    rarity: "Voucher",
    banner: "Tier 3 Vouchers"
  },
  {
  name: "Reroll Addiction",
  text: [
    'Rerolls cost',
    '{C:money}$1{} less'
  ],
  image_url: "img/T3Vouchers/reroll_addict.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},

{
  name: "Glow in the Dark",
  text: [
    "{C:dark_edition}Foil{}, {C:dark_edition}Holographic{}, and",
    "{C:dark_edition}Polychrome{} cards",
    "appear {C:attention}6X{} more often"],
  image_url: "img/T3Vouchers/Glow_in_Dark.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Happy Little Accident",
  text: [
    "{C:attention}+1{} hand size",
  ],
  image_url: "img/T3Vouchers/ross.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},

{
  name: "Round of Applause",
  text: [
    "Permanently",
    "gain {C:blue}+1{} hand",
    "per round"
],
  image_url: "img/T3Vouchers/applause.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Down to Zero",
  text: [
    "Permanently",
    "gain {C:red}+1{} discard",
    "per round"
],
  image_url: "img/T3Vouchers/down_to_zero.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "In the Beginning...",
  text: [
    "{C:attention}-1{} Ante,",
    "{C:blue}-1{} hand and",
    "{C:red}-1{} discard",
    "each round"
],
  image_url: "img/T3Vouchers/in_the_beginning.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Money Forest",
  text: [
    "Raise the cap on",
    "interest earned",
    "per round to {C:money}$40{}"
],
  image_url: "img/T3Vouchers/money_forest.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Tarot Factory",
  text: [
    "{C:tarot}Tarot{} cards appear",
    "{C:attention}8X{} more frequently",
    "in the shop"
],
  image_url: "img/T3Vouchers/Tarot_Factory.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Planet Factory",
  text: [
    "{C:planet}Planet{} cards appear",
    "{C:attention}8X{} more frequently",
    "in the shop"
],
  image_url: "img/T3Vouchers/Planet_Factory.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Neutral Particle",
  text: [
    "{C:dark_edition}+1{} Joker Slot"
  ],
  image_url: "img/T3Vouchers/Neutral_Particle.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Gaff Deck",
  text: [
    "{C:attention}Playing Cards{} appear {C:attention}2X{}",
    "more frequently in the shop,",
    "{C:attention}Playing Cards{} are now {C:green}FREE{}",
    "",
    "{X:white,C:EDITION}COMING SOON"
  ],
  image_url: "img/T3Vouchers/gaff_deck.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Exoplanets",
  text: [
    "At the start of the round, create a Negative Planet Card of the most played hand",
    "",
    "{X:white,C:EDITION}COMING SOON"
  ],
  image_url: "img/T3Vouchers/Exoplanets.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Omniscience",
  text: [
    "Tarot and Spectral cards may appear in any pack",
    "",
    "{X:white,C:EDITION}COMING SOON"
  ],
  image_url: "img/T3Vouchers/Omniscience.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},
{
  name: "Reboot",
  text: [
    "Pay $10 to Disable Boss Blind",
    "",
    "{X:white,C:EDITION}COMING SOON"
  ],
  image_url: "img/T3Vouchers/Reboot.png",
  rarity: "Voucher",
  banner: "Tier 3 Vouchers"
},

]

let challenges = [
  {
    name: "Jimbo Only",
    text: [
      "You must only use cards with Jimbo"
    ],
    image_url: "img/j_joker.png",

    rarity: "Challenge",
    banner: "Crimson's Ultimate Card Kollection"
  },
  {
    name: "Jimboless",
    text: [
      "Jimbo has been banned"
    ],
    image_url: "img/j_nojimbo.png",

    rarity: "Challenge",
    banner: "Crimson's Ultimate Card Kollection"
  },
]


let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
  "Challenge": "#5d5dff"
}
 
let banners = {
  "Crimson's Ultimate Card Kollection": "#990000", 
  "Archived": "#990000", 
  "Tier 3 Vouchers": "#CC8100",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="banner" style="background-color: ${banners[joker.banner]}">${joker.banner}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="banner" style="background-color: ${banners[joker.banner]}">${joker.banner}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <h4 class="banner" style="background-color: ${banners[joker.banner]}">${joker.banner}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}

if (challenges.length === 0) {
  document.querySelector(".challengesfull").style.display = "none"
} else {
  let challenges_div = document.querySelector(".challenges");
  add_cards_to_div(challenges, challenges_div);
}