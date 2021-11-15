const electron = require('electron');
const path = require('path');

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
    mainTray = new Tray(iconPath);  

    mainTray.on('click', (event, bounds)=>{

        const { x, y } = bounds;
        const { height, width } = mainWindow.getBounds(); 

        mainWindow.setBounds({
            x: Math.round(x - width/2),
            y: y - height,
            height: height,
            width: width,
        });

        if(mainWindow.isVisible())
        {
            mainWindow.hide();
        }
        else
        {
            mainWindow.show();
        }
    });

});

