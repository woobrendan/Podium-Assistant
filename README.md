# Podium-Assistant
Podium Assistant was created with the intention of easing post race podium activities for SRO Motorsports America races. Near the end of races, my team and I work to set up podiums which includes trophies, champagne, hats for TV interviews and more. Within this short time period, we also need to listen to race control to get final race results and write out this information for our announcer. This script includes, top 3 drivers, their teams, vehicles and the fast lap winner. 

Podium Assistant allows the user to select which Series is racing which filters out the appropriate classes and drivers for that series. From there the podium information can be collected and once all is submitted, a table with the results is returned and ready to be read by the podium announcer.

## SRO Motorsports America

YouTube: [GT World](https://www.youtube.com/gtworld)  
[Website](https://www.gt-world-challenge-america.com/)  
[Instagram](https://www.instagram.com/gtworldchallengeamerica/?hl=en)  

### Disclaimer
This app is a work in progress and not yet complete and is currently set up for basic functionality to be used on-site during races.

Driver data right now is currently hard coded with the information, with future intention to move to a working database and the ability to add/delete/edit drivers/entries.

## Set-Up
From within the `podium-helper` folder:

1. Run `npm install` to install dependencies
2. Run `npm start` to start app

## Creating New Podiums
![Create New Podium](https://github.com/woobrendan/Podium-Assistant/blob/main/podium-helper/public/docs/podium_creation.gif?raw=true)

## Competitors

The competitors page displays all of the competitors in SRO Motorsports America competition, dynamically changing their background colour based on the series they are entered in.

![Competitors](https://github.com/woobrendan/Podium-Assistant/blob/main/podium-helper/public/docs/competitors.png?raw=true)

## Dependencies
```sh
- ReactJS
- Material UI
- React-Router-DOM
- classnames
- SASS
- Express
- PostgreSQL
```