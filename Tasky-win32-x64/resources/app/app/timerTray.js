const electron = require('electron');

const { Tray, app, Menu } = electron;

class timerTray extends Tray{


    constructor(iconPath, mainWindow){

        super(iconPath);

        this.on('click', this.onClick.bind(this));
        this.on('right-click', this.onRightClick.bind(this));

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

    onRightClick(){
        const menuConfig = Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: ()=> app.quit()
            }
        ]);

        this.popUpContextMenu(menuConfig);
    }
};


module.exports = timerTray;