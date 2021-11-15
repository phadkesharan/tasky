const electron = require('electron');

const { Tray } = electron;

class timerTray extends Tray{


    constructor(iconPath, mainWindow){

        super(iconPath);
        this.on('click', this.onClick);
        this.mainWindow = mainWindow;
        this.setToolTip('Tasky');
    }

    onClick(event, bounds){
        const { x, y } = bounds;
        const { height, width } = this.mainWindow.getBounds(); 

        this.mainWindow.setBounds({
            x: Math.round(x - width/2),
            y: y - height,
            height: height,
            width: width,
        });

        if(this.mainWindow.isVisible())
        {
            this.mainWindow.hide();
        }
        else
        {
            this.mainWindow.show();
        }
    };
};


module.exports = timerTray;