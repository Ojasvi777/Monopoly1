/**
 * College Monopoly Championship - Dashboard JavaScript
 * This file handles all the interactive functionality for the game dashboard
 */

document.addEventListener('DOMContentLoaded', function() {
    // ---------- GAME STATE VARIABLES ----------
    let gameState = {
        currentPlayerIndex: 0,
        players: [
            { id: 1, name: "John Doe", cash: 1500, netWorth: 2850, properties: 5, inJail: false },
            { id: 2, name: "Sarah Johnson", cash: 1280, netWorth: 2300, properties: 3, inJail: false },
            { id: 3, name: "Michael Brown", cash: 800, netWorth: 1500, properties: 2, inJail: true },
            { id: 4, name: "Emily Chen", cash: 2150, netWorth: 3200, properties: 4, inJail: false }
        ],
        dice: { dice1: 1, dice2: 1 },
        activityLog: []
    };

    // ---------- DOM ELEMENT REFERENCES ----------
    // Game Actions
    const rollDiceBtn = document.getElementById('rollDice');
    const endTurnBtn = document.getElementById('endTurn');
    const payJailBtn = document.getElementById('payJail');
    
    // Quick Actions
    const newTransactionBtn = document.getElementById('newTransaction');
    const viewPropertiesBtn = document.getElementById('viewProperties');
    const tradeOfferBtn = document.getElementById('tradeOffer');
    const drawCardBtn = document.getElementById('drawCard');

    // Transaction Modal
    const transactionModal = document.getElementById('transactionModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const transactionForm = document.getElementById('transactionForm');

    // ---------- EVENT LISTENERS ----------
    // Game Action Buttons
    rollDiceBtn.addEventListener('click', handleRollDice);
    endTurnBtn.addEventListener('click', handleEndTurn);
    payJailBtn.addEventListener('click', handlePayJail);
    
    // Quick Action Buttons
    newTransactionBtn.addEventListener('click', openTransactionModal);
    viewPropertiesBtn.addEventListener('click', redirectToProperties);
    tradeOfferBtn.addEventListener('click', handleTradeOffer);
    drawCardBtn.addEventListener('click', handleDrawCard);
    
    // Modal Controls
    closeModalBtn.addEventListener('click', closeTransactionModal);
    transactionForm.addEventListener('submit', handleTransaction);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === transactionModal) {
            closeTransactionModal();
        }
    });

    // ---------- INITIALIZATION ----------
    initializeDashboard();

    // ---------- FUNCTION IMPLEMENTATIONS ----------
    
    /**
     * Initialize the dashboard with current game state
     */
    function initializeDashboard() {
        updateCurrentPlayerDisplay();
        updatePlayerList();
        
        // Check if current player is in jail and update UI accordingly
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        updateJailStatus(currentPlayer.inJail);
        
        // Load activity log from local storage or use default
        loadActivityLog();
    }

    /**
     * Update the current player display area
     */
    function updateCurrentPlayerDisplay() {
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        
        // Update current player info
        document.querySelector('.current-player h2').textContent = currentPlayer.name;
        document.querySelector('.balance').textContent = `$${currentPlayer.cash}`;
        document.querySelector('.stat:nth-child(2) p').textContent = `${currentPlayer.properties} Properties`;
        document.querySelector('.stat:nth-child(3) p').textContent = `$${currentPlayer.netWorth}`;
    }

    /**
     * Update the player list sidebar
     */
    function updatePlayerList() {
        const playerItems = document.querySelectorAll('.player');
        
        playerItems.forEach((playerItem, index) => {
            // Update player cash amount
            playerItem.querySelector('.player-cash').textContent = `$${gameState.players[index].cash}`;
            
            // Add/remove active class based on current player
            playerItem.classList.toggle('active', index === gameState.currentPlayerIndex);
            
            // Show/hide "Current Turn" indicator
            const turnIndicator = playerItem.querySelector('.player-turn-indicator');
            if (turnIndicator) {
                turnIndicator.style.display = index === gameState.currentPlayerIndex ? 'block' : 'none';
            }
            
            // Update jail status
            const jailStatus = playerItem.querySelector('.player-status.jail');
            if (jailStatus) {
                jailStatus.style.display = gameState.players[index].inJail ? 'block' : 'none';
            }
        });
    }

    /**
     * Update the jail status UI
     * @param {boolean} inJail - Whether the current player is in jail
     */
    function updateJailStatus(inJail) {
        payJailBtn.style.display = inJail ? 'block' : 'none';
        
        // Disable/enable roll dice button based on jail status
        rollDiceBtn.disabled = inJail;
        rollDiceBtn.classList.toggle('disabled', inJail);
    }

    /**
     * Handle the roll dice action
     */
    function handleRollDice() {
        // Generate random dice values
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        gameState.dice = { dice1, dice2 };
        
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        const diceTotal = dice1 + dice2;
        const isDoubles = dice1 === dice2;
        
        // Add to activity log
        addActivity(`${currentPlayer.name} rolled ${dice1} and ${dice2} (total: ${diceTotal})${isDoubles ? ' - Doubles!' : ''}`);
        
        // Show dice result in a temporary popup
        showDiceResult(dice1, dice2);
        
        // In a real implementation, we would move the player's token and handle the landing spot
        // For this demo, we'll just show a message
        setTimeout(() => {
            alert(`You rolled ${diceTotal}! In a complete implementation, your token would move to the appropriate space.`);
        }, 1000);
    }

    /**
     * Display dice roll results
     * @param {number} dice1 - First die value
     * @param {number} dice2 - Second die value
     */
    function showDiceResult(dice1, dice2) {
        // Create dice result display
        const diceDisplay = document.createElement('div');
        diceDisplay.className = 'dice-result';
        diceDisplay.innerHTML = `
            <div class="die die-${dice1}"><span>${dice1}</span></div>
            <div class="die die-${dice2}"><span>${dice2}</span></div>
            <p>Total: ${dice1 + dice2}</p>
        `;
        
        // Add to the main board
        document.querySelector('.main-board').appendChild(diceDisplay);
        
        // Remove after animation
        setTimeout(() => {
            diceDisplay.classList.add('fade-out');
            setTimeout(() => diceDisplay.remove(), 1000);
        }, 2000);
    }

    /**
     * Handle the end turn action
     */
    function handleEndTurn() {
        // Move to next player
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
        const nextPlayer = gameState.players[gameState.currentPlayerIndex];
        
        // Add to activity log
        addActivity(`Turn ended. It's now ${nextPlayer.name}'s turn`);
        
        // Update UI
        updateCurrentPlayerDisplay();
        updatePlayerList();
        updateJailStatus(nextPlayer.inJail);
    }

    /**
     * Handle paying to get out of jail
     */
    function handlePayJail() {
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        
        // Deduct $50 from player's cash
        currentPlayer.cash -= 50;
        currentPlayer.netWorth -= 50;
        currentPlayer.inJail = false;
        
        // Add to activity log
        addActivity(`${currentPlayer.name} paid $50 to get out of jail`);
        
        // Update UI
        updateCurrentPlayerDisplay();
        updatePlayerList();
        updateJailStatus(false);
    }

    /**
     * Open the transaction modal
     */
    function openTransactionModal() {
        // Reset form fields
        document.getElementById('amount').value = 100;
        document.getElementById('reason').value = '';
        
        // Show modal
        transactionModal.style.display = 'flex';
    }

    /**
     * Close the transaction modal
     */
    function closeTransactionModal() {
        transactionModal.style.display = 'none';
    }

    /**
     * Handle a new transaction
     * @param {Event} event - Form submit event
     */
    function handleTransaction(event) {
        event.preventDefault();
        
        const transactionType = document.getElementById('transactionType').value;
        const recipient = document.getElementById('recipient').value;
        const amount = parseInt(document.getElementById('amount').value);
        const reason = document.getElementById('reason').value;
        
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        
        // Find recipient player index if not bank
        let recipientIndex = -1;
        if (recipient !== 'bank') {
            recipientIndex = gameState.players.findIndex(p => p.id === parseInt(recipient.replace('player', '')));
        }
        
        // Handle transaction based on type
        if (transactionType === 'payment') {
            // Check if player has enough money
            if (currentPlayer.cash < amount) {
                alert("You don't have enough money for this transaction!");
                return;
            }
            
            // Deduct from current player
            currentPlayer.cash -= amount;
            currentPlayer.netWorth -= amount;
            
            // Add to recipient if it's a player
            if (recipientIndex >= 0) {
                gameState.players[recipientIndex].cash += amount;
                gameState.players[recipientIndex].netWorth += amount;
                
                addActivity(`${currentPlayer.name} paid $${amount} to ${gameState.players[recipientIndex].name}${reason ? ` for ${reason}` : ''}`);
            } else {
                addActivity(`${currentPlayer.name} paid $${amount} to the Bank${reason ? ` for ${reason}` : ''}`);
            }
        } else if (transactionType === 'collect') {
            // Add to current player
            currentPlayer.cash += amount;
            currentPlayer.netWorth += amount;
            
            // Deduct from player if not bank
            if (recipientIndex >= 0) {
                if (gameState.players[recipientIndex].cash < amount) {
                    alert(`${gameState.players[recipientIndex].name} doesn't have enough money!`);
                    return;
                }
                
                gameState.players[recipientIndex].cash -= amount;
                gameState.players[recipientIndex].netWorth -= amount;
                
                addActivity(`${currentPlayer.name} collected $${amount} from ${gameState.players[recipientIndex].name}${reason ? ` for ${reason}` : ''}`);
            } else {
                addActivity(`${currentPlayer.name} collected $${amount} from the Bank${reason ? ` for ${reason}` : ''}`);
            }
        } else if (transactionType === 'fine') {
            // Check if player has enough money
            if (currentPlayer.cash < amount) {
                alert("You don't have enough money to pay this fine!");
                return;
            }
            
            // Deduct from current player
            currentPlayer.cash -= amount;
            currentPlayer.netWorth -= amount;
            
            addActivity(`${currentPlayer.name} paid a fine of $${amount}${reason ? ` for ${reason}` : ''}`);
        }
        
        // Update UI
        updateCurrentPlayerDisplay();
        updatePlayerList();
        
        // Close modal
        closeTransactionModal();
    }

    /**
     * Redirect to properties page for the current player
     */
    function redirectToProperties() {
        // In a real implementation, this would use the player ID
        window.location.href = `properties.html?player=${gameState.currentPlayerIndex + 1}`;
    }

    /**
     * Handle trade offer action
     */
    function handleTradeOffer() {
        alert("Trade offer functionality would open a more complex form allowing players to exchange properties and money. This would be implemented in a future version.");
    }

    /**
     * Handle drawing a Chance or Community Chest card
     */
    function handleDrawCard() {
        // Sample cards - in a real implementation, this would be a larger array with more varied effects
        const cards = [
            { type: "Chance", text: "Advance to GO. Collect $200.", action: "collect", amount: 200 },
            { type: "Chance", text: "Bank pays you dividend of $50.", action: "collect", amount: 50 },
            { type: "Chance", text: "Pay poor tax of $15.", action: "pay", amount: 15 },
            { type: "Community Chest", text: "From sale of stock you get $45.", action: "collect", amount: 45 },
            { type: "Community Chest", text: "Doctor's fee. Pay $50.", action: "pay", amount: 50 },
            { type: "Community Chest", text: "Holiday fund matures. Collect $100.", action: "collect", amount: 100 }
        ];
        
        // Select random card
        const card = cards[Math.floor(Math.random() * cards.length)];
        const currentPlayer = gameState.players[gameState.currentPlayerIndex];
        
        // Apply card effect
        if (card.action === "collect") {
            currentPlayer.cash += card.amount;
            currentPlayer.netWorth += card.amount;
        } else if (card.action === "pay") {
            currentPlayer.cash -= card.amount;
            currentPlayer.netWorth -= card.amount;
        }
        
        // Add to activity log
        addActivity(`${currentPlayer.name} drew a ${card.type} card: "${card.text}"`);
        
        // Update UI
        updateCurrentPlayerDisplay();
        
        // Show card in a popup
        alert(`${card.type} Card: ${card.text}`);
    }

    /**
     * Add an activity to the game log
     * @param {string} text - Activity text
     */
    function addActivity(text) {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        // Create activity object
        const activity = {
            time: timeString,
            text: text,
            timestamp: now.getTime()
        };
        
        // Add to beginning of array
        gameState.activityLog.unshift(activity);
        
        // Limit to 20 most recent activities
        if (gameState.activityLog.length > 20) {
            gameState.activityLog.pop();
        }
        
        // Save to localStorage
        saveActivityLog();
        
        // Update UI
        updateActivityFeed();
    }

    /**
     * Update the activity feed in the UI
     */
    function updateActivityFeed() {
        const activityFeed = document.querySelector('.activity-feed');
        activityFeed.innerHTML = '';
        
        gameState.activityLog.forEach(activity => {
            const li = document.createElement('li');
            li.className = 'activity-item';
            li.innerHTML = `
                <span class="activity-time">${activity.time}</span>
                <span class="activity-text">${activity.text}</span>
            `;
            activityFeed.appendChild(li);
        });
    }

    /**
     * Save activity log to localStorage
     */
    function saveActivityLog() {
        localStorage.setItem('monopolyActivityLog', JSON.stringify(gameState.activityLog));
    }

    /**
     * Load activity log from localStorage
     */
    function loadActivityLog() {
        const savedLog = localStorage.getItem('monopolyActivityLog');
        
        if (savedLog) {
            gameState.activityLog = JSON.parse(savedLog);
        } else {
            // Default log if none exists
            gameState.activityLog = [
                { time: "2:45 PM", text: "<strong>Sarah</strong> bought Park Place for $350", timestamp: Date.now() - 1000 },
                { time: "2:42 PM", text: "<strong>John</strong> paid $200 rent to <strong>Michael</strong>", timestamp: Date.now() - 2000 },
                { time: "2:40 PM", text: "<strong>Michael</strong> drew a Chance card: \"Advance to Go\"", timestamp: Date.now() - 3000 },
                { time: "2:38 PM", text: "<strong>Sarah</strong> rolled doubles and moved to Boardwalk", timestamp: Date.now() - 4000 },
                { time: "2:35 PM", text: "<strong>Emily</strong> collected $200 for passing GO", timestamp: Date.now() - 5000 },
                { time: "2:33 PM", text: "<strong>John</strong> paid $150 to get out of jail", timestamp: Date.now() - 6000 },
                { time: "2:30 PM", text: "<strong>Michael</strong> landed on Income Tax and paid $200", timestamp: Date.now() - 7000 },
                { time: "2:28 PM", text: "<strong>Sarah</strong> built a house on St. James Place", timestamp: Date.now() - 8000 }
            ];
        }
        
        updateActivityFeed();
    }

    /**
     * Save game state to localStorage
     * Only called for important changes to ensure persistence
     */
    function saveGameState() {
        localStorage.setItem('monopolyGameState', JSON.stringify({
            currentPlayerIndex: gameState.currentPlayerIndex,
            players: gameState.players
        }));
    }

    /**
     * Load game state from localStorage
     */
    function loadGameState() {
        const savedState = localStorage.getItem('monopolyGameState');
        
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            gameState.currentPlayerIndex = parsedState.currentPlayerIndex;
            gameState.players = parsedState.players;
        }
    }

    // Initialize dice animation CSS
    function initializeDiceStyles() {
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .dice-result {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                border-radius: 10px;
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 100;
                animation: bounceIn 0.5s;
            }
            
            .dice-result.fade-out {
                animation: fadeOut 1s;
            }
            
            .dice-result .die {
                width: 60px;
                height: 60px;
                background: white;
                border: 2px solid #222;
                border-radius: 10px;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
            }
            
            @keyframes bounceIn {
                0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
                100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }
            
            @keyframes fadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; }
            }
        `;
        document.head.appendChild(styleElement);
    }

    // Initialize styles
    initializeDiceStyles();
    
    // Try to load saved game state on initialization
    loadGameState();
});