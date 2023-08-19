# Formula 1 Card Battles
## Interactive Front End Development Project

For my second project I am creating a Top Trumps style game using the 2023 Formula 1 championships drivers and teams. The game involves a deck of 20 cards representing each current driver from the 10 teams that represent the Formula 1 world championship. The aim is to reduce your opponent’s cards pile to zero. If this is achieved the player will be notified that they have won, however, if the computer obtains all their cards they will be notified of their loss.

![Visual Representation](documentation/responsive_representation.png)

---
## User Experience (UX) & Design
---
### User Stories
- First Time Visitor

    - As a first time visitor,  I want to get to understand the main purpose of the site.
    - As a first time visitor,  I want to receive feedback on how I'm progressing in the game.
    - As a first time visitor,  I want to know if I've won or lost the game.

- Returning Visitor

    - As a returning visitor, I want to be able to quickly jump back into another game if I've won or lost.
    - As a returning visitor, I want to be notified if I have tried to access a page that does not exist.

- Website Administrator

    - As a website administrator, I want to provide links to my social media channels.

### Color Scheme
The colors selected for the color palette are colors that are usually associated with Formula One:
- Red for the lights out signal to start the race.
- White and black for the chequered flag and green
- Yellow to indicate to drivers if there is caution ahead
- Green to dictate that normal racing can resume.

![Color Palette](documentation/color_scheme.png)


### Typography
Google Fonts was used to import the 'Russo One' and the 'Exo 2' fonts into the style.css file for use across all pages.

### Wireframes
Each link contains wireframes for mobile, tablet and desktop.
- [Home/Index](documentation/wireframes/Index.png)
- [Game Page](documentation/wireframes/Game.png)
- [Player Win Page](documentation/wireframes/Player%20Win.png)
- [Computer Win Page](documentation/wireframes/Computer%20Win.png)
- [404 Page Page](documentation/wireframes/404.png)
---
## Features
---
### Index/Home Page
The Index/Home Page is the introduction to the game that provides an explanation on how to play, how the cards are dealt and what you need to win the game.

![Index/Home page image](documentation/features/index_page.png)
### Footer
The footer is present on each page and provides links to my social media profiles.

![Footer image](documentation/features/footer.png)
### Game Page
The game page is where all the elements come together for the game to be played out.

![Game page image](documentation/features/game_page.png)
### Card Table
The card table comprises of the active card for the player and the computer and also contains the scorecard and game progress message board.

![Card table image](documentation/features/card_table.png)
### Scorecard and game progress message board.
The score card displays the number of card held by the player and the computer. The message board displays an initital message to confirm the game has started and will then display who won the previous round or if it was a tie.

![Score card and message board image](documentation/features/scoreboard_messageboard.png)
### Player / Computer Win Pages
Two individual pages to tell the player if they have won or if the computer has one. There is a button on each page to take you back into the game to play another round!

![Player win page image](documentation/features/player_win.png)
![Computer win page image](documentation/features/computer_win.png)
### 404 Page
A custom 404 page has been created and assigned via GitHub to load whenever a non-existent page is requested.

![404 page image](documentation/features/404.png)
---
## Technologies Used
---
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used
- [Balsamiq](https://balsamiq.com/) was used for pre-visualisation of the pages.
- [Google Fonts](https://fonts.google.com/) was used to import the the 'Russo One' and 'Exo 2' fonts into the style.css file.
- [Font Awesome](https://fontawesome.com/) was utilised for icons used on the site for the social media icons.
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) was used for responsive grids, table and button elements.
- [Git](https://git-scm.com/) was used for version control. I utilised the CLI terminal in GitPod & codeanywhere to commit and push to GitHub.
- [Visual Studio Code](https://code.visualstudio.com/) was used as the development enviroment to develop the site.
- [GitHub](https://github.com/) was used as the repository for the project after being pushed from GitPod.
- [TinyPNG](https://tinypng.com/) used for image compression.
- [Adobe Color](https://color.adobe.com/create/color-wheel) used to produce the color palette image in the README.

---
## Testing
---
### Validator Testing
#### HTML
HTML Markup Validator results:
- [index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2Findex.html)
- [game.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2Fgame.html)
- [player_win.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2Fplayer_win.html)
- [computer_win.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2Fcomputer_win.html)
- [404.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2F404.html)


#### CSS
- [CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fahendley84.github.io%2FFormula-1-Card-Battles%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)


#### JavaScript
- The JavaScript used in this project has been tested on both [JSLint](https://www.jslint.com/) and [JSHint](https://jshint.com/) with no concerns.


### Browser Compatibility
The site has been tested on the following browsers (latest builds as of 18/08/2023):
- Google Chrome version Version 116.0.5845.96 (Official Build) (64-bit)
- Mozilla Firefox Version 116.0.3 (64-bit)
- Microsoft Edge Version 115.0.1901.203 (Official build) (64-bit)
- Apple Safari (Latest build on iOS 16.6)

### Manual Testing and Results
Here is a table of the manual testing done on the site to determine if all features work as described and designed:

|Feature Tested|Required Action|Expected Outcome|Result|
|---|---|---|---|
|Social media links (all pages)|Click the Facebook, Instagram and LinkedIn icons in the footer|Links should direct to social media channels in a new window|Social media channels load successfully|
|Play Game button(index page)|Click the green button labelled 'Play Game'|This should load the game.html page and the game starts|Game.html loads and the game starts|
|Player option inputs highlight on mouse over (game page)|Place the cursor over one of the 5 stats for the player to choose from|The 5 stats in yellow background highlights in red when the pointer moves over them|Background changes colour on placing the cursor on them|
|Player and Computer card count changes (game page)|Select and click on one of the player cards stats|If Player wins the round, card increases by one and Computer's decreases by 1 and vice versa. If stat selected is same between both the scores remain the same|Card count increases and decreases as expected|
|Message board (game page)|Select and click on one of the player cards stats|Upon selecting a stat the message board will change to advise if the round was won by the player, computer or was a tie|Message borad correctly displays win, lose or tie message|
|Game successfully completes (game page)|Play the game to completion|The Player or the Computer hold all 20 cards. If the palyer has all 20 the player_win.html page is displayed. If the Computer holds all cards then the computer_win.html page is displayed|Both pages display accordingly|
|Play Again button (player_win and computer_win pages)|Click the 'Play Again' button|Player is taken back to the game page and a new game begins|Page displays accordingly in both instances|
|Custom 404 error page (404 page)|Remove a letter from one of the pages to point towards an item that does not exist|As the item does not exist the custom 404 Error page should load with a button to take you back to the game|Page loads correctly and redirection button works|

### User Story Testing

### Lighthouse Test

### Resposiveness

### Bugs
|Bug Number|Expected|Actual|Fix|
|---|---|---|---|
|Bug 1|Nationality should display the drivers Nationality|Nationality on the active computer card was displaying a number|The code was pointing to the number of drivers championships rather than the nationality. Amending the code to look at the nationality inside the active card object resolved the issue|
|Bug 2|The game function should continue until either the computer or the player has all 20 cards|After approximately 10 games the game would stop unexpectedly and the console would display 'Uncaught TypeError: Cannot read properties of undefined (reading 'img1')'|I reached out to the #project-milestone-2 channel for some guidance. After some initial guidance from Joy Zadan I was able to resolve the issue by moving the displayImages and displayDriverStats into the assignCurrentCard function. I was then able to further improve the code with the help of Joy Zadan to a length check of the playerCards and currentCards to ensure they were greater than zero before assigning the next random card available|
|Bug 3|The message and score boards should remain in their own separate containers|Overlapping text between the message board and the scoreboard|the height of the message board container had been set to 30px. I changed this to the minimum height which resolved the issue|
### Unfixed Bugs

---
## Deployment
---
### How the site was deployed

---
## Credits & Acknowledgments
---
- Massive thank you to [astral-g](https://github.com/astral-g) for his [Top Trumps Game](https://github.com/astral-g/Top-Trumps-Game) which allowed me to base and modify my own game on.
- Driver and Team Logo images courtsey of skysports.com.
- Driver stats and information courtsey of Formula1.com.
- Carbon fibre background image courtsey of [Freepik.com](https://www.freepik.com/free-photos-vectors/carbon-fibre-texture).
- Background image used in 404.html courtesy of [CNN.com](https://edition.cnn.com/2018/08/30/motorsport/formula-one-crashes-defined-sport-halo-spt-intl/index.html).
- Background image used in player_win.html courtsey of [topgear.com](https://www.topgear.com/car-news/motorsport/tgs-five-favourite-f1-podium-celebrations).
- Background image used in computer_win.html courtsey of [autosport.com](https://www.autosport.com/f1/news/lauda-slams-sabotage-talk-after-hamiltons-malaysian-gp-failure-5033191/5033191/).
- Thanks to [Stack Overflow](https://stackoverflow.com/questions/4919076/outline-effect-to-text) for help on applying the text-shadow to the text on the 404, Player Win and Computer Win pages.
- Credit to [W3 Schools](https://www.w3schools.com/jsref/prop_style_cursor.asp) for the cursor change property guidance.
- Thanks to [GitHub](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) for this handy guide to adding your own custom 404 page.
- Thank you to [Joy Zadan on Slack](https://code-institute-room.slack.com/archives/C7HD37Q1F/p1691322584027999) for resolving the second bug identified in my JavaScript.