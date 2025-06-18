const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        title: 'マイアプリ',
    });

    // デベロッパーツールを表示
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.once('ready', () => {
    createWindow();
});

app.once('window-all-closed', () => app.quit());