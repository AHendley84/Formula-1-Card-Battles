// Driver Card Deck

const driverCardDeck = [
    {driverName: "Max Verstappen", teamName: "Red Bull Racing", nationality: "Dutch", carNumber: 1, careerPodiums: 87, careerPoints: 2266.5, gpEntered: 173, raceWins: 43, driverChampionships: 2, img1: 'verstappen.png', img2: 'redbull.jpg'},
    {driverName: "Sergio Perez", teamName: "Red Bull Racing", nationality: "Mexican", carNumber: 11, careerPodiums: 31, careerPoints: 1357, gpEntered: 246, raceWins: 6, driverChampionships: 0, img1: 'perez.png', img2: 'redbull.jpg'},
    {driverName: "Lewis Hamilton", teamName: "Mercedes", nationality: "British", carNumber: 44, careerPodiums: 195, careerPoints: 4526.5, gpEntered: 320, raceWins: 103, driverChampionships: 7, img1: 'hamilton.png', img2: 'mercedes.jpg'},
    {driverName: "George Russell", teamName: "Mercedes", nationality: "British", carNumber: 63, careerPodiums: 10, careerPoints: 376, gpEntered: 92, raceWins: 1, driverChampionships: 0, img1: 'russell.png', img2: 'mercedes.jpg'},
    {driverName: "Charles Leclerc", teamName: "Ferrari", nationality: "Monegasque", carNumber: 16, careerPodiums: 26, careerPoints: 942, gpEntered: 113, raceWins: 5, driverChampionships: 0, img1: 'leclerc.png', img2: 'ferrari.jpg'},
    {driverName: "Carlos Sainz", teamName: "Ferrari", nationality: "Spanish", carNumber: 55, careerPodiums: 15, careerPoints: 865.5, gpEntered: 173, raceWins: 1, driverChampionships: 0, img1: 'sainz.png', img2: 'ferrari.jpg'},
    {driverName: "Fernando Alonso", teamName: "Aston Martin", nationality: "Spanish", carNumber: 14, careerPodiums: 104, careerPoints: 2198, gpEntered: 368, raceWins: 32, driverChampionships: 2, img1: 'alonso.png', img2: 'aston_martin.jpg',},
    {driverName: "Lance Stroll", teamName: "Aston Martin", nationality: "Canadian", carNumber: 18, careerPodiums: 3, careerPoints: 238, gpEntered: 132, raceWins: 0, driverChampionships: 0, img1: 'stroll.png', img2: 'aston_martin.jpg'},
    {driverName: "Lando Norris", teamName: "McLaren", nationality: "British", carNumber: 4, careerPodiums: 7, careerPoints: 470, gpEntered: 92, raceWins: 0, driverChampionships: 0, img1: 'norris.png', img2: 'mclaren.jpg'},
    {driverName: "Oscar Piastri", teamName: "McLaren", nationality: "Australian", carNumber: 81, careerPodiums: 0, careerPoints: 17, gpEntered: 10, raceWins: 0, driverChampionships: 0, img1: 'piastri.png', img2: 'mclaren.jpg'},
    {driverName: "Esteban Ocon", teamName: "Alpine", nationality: "French", carNumber: 31, careerPodiums: 3, careerPoints: 395, gpEntered: 121, raceWins: 1, driverChampionships: 3, img1: 'ocon.png', img2: 'alpine.jpg'},
    {driverName: "Pierre Gasly", teamName: "Alpine", nationality: "French", carNumber: 10, careerPodiums: 3, careerPoints: 348, gpEntered: 118, raceWins: 1, driverChampionships: 0, img1: 'gasly.png', img2: 'alpine.jpg'},
    {driverName: "Alexander Albon", teamName: "Williams", nationality: "Thai", carNumber: 23, careerPodiums: 2, careerPoints: 212, gpEntered: 69, raceWins: 0, driverChampionships: 0, img1: 'albon.png', img2: 'williams.jpg'},
    {driverName: "Logan Sargeant", teamName: "Williams", nationality: "American", carNumber: 2, careerPodiums: 0, careerPoints: 0, gpEntered: 10, raceWins: 0, driverChampionships: 0, img1: 'sargeant.png', img2: 'williams.jpg'},
    {driverName: "Valterri Bottas", teamName: "Alfa Romeo", nationality: "Finnish", carNumber: 77, careerPodiums: 67, careerPoints: 1792, gpEntered: 210, raceWins: 10, driverChampionships: 0, img1: 'bottas.png', img2: 'alfa_romeo.jpg'},
    {driverName: "Zhou Guanyu", teamName: "Alfa Romeo", nationality: "Chinese", carNumber: 24, careerPodiums: 0, careerPoints: 10, gpEntered: 32, raceWins: 0, driverChampionships: 0, img1: 'zhou.png', img2: 'alfa_romeo.jpg'},
    {driverName: "Nico Hulkenberg", teamName: "Haas F1 Team", nationality: "German", carNumber: 27, careerPodiums: 0, careerPoints: 530, gpEntered: 194, raceWins: 0, driverChampionships: 0, img1: 'hulkenberg.png', img2: 'haas.jpg'},
    {driverName: "Kevin Magnussesn", teamName: "Haas F1 Team", nationality: "Danish", carNumber: 20, careerPodiums: 1, careerPoints: 185, gpEntered: 152, raceWins: 2, driverChampionships: 0, img1: 'magnussen.png', img2: 'haas.jpg'},
    {driverName: "Yuki Tsunoda", teamName: "AlphaTauri", nationality: "Japanese", carNumber: 22, careerPodiums: 0, careerPoints: 46, gpEntered: 54, raceWins: 0, driverChampionships: 0, img1: 'tsunoda.png', img2: 'alpha_tauri.jpg'},
    {driverName: "Daniel Ricciardo", teamName: "AlphaTauri", nationality: "Australian", carNumber: 3, careerPodiums: 32, careerPoints: 1311, gpEntered: 232, raceWins: 8, driverChampionships: 0, img1: 'ricciardo.png', img2: 'alpha_tauri.jpg'}
];

// Player and computer card variables with empty objects

const playerCards = [];
const computerCards = [];

// Variable object for the current card in play

const playerCardCurrent = [];
const computerCardCurrent = [];


/**
 * Function to randomly assign 10 cards each to the player and the computer
 */

function dealCards() {
    const cardDeckLength = driverCardDeck.length;
    let playerCardCount = 0;
    let computerCardCount = 0;

    for (let i = cardDeckLength; i > 0; i--) {
        let cardIndex = Math.floor(Math.random() * i);
        let randomCard = driverCardDeck.splice(cardIndex, 1);

        if (playerCardCount > computerCardCount) {
            computerCards.push(randomCard[0]);
            computerCardCount +=1;
        } else if (playerCardCount === computerCardCount) {
            playerCards.push(randomCard[0]);
            playerCardCount +=1;
        };
    };
    
};

// Assign a random card from the players and the computers deck 

function assignCurrentCard() {
    const playerCurrent = Math.floor((Math.random() * playerCards.length));
    const computerCurrent = Math.floor((Math.random() * computerCards.length));

    playerCardCurrent.push(playerCards.splice(playerCurrent, 1)[0]);
    computerCardCurrent.push(computerCards.splice(computerCurrent, 1)[0]);

}

function cardDisplay() {
    
}

/**
 * The function to run the game and it's sub-functions.
 */
function playGame() {
    dealCards();
    assignCurrentCard();
    cardDisplay();
}

playGame();