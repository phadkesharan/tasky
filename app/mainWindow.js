const electron = require('electron');

const { BrowserWindow } = electron;

class mainWindow extends BrowserWindow{

    constructor(url){
        super({
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

        this.loadURL(url);
        this.on('blur', this.onBlur.bind(this));
    }

    onBlur(){
        this.hide();
    }

}

module.exports = mainWindow;