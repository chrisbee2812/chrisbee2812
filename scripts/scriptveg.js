// Data for planting and harvesting times in France
const vegetableData = {
    tomato: {
      name: "Tomato",
      plant: "March to May",
      harvest: "June to September",
      tips: "Plant in a sunny spot and water regularly."
    },
    carrot: {
      name: "Carrot",
      plant: "March to July",
      harvest: "June to October",
      tips: "Plant in loose, sandy soil and thin seedlings as they grow."
    },
    potato: {
      name: "Potato",
      plant: "March to May",
      harvest: "June to September",
      tips: "Plant in well-drained soil and mound soil around the stems as they grow."
    },
    lettuce: {
      name: "Lettuce",
      plant: "March to September",
      harvest: "May to October",
      tips: "Plant in partial shade and keep the soil moist."
    },
    zucchini: {
      name: "Zucchini",
      plant: "April to June",
      harvest: "June to September",
      tips: "Plant in a sunny spot and water deeply once a week."
    },
    pepper: {
      name: "Pepper",
      plant: "March to May",
      harvest: "July to September",
      tips: "Plant in a warm, sunny spot and provide support for the plants."
    },
    onion: {
      name: "Onion",
      plant: "February to April",
      harvest: "July to September",
      tips: "Plant in well-drained soil and keep the area weed-free."
    },
    bean: {
      name: "Bean",
      plant: "April to July",
      harvest: "June to September",
      tips: "Plant in a sunny spot and provide support for climbing varieties."
    },
    cucumber: {
      name: "Cucumber",
      plant: "April to June",
      harvest: "July to September",
      tips: "Plant in a sunny spot and water regularly."
    },
    spinach: {
      name: "Spinach",
      plant: "March to September",
      harvest: "May to October",
      tips: "Plant in partial shade and keep the soil moist."
    }
  };
  
  // Function to display vegetable information
  function displayVegetableInfo() {
    const select = document.getElementById('vegetable-select');
    const output = document.getElementById('vegetable-info');
    const selectedVegetable = select.value;
  
    if (selectedVegetable && vegetableData[selectedVegetable]) {
      const vegetable = vegetableData[selectedVegetable];
      output.innerHTML = `
        <h2>${vegetable.name}</h2>
        <p><strong>Plant:</strong> ${vegetable.plant}</p>
        <p><strong>Harvest:</strong> ${vegetable.harvest}</p>
        <p><strong>Tips:</strong> ${vegetable.tips}</p>
      `;
    } else {
      output.innerHTML = "";
    }
  }
  
  // Add event listener to the select element
  document.getElementById('vegetable-select').addEventListener('change', displayVegetableInfo);