// Properties data - This would normally be loaded from a server or localStorage
const propertiesData = [
    // Brown Group
    {
        id: 1,
        name: "Mediterranean Avenue",
        group: "brown",
        price: 60,
        rent: [2, 10, 30, 90, 160, 250],
        mortgageValue: 30,
        houseCost: 50,
        hotelCost: 50,
        position: 1,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 3,
        name: "Baltic Avenue",
        group: "brown",
        price: 60,
        rent: [4, 20, 60, 180, 320, 450],
        mortgageValue: 30,
        houseCost: 50,
        hotelCost: 50,
        position: 3,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Light Blue Group
    {
        id: 6,
        name: "Oriental Avenue",
        group: "light-blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        mortgageValue: 50,
        houseCost: 50,
        hotelCost: 50,
        position: 6,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 8,
        name: "Vermont Avenue",
        group: "light-blue",
        price: 100,
        rent: [6, 30, 90, 270, 400, 550],
        mortgageValue: 50,
        houseCost: 50,
        hotelCost: 50,
        position: 8,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 9,
        name: "Connecticut Avenue",
        group: "light-blue",
        price: 120,
        rent: [8, 40, 100, 300, 450, 600],
        mortgageValue: 60,
        houseCost: 50,
        hotelCost: 50,
        position: 9,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Pink Group
    {
        id: 11,
        name: "St. Charles Place",
        group: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        mortgageValue: 70,
        houseCost: 100,
        hotelCost: 100,
        position: 11,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 13,
        name: "States Avenue",
        group: "pink",
        price: 140,
        rent: [10, 50, 150, 450, 625, 750],
        mortgageValue: 70,
        houseCost: 100,
        hotelCost: 100,
        position: 13,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 14,
        name: "Virginia Avenue",
        group: "pink",
        price: 160,
        rent: [12, 60, 180, 500, 700, 900],
        mortgageValue: 80,
        houseCost: 100,
        hotelCost: 100,
        position: 14,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Orange Group
    {
        id: 16,
        name: "St. James Place",
        group: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        mortgageValue: 90,
        houseCost: 100,
        hotelCost: 100,
        position: 16,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 18,
        name: "Tennessee Avenue",
        group: "orange",
        price: 180,
        rent: [14, 70, 200, 550, 750, 950],
        mortgageValue: 90,
        houseCost: 100,
        hotelCost: 100,
        position: 18,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 19,
        name: "New York Avenue",
        group: "orange",
        price: 200,
        rent: [16, 80, 220, 600, 800, 1000],
        mortgageValue: 100,
        houseCost: 100,
        hotelCost: 100,
        position: 19,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Red Group
    {
        id: 21,
        name: "Kentucky Avenue",
        group: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        mortgageValue: 110,
        houseCost: 150,
        hotelCost: 150,
        position: 21,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 23,
        name: "Indiana Avenue",
        group: "red",
        price: 220,
        rent: [18, 90, 250, 700, 875, 1050],
        mortgageValue: 110,
        houseCost: 150,
        hotelCost: 150,
        position: 23,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 24,
        name: "Illinois Avenue",
        group: "red",
        price: 240,
        rent: [20, 100, 300, 750, 925, 1100],
        mortgageValue: 120,
        houseCost: 150,
        hotelCost: 150,
        position: 24,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Yellow Group
    {
        id: 26,
        name: "Atlantic Avenue",
        group: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        mortgageValue: 130,
        houseCost: 150,
        hotelCost: 150,
        position: 26,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 27,
        name: "Ventnor Avenue",
        group: "yellow",
        price: 260,
        rent: [22, 110, 330, 800, 975, 1150],
        mortgageValue: 130,
        houseCost: 150,
        hotelCost: 150,
        position: 27,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 29,
        name: "Marvin Gardens",
        group: "yellow",
        price: 280,
        rent: [24, 120, 360, 850, 1025, 1200],
        mortgageValue: 140,
        houseCost: 150,
        hotelCost: 150,
        position: 29,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Green Group
    {
        id: 31,
        name: "Pacific Avenue",
        group: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        mortgageValue: 150,
        houseCost: 200,
        hotelCost: 200,
        position: 31,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 32,
        name: "North Carolina Avenue",
        group: "green",
        price: 300,
        rent: [26, 130, 390, 900, 1100, 1275],
        mortgageValue: 150,
        houseCost: 200,
        hotelCost: 200,
        position: 32,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 34,
        name: "Pennsylvania Avenue",
        group: "green",
        price: 320,
        rent: [28, 150, 450, 1000, 1200, 1400],
        mortgageValue: 160,
        houseCost: 200,
        hotelCost: 200,
        position: 34,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Blue Group
    {
        id: 37,
        name: "Park Place",
        group: "blue",
        price: 350,
        rent: [35, 175, 500, 1100, 1300, 1500],
        mortgageValue: 175,
        houseCost: 200,
        hotelCost: 200,
        position: 37,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    {
        id: 39,
        name: "Boardwalk",
        group: "blue",
        price: 400,
        rent: [50, 200, 600, 1400, 1700, 2000],
        mortgageValue: 200,
        houseCost: 200,
        hotelCost: 200,
        position: 39,
        owner: null,
        houses: 0,
        isMonopoly: false,
        isMortgaged: false
    },
    
    // Railroads
    {
        id: 5,
        name: "Reading Railroad",
        group: "railroad",
        price: 200,
        rent: [25, 50, 100, 200],
        mortgageValue: 100,
        position: 5,
        owner: null,
        isMortgaged: false
    },
    {
        id: 15,
        name: "Pennsylvania Railroad",
        group: "railroad",
        price: 200,
        rent: [25, 50, 100, 200],
        mortgageValue: 100,
        position: 15,
        owner: null,
        isMortgaged: false
    },
    {
        id: 25,
        name: "B&O Railroad",
        group: "railroad",
        price: 200,
        rent: [25, 50, 100, 200],
        mortgageValue: 100,
        position: 25,
        owner: null,
        isMortgaged: false
    },
    {
        id: 35,
        name: "Short Line",
        group: "railroad",
        price: 200,
        rent: [25, 50, 100, 200],
        mortgageValue: 100,
        position: 35,
        owner: null,
        isMortgaged: false
    },
    
    // Utilities
    {
        id: 12,
        name: "Electric Company",
        group: "utility",
        price: 150,
        multipliers: [4, 10],
        mortgageValue: 75,
        position: 12,
        owner: null,
        isMortgaged: false
    },
    {
        id: 28,
        name: "Water Works",
        group: "utility",
        price: 150,
        multipliers: [4, 10],
        mortgageValue: 75,
        position: 28,
        owner: null,
        isMortgaged: false
    }
];

// Simulated players - In production, this would come from a server
const players = [
    { id: 1, name: "Player 1", balance: 1500 },
    { id: 2, name: "Player 2", balance: 1500 },
    { id: 3, name: "Player 3", balance: 1500 },
    { id: 4, name: "Player 4", balance: 1500 }
];

// DOM elements
const propertiesContainer = document.getElementById('propertiesContainer');
const propertySearch = document.getElementById('propertySearch');
const propertyGroupFilter = document.getElementById('propertyGroupFilter');
const ownershipFilter = document.getElementById('ownershipFilter');
const propertyDetailsSection = document.getElementById('propertyDetailsSection');
const closePropertyDetails = document.getElementById('closePropertyDetails');
const propertyDetailsCard = document.getElementById('propertyDetailsCard');
const transferModal = document.getElementById('transferModal');
const transferToPlayer = document.getElementById('transferToPlayer');
const transferAmount = document.getElementById('transferAmount');
const closeTransferModal = document.getElementById('closeTransferModal');
const confirmTransfer = document.getElementById('confirmTransfer');

// Action buttons
const buyPropertyBtn = document.getElementById('buyProperty');
const mortgagePropertyBtn = document.getElementById('mortgageProperty');
const unmortgagePropertyBtn = document.getElementById('unmortgageProperty');
const buildHouseBtn = document.getElementById('buildHouse');
const sellHouseBtn = document.getElementById('sellHouse');
const transferPropertyBtn = document.getElementById('transferProperty');

// Current property being viewed
let currentProperty = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProperties();
    setupEventListeners();
    populatePlayerDropdown();
});

// Load properties based on filters
function loadProperties() {
    const searchValue = propertySearch.value.toLowerCase();
    const groupFilter = propertyGroupFilter.value;
    const ownershipValue = ownershipFilter.value;
    
    let filteredProperties = propertiesData.filter(property => {
        // Apply search filter
        if (searchValue && !property.name.toLowerCase().includes(searchValue)) {
            return false;
        }
        
        // Apply group filter
        if (groupFilter !== 'all' && property.group !== groupFilter) {
            return false;
        }
        
        // Apply ownership filter
        if (ownershipValue === 'owned' && property.owner === null) {
            return false;
        } else if (ownershipValue === 'available' && property.owner !== null) {
            return false;
        }
        
        return true;
    });
    
    renderProperties(filteredProperties);
}

// Render the properties to the DOM
function renderProperties(properties) {
    propertiesContainer.innerHTML = '';
    
    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.dataset.id = property.id;
        
        let statusClass = 'available';
        let statusText = 'Available';
        
        if (property.owner !== null) {
            statusClass = property.isMortgaged ? 'mortgaged' : 'owned';
            statusText = property.isMortgaged ? 'Mortgaged' : `Owned by Player ${property.owner}`;
        }
        
        propertyCard.innerHTML = `
            <div class="property-header property-${property.group}">
                ${property.name}
            </div>
            <div class="property-body">
                <div class="property-price">$${property.price}</div>
                <div class="property-status ${statusClass}">${statusText}</div>
            </div>
        `;
        
        propertyCard.addEventListener('click', () => showPropertyDetails(property));
        propertiesContainer.appendChild(propertyCard);
    });
}

// Show property details
function showPropertyDetails(property) {
    currentProperty = property;
    propertyDetailsSection.classList.remove('hidden');
    
    // Format the rent information based on property type
    let rentHtml = '';
    
    if (property.group === 'railroad') {
        rentHtml = `
            <table class="rent-table">
                <tr>
                    <th>1 Railroad</th>
                    <td>$${property.rent[0]}</td>
                </tr>
                <tr>
                    <th>2 Railroads</th>
                    <td>$${property.rent[1]}</td>
                </tr>
                <tr>
                    <th>3 Railroads</th>
                    <td>$${property.rent[2]}</td>
                </tr>
                <tr>
                    <th>4 Railroads</th>
                    <td>$${property.rent[3]}</td>
                </tr>
            </table>
        `;
    } else if (property.group === 'utility') {
        rentHtml = `
            <table class="rent-table">
                <tr>
                    <th>1 Utility</th>
                    <td>${property.multipliers[0]}× dice roll</td>
                </tr>
                <tr>
                    <th>2 Utilities</th>
                    <td>${property.multipliers[1]}× dice roll</td>
                </tr>
            </table>
        `;
    } else {
        rentHtml = `
            <table class="rent-table">
                <tr>
                    <th>Rent</th>
                    <td>$${property.rent[0]}</td>
                </tr>
                <tr>
                    <th>With 1 House</th>
                    <td>$${property.rent[1]}</td>
                </tr>
                <tr>
                    <th>With 2 Houses</th>
                    <td>$${property.rent[2]}</td>
                </tr>
                <tr>
                    <th>With 3 Houses</th>
                    <td>$${property.rent[3]}</td>
                </tr>
                <tr>
                    <th>With 4 Houses</th>
                    <td>$${property.rent[4]}</td>
                </tr>
                <tr>
                    <th>With Hotel</th>
                    <td>$${property.rent[5]}</td>
                </tr>
            </table>
        `;
    }

    // Build the property info HTML
    let propertyInfoHtml = `
        <div class="property-detail-header property-${property.group}">
            ${property.name}
        </div>
        
        <div class="property-info-row">
            <div class="property-info-label">Position:</div>
            <div class="property-info-value">${property.position}</div>
        </div>
        
        <div class="property-info-row">
            <div class="property-info-label">Price:</div>
            <div class="property-info-value">$${property.price}</div>
        </div>
        
        <div class="property-info-row">
            <div class="property-info-label">Owner:</div>
            <div class="property-info-value">${property.owner ? `Player ${property.owner}` : 'None'}</div>
        </div>
        
        <div class="property-info-row">
            <div class="property-info-label">Mortgage Value:</div>
            <div class="property-info-value">$${property.mortgageValue}</div>
        </div>
    `;
    
    // Add house/hotel info for colored properties
    if (property.group !== 'railroad' && property.group !== 'utility') {
        propertyInfoHtml += `
            <div class="property-info-row">
                <div class="property-info-label">Houses:</div>
                <div class="property-info-value">${property.houses}</div>
            </div>
            
            <div class="property-info-row">
                <div class="property-info-label">House Cost:</div>
                <div class="property-info-value">$${property.houseCost}</div>
            </div>
            
            <div class="property-info-row">
                <div class="property-info-label">Hotel Cost:</div>
                <div class="property-info-value">$${property.hotelCost}</div>
            </div>
        `;
    }
    
    // Add rent table
    propertyInfoHtml += `
        <div class="property-info-row">
            <div class="property-info-label">Rent:</div>
            <div class="property-info-value">${rentHtml}</div>
        </div>
    `;
    
    propertyDetailsCard.innerHTML = propertyInfoHtml;
    
    // Update action buttons based on property state
    updateActionButtons();
}

// Update the availability of action buttons based on the current property
function updateActionButtons() {
    if (!currentProperty) return;
    
    // Buy button is only available if the property has no owner
    buyPropertyBtn.disabled = currentProperty.owner !== null;
    
    // Mortgage button is available if the property is owned and not mortgaged
    mortgagePropertyBtn.disabled = currentProperty.owner === null || currentProperty.isMortgaged;
    
    // Unmortgage button is available if the property is owned and mortgaged
    unmortgagePropertyBtn.disabled = currentProperty.owner === null || !currentProperty.isMortgaged;
    
    // Build house button is available if property is part of a monopoly, not mortgaged, and has less than 5 houses
    buildHouseBtn.disabled = currentProperty.owner === null || 
                             !currentProperty.isMonopoly || 
                             currentProperty.isMortgaged || 
                             currentProperty.houses >= 5 ||
                             currentProperty.group === 'railroad' || 
                             currentProperty.group === 'utility';
    
    // Sell house button is available if property has houses to sell
    sellHouseBtn.disabled = currentProperty.owner === null || 
                            currentProperty.houses <= 0 ||
                            currentProperty.group === 'railroad' || 
                            currentProperty.group === 'utility';
    
    // Transfer button is available if property is owned
    transferPropertyBtn.disabled = currentProperty.owner === null;
}

// Handle buying a property
function buyProperty() {
    if (!currentProperty || currentProperty.owner !== null) return;
    
    // Find the first player (this is simplified - in a real app, you'd use the active player)
    const player = players[0];
    
    // Check if player has enough money
    if (player.balance < currentProperty.price) {
        alert("Not enough funds to buy this property!");
        return;
    }
    
    // Update player balance
    player.balance -= currentProperty.price;
    
    // Update property owner
    currentProperty.owner = player.id;
    
    // Check if this creates a monopoly
    checkForMonopoly(currentProperty);
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Handle mortgaging a property
function mortgageProperty() {
    if (!currentProperty || currentProperty.owner === null || currentProperty.isMortgaged) return;
    
    // Find the owner
    const player = players.find(p => p.id === currentProperty.owner);
    if (!player) return;
    
    // Update player balance
    player.balance += currentProperty.mortgageValue;
    
    // Update property status
    currentProperty.isMortgaged = true;
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Handle unmortgaging a property
function unmortgageProperty() {
    if (!currentProperty || currentProperty.owner === null || !currentProperty.isMortgaged) return;
    
    // Find the owner
    const player = players.find(p => p.id === currentProperty.owner);
    if (!player) return;
    
    // Calculate unmortgage cost (mortgage value + 10%)
    const unmortgageCost = Math.round(currentProperty.mortgageValue * 1.1);
    
    // Check if player has enough money
    if (player.balance < unmortgageCost) {
        alert("Not enough funds to unmortgage this property!");
        return;
    }
    
    // Update player balance
    player.balance -= unmortgageCost;
    
    // Update property status
    currentProperty.isMortgaged = false;
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Handle building a house
function buildHouse() {
    if (!currentProperty || 
        currentProperty.owner === null || 
        !currentProperty.isMonopoly || 
        currentProperty.houses >= 5 ||
        currentProperty.group === 'railroad' || 
        currentProperty.group === 'utility') return;
    
    // Find the owner
    const player = players.find(p => p.id === currentProperty.owner);
    if (!player) return;
    
    // Check if player has enough money
    if (player.balance < currentProperty.houseCost) {
        alert("Not enough funds to build a house!");
        return;
    }
    
    // Update player balance
    player.balance -= currentProperty.houseCost;
    
    // Update property houses
    currentProperty.houses += 1;
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Handle selling a house
function sellHouse() {
    if (!currentProperty || currentProperty.owner === null || currentProperty.houses <= 0) return;
    
    // Find the owner
    const player = players.find(p => p.id === currentProperty.owner);
    if (!player) return;
    
    // Calculate sell price (half of house cost)
    const sellPrice = Math.floor(currentProperty.houseCost / 2);
    
    // Update player balance
    player.balance += sellPrice;
    
    // Update property houses
    currentProperty.houses -= 1;
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Show the transfer modal
function showTransferModal() {
    if (!currentProperty || currentProperty.owner === null) return;
    
    // Reset transfer amount
    transferAmount.value = "";
    
    // Show the modal
    transferModal.classList.remove('hidden');
}

// Handle property transfer
function transferProperty() {
    const newOwnerId = parseInt(transferToPlayer.value);
    const transferValue = parseInt(transferAmount.value);
    
    if (!newOwnerId || isNaN(transferValue)) {
        alert("Please select a player and enter a valid amount.");
        return;
    }
    
    // Find the current and new owners
    const currentOwner = players.find(p => p.id === currentProperty.owner);
    const newOwner = players.find(p => p.id === newOwnerId);
    
    if (!currentOwner || !newOwner) return;
    
    // Check if new owner has enough money
    if (newOwner.balance < transferValue) {
        alert("The selected player doesn't have enough funds!");
        return;
    }
    
    // Update player balances
    currentOwner.balance += transferValue;
    newOwner.balance -= transferValue;
    
    // Update property owner
    currentProperty.owner = newOwnerId;
    
    // Check for monopolies
    checkForMonopoly(currentProperty);
    
    // Close the modal
    transferModal.classList.add('hidden');
    
    // Save changes and update UI
    saveChanges();
    updateActionButtons();
    showPropertyDetails(currentProperty);
}

// Check if a property is part of a monopoly
function checkForMonopoly(property) {
    if (property.group === 'railroad' || property.group === 'utility') return;
    
    // Find all properties in the same group
    const propertiesInGroup = propertiesData.filter(p => p.group === property.group);
    
    // Check if all properties in the group have the same owner
    const sameOwner = propertiesInGroup.every(p => p.owner === property.owner);
    
    // Update monopoly status for all properties in the group
    if (sameOwner) {
        propertiesInGroup.forEach(p => {
            p.isMonopoly = true;
        });
    }
}

// Populate player dropdown for transfers
function populatePlayerDropdown() {
    transferToPlayer.innerHTML = '';
    
    players.forEach(player => {
        // Don't include the current property owner
        if (currentProperty && player.id === currentProperty.owner) return;
        
        const option = document.createElement('option');
        option.value = player.id;
        option.textContent = `${player.name} ($${player.balance})`;
        transferToPlayer.appendChild(option);
    });
}

// Save changes to localStorage (simulated)
function saveChanges() {
    // In a real app, this would save to localStorage or a server
    console.log("Changes saved:", { properties: propertiesData, players: players });
    
    // Refresh the properties grid
    loadProperties();
}

// Set up event listeners
function setupEventListeners() {
    // Filter and search inputs
    propertySearch.addEventListener('input', loadProperties);
    propertyGroupFilter.addEventListener('change', loadProperties);
    ownershipFilter.addEventListener('change', loadProperties);
    
    // Close buttons
    closePropertyDetails.addEventListener('click', () => {
        propertyDetailsSection.classList.add('hidden');
        currentProperty = null;
    });
    
    closeTransferModal.addEventListener('click', () => {
        transferModal.classList.add('hidden');
    });
    
    // Action buttons
    buyPropertyBtn.addEventListener('click', buyProperty);
    mortgagePropertyBtn.addEventListener('click', mortgageProperty);
    unmortgagePropertyBtn.addEventListener('click', unmortgageProperty);
    buildHouseBtn.addEventListener('click', buildHouse);
    sellHouseBtn.addEventListener('click', sellHouse);
    transferPropertyBtn.addEventListener('click', showTransferModal);
    confirmTransfer.addEventListener('click', transferProperty);
}