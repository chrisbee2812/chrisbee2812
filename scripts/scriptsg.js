// Arrays of characters, actions, and places in Discworld
const characters = [
    ["Rincewind", "m"],
    ["Granny Weatherwax", "f"],
    ["Death", "m"],
    ["Sam Vimes", "m"],
    ["Lord Vetinari", "m"],
    ["Nanny Ogg", "f"],
    ["Tiffany Aching", "f"],
    ["The Librarian", "m"],
    ["Moist von Lipwig", "m"],
    ["Cohen the Barbarian", "m"],
    ["Twoflower", "m"],
    ["Susan Sto Helit", "f"],
    ["Captain Carrot Ironfoundersson", "m"],
    ["Nobby Nobbs", "m"],
    ["Cheery Littlebottom", "m"],
    ["Magrat Garlick", "f"],
    ["Mustrum Ridcully", "m"],
    ["Ponder Stibbons", "m"],
    ["Detritus", "m"],
    ["Angua von Überwald", "m"],
    ["Gaspode", "m"],
    ["Lu-Tze", "m"],
    ["Mr. Teatime", "m"],
    ["Igor", "m"],
    ["The Bursar", "m"]
  ];
  
  const actions = [
    "running away from trouble",
    "casting a spell",
    "philosophizing about life",
    "arresting a criminal",
    "plotting a scheme",
    "singing a questionable song",
    "herding sheep",
    "organizing books",
    "cheating at cards",
    "looking for their teeth",
    "arguing with Death about the meaning of life",
    "baking a suspiciously magical pie",
    "trying to teach a dragon to fetch",
    "haggling with a troll over the price of a bridge",
    "writing a strongly worded letter to the Patrician",
    "attempting to explain quantum to a chicken",
    "brewing a potion that smells like socks",
    "chasing a rogue cheese through the streets",
    "debating the ethics of magic with a parrot",
    "fighting off a horde of angry librarians",
    "inventing a new type of bread that glows in the dark",
    "meditating on the nature of time while eating a banana",
    "organizing a protest for equal rights for golems",
    "plotting to steal the moon",
    "teaching a swamp dragon table manners"
  ];
  
  const places = [
    "Ankh-Morpork",
    "Unseen University",
    "The Ramtops",
    "Lancre",
    "The Chalk",
    "The Patrician's Palace",
    "The Mended Drum",
    "The Discworld's Edge",
    "The Agatean Empire",
    "The Wyrmberg",
    "The Broken Drum",
    "The High Energy Magic Building",
    "The Shades",
    "The Unseen University Library",
    "The Wyrmberg",
    "The Opera House",
    "The Fools' Guild",
    "The Temple of Small Gods",
    "The Hub",
    "The Octarine Grass Country"
  ];

  const timelines = [
    "is",
    "is thinking about",
    "was",
    "will be",
    "is planning on",
    "once upon a time found themself",
    "is dreaming about",
    "was hoping to be",
    "once upon a time was",
    "found themself"
  ];

  const alone = [
    " by themself",
    "",
    " all alone",
    "",
    " without anyone else",
    "",
    " with someone else",
    ""
  ];
  
  // Function to generate a random sentence
  function generateSentence() {
    const charposition = Math.floor(Math.random() * characters.length);
    const character = characters[charposition][0];
    const chargender = characters[charposition][1];
    var action = actions[Math.floor(Math.random() * actions.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    var whento = timelines[Math.floor(Math.random() * timelines.length)];
    var whoelse = "";    
      const leng = Math.floor(Math.random() * characters.length) * 1.5;
      if (leng > characters.length) {
        const aloneposition = Math.floor(Math.random() * alone.length);
        const themself = alone[aloneposition];
        if (themself === " by themself") {
          if (chargender === "m") {
            whoelse = " by himself";
          } else {
            whoelse = " by herself";
          } 
        } else {
          whoelse = `${themself}`;
        }        
              
      } else {
        const characterwith = characters[Math.floor(Math.random() * characters.length)][0];        
          if (character === characterwith) {
            whoelse = ``;
          } else {
            whoelse = ` with ${characterwith}`;
          };        
      };
      
    if (action === "looking for their teeth") {
      if (chargender === "m") {
        action = "looking for his teeth";
      } else {
        action = "looking for her teeth";
      }
    }

    if (whento === "once upon a time found themself") {
      if (chargender === "m") {
        whento = "once upon a time found himself";
      } else {
        whento = "once upon a time found herself";
      }
    }

    if (whento === "found themself") {
      if (chargender === "m") {
        whento = "found himself";
      } else {
        whento = "found herself";
      }
    }
  
    const sentence = `${character} ${whento} ${action} at ${place}${whoelse}.`;
    document.getElementById('sentence-output').textContent = sentence;
  }