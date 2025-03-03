// profiles.js - Handles player profile functionality for College Monopoly Championship

// Player data - This would typically come from a database or API
const players = [
    {
        id: 'player1',
        name: 'Alex Johnson',
        title: 'Computer Science Major',
        balance: 3450,
        properties: 7,
        gamesPlayed: 3,
        gamesWon: 2,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'Park Place', value: 350, houses: 3, rent: 175, color: 'var(--monopoly-red)' },
            { name: 'Boardwalk', value: 400, houses: 2, rent: 200, color: 'var(--monopoly-green)' },
            { name: 'Water Works', value: 150, houses: 0, rent: 'Dice x 10', color: 'var(--info-color)', type: 'Utility' },
            { name: 'Reading Railroad', value: 200, houses: 0, rent: 25, color: 'var(--dark-color)', type: 'Railroad' },
            { name: 'St. James Place', value: 180, houses: 1, rent: 90, color: 'var(--warning-color)' },
            { name: 'Tennessee Avenue', value: 180, houses: 1, rent: 90, color: 'var(--warning-color)' },
            { name: 'New York Avenue', value: 200, houses: 0, rent: 100, color: 'var(--warning-color)' }
        ],
        transactions: [
            { type: 'expense', title: 'Property Purchase', description: 'Bought Mediterranean Avenue', amount: -60 },
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'expense', title: 'Rent Payment', description: 'To Samantha Lee', amount: -150 },
            { type: 'income', title: 'Chance Card', description: 'Bank error in your favor', amount: 75 },
            { type: 'expense', title: 'Property Improvement', description: 'Built house on Park Place', amount: -200 },
            { type: 'income', title: 'Rent Collection', description: 'From Marcus Williams', amount: 120 }
        ],
        stats: {
            highestBalance: 3200,
            timesInJail: 8,
            mostExpensivePurchase: 1450,
            propertiesBought: 12,
            housesBuilt: 5,
            hotelsBuilt: 1
        }
    },
    {
        id: 'player2',
        name: 'Samantha Lee',
        title: 'Business Administration',
        balance: 2710,
        properties: 5,
        gamesPlayed: 2,
        gamesWon: 1,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'Connecticut Avenue', value: 120, houses: 2, rent: 60, color: 'var(--info-color)' },
            { name: 'Vermont Avenue', value: 100, houses: 2, rent: 50, color: 'var(--info-color)' },
            { name: 'Oriental Avenue', value: 100, houses: 2, rent: 50, color: 'var(--info-color)' },
            { name: 'B&O Railroad', value: 200, houses: 0, rent: 25, color: 'var(--dark-color)', type: 'Railroad' },
            { name: 'Baltic Avenue', value: 60, houses: 0, rent: 30, color: 'var(--secondary-color)' }
        ],
        transactions: [
            { type: 'income', title: 'Rent Collection', description: 'From Alex Johnson', amount: 150 },
            { type: 'expense', title: 'Tax Payment', description: 'Income tax', amount: -200 },
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'expense', title: 'Property Improvement', description: 'Built houses on Connecticut Avenue', amount: -100 }
        ],
        stats: {
            highestBalance: 2900,
            timesInJail: 3,
            mostExpensivePurchase: 780,
            propertiesBought: 7,
            housesBuilt: 6,
            hotelsBuilt: 0
        }
    },
    {
        id: 'player3',
        name: 'Marcus Williams',
        title: 'Engineering Major',
        balance: 4200,
        properties: 9,
        gamesPlayed: 4,
        gamesWon: 3,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'Ventnor Avenue', value: 260, houses: 3, rent: 130, color: 'var(--accent-color)' },
            { name: 'Marvin Gardens', value: 280, houses: 3, rent: 140, color: 'var(--accent-color)' },
            { name: 'Atlantic Avenue', value: 260, houses: 3, rent: 130, color: 'var(--accent-color)' },
            { name: 'Pacific Avenue', value: 300, houses: 0, rent: 150, color: 'var(--success-color)' },
            { name: 'North Carolina Avenue', value: 300, houses: 0, rent: 150, color: 'var(--success-color)' },
            { name: 'Pennsylvania Avenue', value: 320, houses: 0, rent: 160, color: 'var(--success-color)' },
            { name: 'Short Line Railroad', value: 200, houses: 0, rent: 25, color: 'var(--dark-color)', type: 'Railroad' },
            { name: 'Pennsylvania Railroad', value: 200, houses: 0, rent: 25, color: 'var(--dark-color)', type: 'Railroad' },
            { name: 'Electric Company', value: 150, houses: 0, rent: 'Dice x 4', color: 'var(--info-color)', type: 'Utility' }
        ],
        transactions: [
            { type: 'expense', title: 'Rent Payment', description: 'To Alex Johnson', amount: -120 },
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'income', title: 'Community Chest', description: 'Second prize in beauty contest', amount: 10 },
            { type: 'expense', title: 'Property Purchase', description: 'Bought Pennsylvania Avenue', amount: -320 }
        ],
        stats: {
            highestBalance: 4500,
            timesInJail: 5,
            mostExpensivePurchase: 1950,
            propertiesBought: 15,
            housesBuilt: 9,
            hotelsBuilt: 2
        }
    },
    {
        id: 'player4',
        name: 'Jessica Chen',
        title: 'Mathematics Major',
        balance: 1950,
        properties: 4,
        gamesPlayed: 2,
        gamesWon: 0,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'Kentucky Avenue', value: 220, houses: 0, rent: 110, color: 'var(--danger-color)' },
            { name: 'Indiana Avenue', value: 220, houses: 0, rent: 110, color: 'var(--danger-color)' },
            { name: 'Illinois Avenue', value: 240, houses: 0, rent: 120, color: 'var(--danger-color)' },
            { name: 'Mediterranean Avenue', value: 60, houses: 0, rent: 30, color: 'var(--secondary-color)' }
        ],
        transactions: [
            { type: 'expense', title: 'Property Purchase', description: 'Bought Illinois Avenue', amount: -240 },
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'expense', title: 'Chance Card', description: 'Street repairs', amount: -150 },
            { type: 'income', title: 'Rent Collection', description: 'From Tyler Rodriguez', amount: 110 }
        ],
        stats: {
            highestBalance: 2200,
            timesInJail: 4,
            mostExpensivePurchase: 850,
            propertiesBought: 6,
            housesBuilt: 2,
            hotelsBuilt: 0
        }
    },
    {
        id: 'player5',
        name: 'Tyler Rodriguez',
        title: 'Psychology Major',
        balance: 3100,
        properties: 6,
        gamesPlayed: 3,
        gamesWon: 1,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'St. Charles Place', value: 140, houses: 2, rent: 70, color: 'var(--secondary-color)' },
            { name: 'Virginia Avenue', value: 160, houses: 2, rent: 80, color: 'var(--secondary-color)' },
            { name: 'States Avenue', value: 140, houses: 2, rent: 70, color: 'var(--secondary-color)' },
            { name: 'New York Avenue', value: 200, houses: 0, rent: 100, color: 'var(--warning-color)' },
            { name: 'Community Chest Card', value: 0, houses: 0, rent: 0, color: 'var(--light-color)', type: 'Card' },
            { name: 'Chance Card', value: 0, houses: 0, rent: 0, color: 'var(--light-color)', type: 'Card' }
        ],
        transactions: [
            { type: 'expense', title: 'Rent Payment', description: 'To Jessica Chen', amount: -110 },
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'expense', title: 'Property Improvement', description: 'Built houses on Virginia Avenue', amount: -100 },
            { type: 'income', title: 'Community Chest', description: 'Bank error in your favor', amount: 200 }
        ],
        stats: {
            highestBalance: 3500,
            timesInJail: 6,
            mostExpensivePurchase: 1200,
            propertiesBought: 10,
            housesBuilt: 6,
            hotelsBuilt: 0
        }
    },
    {
        id: 'player6',
        name: 'Emma Davis',
        title: 'Art & Design Major',
        balance: 2850,
        properties: 5,
        gamesPlayed: 2,
        gamesWon: 1,
        avatar: '/api/placeholder/100/100',
        ownedProperties: [
            { name: 'Ventnor Avenue', value: 260, houses: 0, rent: 130, color: 'var(--accent-color)' },
            { name: 'Pacific Avenue', value: 300, houses: 0, rent: 150, color: 'var(--success-color)' },
            { name: 'North Carolina Avenue', value: 300, houses: 0, rent: 150, color: 'var(--success-color)' },
            { name: 'Get Out of Jail Free Card', value: 0, houses: 0, rent: 0, color: 'var(--light-color)', type: 'Card' },
            { name: 'Community Chest Card', value: 0, houses: 0, rent: 0, color: 'var(--light-color)', type: 'Card' }
        ],
        transactions: [
            { type: 'income', title: 'Passed GO', description: 'Collected salary', amount: 200 },
            { type: 'expense', title: 'Property Purchase', description: 'Bought Pacific Avenue', amount: -300 },
            { type: 'income', title: 'Rent Collection', description: 'From Tyler Rodriguez', amount: 130 },
            { type: 'expense', title: 'Tax Payment', description: 'Luxury tax', amount: -75 }
        ],
        stats: {
            highestBalance: 3100,
            timesInJail: 2,
            mostExpensivePurchase: 950,
            propertiesBought: 8,
            housesBuilt: 3,
            hotelsBuilt: 0
        }
    }
];

// DOM elements
let profileGrid;
let searchInput;
let filterSelect;
let profileModal;
let playerNameElement;
let playerTitleElement;
let currentTabContent;
let paginationContainer;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    renderPlayerCards(players);
    setupEventListeners();
});

// Initialize DOM elements
function initializeElements() {
    profileGrid = document.querySelector('.profile-grid');
    searchInput = document.querySelector('.search-bar input');
    filterSelect = document.querySelector('.filter-options select');
    profileModal = document.getElementById('profileModal');
    playerNameElement = document.getElementById('playerName');
    playerTitleElement = document.getElementById('playerTitle');
    paginationContainer = document.querySelector('.pagination');
}

// Set up event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    if (filterSelect) {
        filterSelect.addEventListener('change', handleFilter);
    }
    
    // Tab switching in profile modal
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId, tab);
        });
    });
    
    // Modal close button
    const closeButton = document.querySelector('.close-modal');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === profileModal) {
            closeModal();
        }
    });
    
    // Pagination
    if (paginationContainer) {
        const pageButtons = paginationContainer.querySelectorAll('button');
        pageButtons.forEach(button => {
            button.addEventListener('click', () => {
                pageButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                // Here you would normally load the data for the selected page
                // For now we'll just keep the same data
            });
        });
    }
}

// Render player cards to the grid
function renderPlayerCards(playersToRender) {
    if (!profileGrid) return;
    
    profileGrid.innerHTML = '';
    
    playersToRender.forEach(player => {
        const playerCard = createPlayerCard(player);
        profileGrid.appendChild(playerCard);
    });
}

// Create a player card element
function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.setAttribute('onclick', `openModal('${player.id}')`);
    
    card.innerHTML = `
        <div class="profile-header-bg"></div>
        <div class="profile-avatar">
            <img src="${player.avatar}" alt="${player.name}">
        </div>
        <div class="profile-info">
            <div class="profile-name">${player.name}</div>
            <div class="profile-title">${player.title}</div>
            <div class="profile-stats">
                <div class="stat">
                    <div class="stat-value">$${player.balance}</div>
                    <div class="stat-label">Balance</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${player.properties}</div>
                    <div class="stat-label">Properties</div>
                </div>
                <div class="stat">
                    <div class="stat-value">${player.gamesPlayed}</div>
                    <div class="stat-label">Games</div>
                </div>
            </div>
        </div>
        <div class="profile-action">
            <button class="btn-primary">View Profile</button>
        </div>
    `;
    
    return card;
}

// Handle search input
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredPlayers = players.filter(player => {
        return player.name.toLowerCase().includes(searchTerm) || 
               player.title.toLowerCase().includes(searchTerm);
    });
    
    renderPlayerCards(filteredPlayers);
}

// Handle filter selection
function handleFilter() {
    const filterValue = filterSelect.value;
    let filteredPlayers = [...players];
    
    switch(filterValue) {
        case 'balance-high':
            filteredPlayers.sort((a, b) => b.balance - a.balance);
            break;
        case 'properties':
            filteredPlayers.sort((a, b) => b.properties - a.properties);
            break;
        case 'active':
            filteredPlayers = filteredPlayers.filter(player => player.gamesPlayed > 0);
            break;
        default:
            // Default is 'all', no sorting needed
            break;
    }
    
    renderPlayerCards(filteredPlayers);
}

// Open the player profile modal
function openModal(playerId) {
    const player = players.find(p => p.id === playerId);
    if (!player) return;
    
    // Update player info
    document.getElementById('playerName').textContent = player.name;
    document.getElementById('playerTitle').textContent = player.title;
    
    // Update stats
    const statCards = document.querySelector('.stat-cards');
    statCards.innerHTML = `
        <div class="stat-card">
            <div class="stat-card-value">$${player.balance}</div>
            <div class="stat-card-label">Current Balance</div>
        </div>
        <div class="stat-card" style="border-left-color: var(--success-color)">
            <div class="stat-card-value">${player.properties}</div>
            <div class="stat-card-label">Properties Owned</div>
        </div>
        <div class="stat-card" style="border-left-color: var(--accent-color)">
            <div class="stat-card-value">${player.gamesPlayed}</div>
            <div class="stat-card-label">Games Played</div>
        </div>
    `;
    
    // Update properties tab
    const propertiesTab = document.getElementById('properties-tab');
    const propertyList = propertiesTab.querySelector('.property-list');
    propertyList.innerHTML = '';
    
    player.ownedProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        
        propertyCard.innerHTML = `
            <div class="property-card-header" style="border-left-color: ${property.color}">
                <h5>${property.name}</h5>
            </div>
            <div class="property-card-body">
                <p>Value: $${property.value}</p>
                <p>${property.type ? `Type: ${property.type}` : `Houses: ${property.houses}`}</p>
                <p>Rent: ${typeof property.rent === 'number' ? '$' + property.rent : property.rent}</p>
            </div>
        `;
        
        propertyList.appendChild(propertyCard);
    });
    
    // Update transactions tab
    const transactionsTab = document.getElementById('transactions-tab');
    const transactionList = transactionsTab.querySelector('.transaction-list');
    transactionList.innerHTML = '';
    
    player.transactions.forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.className = 'transaction-item';
        
        transactionItem.innerHTML = `
            <div class="transaction-icon ${transaction.type}">
                <i class="fas fa-arrow-${transaction.type === 'income' ? 'up' : 'down'}"></i>
            </div>
            <div class="transaction-details">
                <div class="transaction-title">${transaction.title}</div>
                <div class="transaction-desc">${transaction.description}</div>
            </div>
            <div class="transaction-amount">${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount)}</div>
        `;
        
        transactionList.appendChild(transactionItem);
    });
    
    // Update stats tab
    const statsTab = document.getElementById('stats-tab');
    statsTab.innerHTML = `
        <h4>Game Statistics</h4>
        <div class="stat-cards">
            <div class="stat-card">
                <div class="stat-card-value">${player.gamesPlayed}</div>
                <div class="stat-card-label">Games Played</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${player.gamesWon}</div>
                <div class="stat-card-label">Games Won</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${Math.round((player.gamesWon / player.gamesPlayed) * 100)}%</div>
                <div class="stat-card-label">Win Rate</div>
            </div>
        </div>
        <div class="stat-cards">
            <div class="stat-card">
                <div class="stat-card-value">${player.stats.propertiesBought}</div>
                <div class="stat-card-label">Properties Bought</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${player.stats.housesBuilt}</div>
                <div class="stat-card-label">Houses Built</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${player.stats.hotelsBuilt}</div>
                <div class="stat-card-label">Hotels Built</div>
            </div>
        </div>
        <div class="stat-cards">
            <div class="stat-card">
                <div class="stat-card-value">$${player.stats.highestBalance}</div>
                <div class="stat-card-label">Highest Balance</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">${player.stats.timesInJail}</div>
                <div class="stat-card-label">Times in Jail</div>
            </div>
            <div class="stat-card">
                <div class="stat-card-value">$${player.stats.mostExpensivePurchase}</div>
                <div class="stat-card-label">Most Expensive Purchase</div>
            </div>
        </div>
    `;
    
    // Update avatar
    const avatarImg = document.querySelector('.large-avatar img');
    avatarImg.src = player.avatar;
    avatarImg.alt = player.name;
    
    // Display the default tab (properties)
    switchTab('properties', document.querySelector('.profile-tab[data-tab="properties"]'));
    
    // Show the modal
    profileModal.style.display = 'block';
}

// Close the player profile modal
function closeModal() {
    profileModal.style.display = 'none';
}

// Switch tabs in the player profile modal
function switchTab(tabId, tabElement) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.style.display = 'none';
    });
    
    // Show the selected tab content
    const selectedTab = document.getElementById(`${tabId}-tab`);
    if (selectedTab) {
        selectedTab.style.display = 'block';
    }
    
    // Update active tab styling
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (tabElement) {
        tabElement.classList.add('active');
    }
}

// Add a transaction to a player
function addTransaction(playerId, transaction) {
    const player = players.find(p => p.id === playerId);
    if (!player) return false;
    
    player.transactions.unshift(transaction);
    
    // Update balance
    player.balance += transaction.amount;
    
    // If the modal is open and showing this player, update the display
    if (profileModal.style.display === 'block' && 
        document.getElementById('playerName').textContent === player.name) {
        openModal(playerId); // Refresh the modal
    }
    
    // Update the player card in the grid
    renderPlayerCards(players);
    
    return true;
}

// Add a property to a player
function addProperty(playerId, property) {
    const player = players.find(p => p.id === playerId);
    if (!player) return false;
    
    player.ownedProperties.push(property);
    player.properties = player.ownedProperties.length;
    
    // If the modal is open and showing this player, update the display
    if (profileModal.style.display === 'block' && 
        document.getElementById('playerName').textContent === player.name) {
        openModal(playerId); // Refresh the modal
    }
    
    // Update the player card in the grid
    renderPlayerCards(players);
    
    return true;
}

// Remove a property from a player
function removeProperty(playerId, propertyName) {
    const player = players.find(p => p.id === playerId);
    if (!player) return false;
    
    const propertyIndex = player.ownedProperties.findIndex(p => p.name === propertyName);
    if (propertyIndex === -1) return false;
    
    player.ownedProperties.splice(propertyIndex, 1);
    player.properties = player.ownedProperties.length;
    
    // If the modal is open and showing this player, update the display
    if (profileModal.style.display === 'block' && 
        document.getElementById('playerName').textContent === player.name) {
        openModal(playerId); // Refresh the modal
    }
    
    // Update the player card in the grid
    renderPlayerCards(players);
    
    return true;
}

// Update a player's stats
function updatePlayerStats(playerId, statsUpdate) {
    const player = players.find(p => p.id === playerId);
    if (!player) return false;
    
    player.stats = { ...player.stats, ...statsUpdate };
    
    // If the modal is open and showing this player, update the display
    if (profileModal.style.display === 'block' && 
        document.getElementById('playerName').textContent === player.name) {
        openModal(playerId); // Refresh the modal
    }
    
    return true;
}

// Utility function to format currency
function formatCurrency(amount) {
    return '$' + amount.toLocaleString();
}

// Export functions for use in other JS files
window.openModal = openModal;
window.closeModal = closeModal;
window.addTransaction = addTransaction;
window.addProperty = addProperty;
window.removeProperty = removeProperty;
window.updatePlayerStats = updatePlayerStats;