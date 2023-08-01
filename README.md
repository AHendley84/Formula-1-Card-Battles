# Formula 1 Card Battles
## Interactive Front End Development Project

For my second project I am creating a Top Trumps style game using the 2023 Formula 1 championships drivers and teams.

---
## User Experience (UX) & Design
---
### User Stories

### Color Scheme

### Typography
Google Fonts was used to import the 'Russo One' and the 'Exo 2' fonts into the style.css file.

### Wireframes

---
## Features
---

---
## Technologies Used
---
### Languages Used
- [HTML5]()
- [CSS]()
- [JavaScript]()

### Frameworks, Libraries and Programs Used
- [Balsamiq](https://balsamiq.com/) was used for pre-visualisation of the pages.
- [Google Fonts](https://fonts.google.com/) was used to import the the 'Russo One' and 'Exo 2' fonts into the style.css file.
- [Font Awesome](https://fontawesome.com/) was utilised for icons used on the site for the social media icons.
- [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/) was used for responsive grids, table and button elements.
- [Git](https://git-scm.com/) was used for version control. I utilised the CLI terminal in GitPod & codeanywhere to commit and push to GitHub.
- [GitPod](https://gitpod.io) was used as the cloud based enviroment based on VS Code to develop the site.
- [codeanywhere](https://www.codeanywhere.com) was also used as the cloud based enviroment based on VS Code to develop the site.
- [GitHub](https://github.com/) was used as the repository for the project after being pushed from GitPod.
- [Google Maps](https://www.google.com/maps) for the business location map.
- [TinyPNG](https://tinypng.com/) used for image compression.

---
## Testing
---
### Validator Testing
#### HTML
HTML Markup Validator results:

#### CSS

### Browser Compatibility

### Manual Testing and Results

### User Story Testing

### Lighthouse Test

### Resposiveness

### Bugs
- Bug 1 - Nationality on the active computer card was displaying a number
Issue: 
```
compNat.innerText = `${computerCardCurrent[0].driverChampionships}`;
```
The above line of code was pointing to the number of drivers championships rather than the nationality.
Fix:
```
compNat.innerText = `${computerCardCurrent[0].nationality}`;
```
Amending the code to look at the nationality inside the active card object resolved the issue.

### Unfixed Bugs

---
## Deployment
---
### How the site was deployed

---
## Credits & Acknowledgments
---
- Driver and Team Logo images courtsey of skysports.com.
- Driver stats and information courtsey of Formula1.com.
- Image used in 404.html courtesy of [CNN.com](https://edition.cnn.com/2018/08/30/motorsport/formula-one-crashes-defined-sport-halo-spt-intl/index.html).
- Thanks to [Stack Overflow](https://stackoverflow.com/questions/4919076/outline-effect-to-text) for help on applying the text-shadow to the text on the 404 page.