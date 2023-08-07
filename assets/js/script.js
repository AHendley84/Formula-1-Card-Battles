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
    {driverName: "Esteban Ocon", teamName: "Alpine", nationality: "French", carNumber: 31, careerPodiums: 3, careerPoints: 395, gpEntered: 121, raceWins: 1, driverChampionships: 0, img1: 'ocon.png', img2: 'alpine.jpg'},
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

// Score variables for both

let playerScore = 0;
let computerScore = 0;

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
    assignCurrentCard();
    
};

// Assign a random card from the players and the computers deck 

function assignCurrentCard() {
    if (playerCards.length > 0 && computerCards.length > 0) {
    const playerCurrent = Math.floor((Math.random() * playerCards.length));
    const computerCurrent = Math.floor((Math.random() * computerCards.length));
        playerCardCurrent.push(playerCards.splice(playerCurrent, 1)[0]);
        computerCardCurrent.push(computerCards.splice(computerCurrent, 1)[0]);
    }
};

// Function to display driver and team image details on screen

const playerDriverImage = document.getElementById("player_driver_image");
const playerTeamImage = document.getElementById("player_team_image");
const computerDriverImage = document.getElementById("computer_driver_image");
const computerTeamImage = document.getElementById("computer_team_image");

function displayImages() {
    playerDriverImage.src = `assets/images/drivers/${playerCardCurrent[0].img1}`;
    playerTeamImage.src = `assets/images/team_logos/${playerCardCurrent[0].img2}`;
    computerDriverImage.src = `assets/images/drivers/${computerCardCurrent[0].img1}`;
    computerTeamImage.src = `assets/images/team_logos/${computerCardCurrent[0].img2}`;
};

//Variables and function to set player and computer driver stats

const playDriveName = document.getElementById("player_driver_name");
const playTeamName = document.getElementById("player_team_name");
const playCarNum = document.getElementById("players_car_number");
const playNat = document.getElementById("players_driver_nationality");
const playRace = document.getElementById("player_gp_value");
const playPoints = document.getElementById("player_points_value");
const playPodium = document.getElementById("player_podiums_value");
const playWins = document.getElementById("player_wins_value");
const playChamps = document.getElementById("player_champs_value");

const compDriveName = document.getElementById("computer_driver_name");
const compTeamName = document.getElementById("computer_team_name");
const compCarNum = document.getElementById("computer_car_number");
const compNat = document.getElementById("computer_driver_nationality");

function displayDriverStats() {
    //Player stats
    playDriveName.innerText = `${playerCardCurrent[0].driverName}`;
    playTeamName.innerText = `${playerCardCurrent[0].teamName}`;
    playCarNum.innerText = `${playerCardCurrent[0].carNumber}`;
    playNat.innerText = `${playerCardCurrent[0].nationality}`;
    playRace.innerText = `${playerCardCurrent[0].gpEntered}`;
    playPoints.innerText = `${playerCardCurrent[0].careerPoints}`;
    playPodium.innerText = `${playerCardCurrent[0].careerPodiums}`;
    playWins.innerText = `${playerCardCurrent[0].raceWins}`;
    playChamps.innerText = `${playerCardCurrent[0].driverChampionships}`;
    //computer stats
    compDriveName.innerText = `${computerCardCurrent[0].driverName}`;
    compTeamName.innerText = `${computerCardCurrent[0].teamName}`;
    compCarNum.innerText = `${computerCardCurrent[0].carNumber}`;
    compNat.innerText = `${computerCardCurrent[0].nationality}`;
}

// Variables for score display and round winner messages

const playerScoreDisplay = document.getElementById("player_score");
const computerScoreDisplay = document.getElementById("computer_score");
const roundWinnerDisplay = document.getElementById("round_message");

// Event listeners for the stat selection

player_gp_value.addEventListener("click", () => {
    compareStat("gpEntered");
});

player_points_value.addEventListener("click", () => {
    compareStat("careerPoints");
});

player_podiums_value.addEventListener("click", () => {
    compareStat("careerPodiums");
});

player_wins_value.addEventListener("click", () => {
    compareStat("raceWins");
});

player_champs_value.addEventListener("click", () => {
    compareStat("driverChampionships");
});

// Function to compare the selected stats

function compareStat(stat) {
    const playerStat = playerCardCurrent[0][stat];
    const compStat = computerCardCurrent[0][stat];

    switch(stat) {
        case "gpEntered":
        case "careerPoints":
        case "careerPodiums":
        case "raceWins":
        case "driverChampionships":    
            if (playerStat > compStat) {
                determineRoundWinner("player-win");
            } else if (compStat > playerStat){
                determineRoundWinner("computer-win");
            } else {
                determineRoundWinner("draw");
            }
        break;
    }
}

// Function to determine the winner of each round

function determineRoundWinner(outcome) {
    const playerWin = outcome === "player-win";
    const computerWin = outcome === "computer-win";
 
    if(playerWin) {
        playerScore+=1;
        playerScoreDisplay.textContent = `Player score: ${playerScore}`;

        playerCards.push(computerCardCurrent.splice(0,1)[0]);
        playerCards.push(playerCardCurrent.splice(0,1)[0]);
    } else if(computerWin) {
        computerScore+=1;
        computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

        computerCards.push(playerCardCurrent.splice(0,1)[0]);
        computerCards.push(computerCardCurrent.splice(0,1)[0]);
    } else {
        playerCards.push(playerCardCurrent.splice(0,1)[0]);
        computerCards.push(computerCardCurrent.splice(0,1)[0]);
    }

    const winnerText = playerWin ? "You" : "The Computer";
    const tieMessage = "This round is a tie!";
    const winnerMessage = `${winnerText} won this round`
   
    if(playerWin || computerWin) {
        roundWinnerDisplay.textContent = winnerMessage;
    } else {
        roundWinnerDisplay.textContent = tieMessage;
    }
    resetMessageDisplay();

    setTimeout( () => {roundWinnerDisplay.style.display = "none"}, 8000);
    playGame();
}

const resetMessageDisplay = () => roundWinnerDisplay.style.display = "inline-block";

 //The function to intitialise the game.
//function initialise() {
    //dealCards();
    //displayImages();
    //displayDriverStats();
    //assignCurrentCard();
//}

//function to play the game
function playGame() {
    dealCards();
    displayImages();
    displayDriverStats();
    if (playerCards.length < 20 && computerCards.length < 20) {
        assignCurrentCard();
        console.log(playerCards);
        console.log(computerCards);
        console.log(playerCardCurrent);
        console.log(computerCardCurrent);
        return
    }

    const playerGameWin = playerCards.length === 20;
    const computerGameWin = computerCards.length === 20;
    const winnerGameText = playerWin ? "You" : "The computer";
    const winnerGameMessage = `${winnerGameText} won the game`;

    if ( playerGameWin || computerGameWin ) {
        roundWinnerDisplay.textContent = winnerGameMessage;
    }

}

playGame();