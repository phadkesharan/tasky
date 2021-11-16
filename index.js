const electron = require('electron');
const path = require('path');
const timerTray = require('./app/timerTray');
const mainWindow = require('./app/mainWindow');

const { app, BrowserWindow, Tray } = electron;

let myWindow;
let mainTray

app.on('ready', ()=>{
    myWindow = new mainWindow(`file://${__dirname}/src/index.html`);

    const icon = process.platform == 'win32'? 'windows-icon.png': 'icon Template.png';
    const iconPath = path.join(__dirname, `./src/assets/${icon}`);

    mainTray = new timerTray(iconPath, myWindow);
    
});

