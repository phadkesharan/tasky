const electron = require('electron');
const path = require('path');
const timerTray = require('./app/timerTray');

const { app, BrowserWindow, Tray } = electron;

let mainWindow;
let mainTray

app.on('ready', ()=>{
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        height: 500,
        width: 300,
        frame: false,
        resizable: false,
        show: false,
    });

    const icon = process.platform == 'win32'? 'windows-icon.png': 'icon Template.png';
    const iconPath = path.join(__dirname, `./src/assets/${icon}`);

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    mainTray = new timerTray(iconPath, mainWindow);
    

});

