
function newMessage() {
    const messageItems = {
        characters: ["Sam Vines", "Granny Weatherwax", "Susan Sto Helit", "The Librarian", "Cut-Me-Own-Throat Dibbler",
            "The Luggage", "Death", "Lord Vetinari", "Rincewind", "Cohen the barbarian", "Moist von Lipwig", "Nanny Ogg",
            "Twoflower", "Pteppicymon XXVIII", "Brutha", "Imp y Celyn", "Lu-Tze", "Salzella", "Findthee Swing", "Detritus",
            "Evil Harry Dread", "Doughnut Jimmy", "Mad Lord Snapcase", "Mrs. Marietta Cosmopilite", "Ronald Rust",
            "Victor Tugelbend", "Wallace Sonky", "Ptraci", "Esmerelda Margaret Note Spelling of Lancre", "Mustrum Ridcully",
            "Carrot Ironfoundersson", "Bloody Stupid Johnson", "Sacharissa Cripslock", "Tawneee", "Ella Saturday",
            "Jack Jackrum", "Adora Belle Dearheart", "71-hour Ahmed", "Conina", "Mr. Slant", "Rosemary Palm",
            "Lobsang Ludd", "Tolliver Groat", "Reacher Gilt", "Gaspode", "Didactylos", "Mightily Oats", "Tiffany Aching",
            "Olwyn Vitoller", "Cheery Littlebottom"
        ],
        actions: ["went to", "had a drink at", "attacked", "raided", "defended", "ate at", "left", "burned down", 
            "ran away from", "fled", "flew to", "swam to", "sailed to", "got drunk at", "took a photo of", "drew a picture of",
            "painted", "slept at", "went on holiday to", "raised a glass to", "very briefly visited", "rode a horse to"
        ],
        places: ["the Shades of Ankh-Morpork", "the Wizards' Quarter of Ankh-Morpork", "Biers", "the Bucket", 
            "the Lady Sybil Free Hospital", "the Mended Drum", "the Odium", "the Opera House", "the Patrician's Palace", 
            "the Pork Futures Warehouse", "the Pseudopolis Yard", "the Ramkin Residence", "the Sunshine Sanctuary for Sick Dragons",
            "the Temple of Small Gods", "the Unseen University", "Kneck Citadel", "Munz", "the Chalk", "Chimeria",
            "Copperhead", "Dunmanifestin", "Genua", "Gonim", "Holy Wood", "Ham-on-Koom", "Kythia", "Bad Ass", "Lancre Castle",
            "Lancre Town", "Mad Stoat", "the Dancers", "the Long Man", "the Place Where The Sun Does Not Shine", "Slice",
            "Llamedos", "Mouldavia", "No Thingfjord", "Keepsake Hall", "Sheepridge", "Ohulan Cutash", "Bong Phut", "Long Nap",
            "Brazeneck College", "Quirm", "Skund", "Sto Helit", "Sto Kerrig", "Sto Lat", "Crundells", "the Goblin's Head",
            "Bad Blintz", "Bonk", "Escrow", "Schmaltzberg", "Porkscratchenz", "Slake", "the Wymberg", "Zlobenia"
        ]
    }

    const charaLength = messageItems.characters.length;
    const actionLength = messageItems.actions.length;
    const placeLength = messageItems.places.length;

    charOut = messageItems.characters[Math.floor(Math.random() * charaLength)];
    actionOut = messageItems.actions[Math.floor(Math.random() * actionLength)];
    placeOut = messageItems.places[Math.floor(Math.random() * placeLength)];
    strOut = charOut + " " + actionOut + " " + placeOut;
    document.getElementById("message").innerHTML = strOut;
}

document.querySelector("#generate").addEventListener("click", newMessage);