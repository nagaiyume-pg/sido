const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 300,         // 必要に応じて調整（幅）
        height: 1080,       // 画面の縦いっぱい
        x: 0,               // 左端
        y: 0,               // 上端
        frame: false,       // 枠を消す（必要に応じて）
        alwaysOnTop: true,  // 常に前面に表示（任意）
        resizable: false,   // サイズ変更不可（任意）
        movable: false,     // ユーザーによる移動不可（任意）
        skipTaskbar: true,  // タスクバー非表示（任意）
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // デベロッパーツールを表示
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.once('ready', () => {
    createWindow();
});

app.once('window-all-closed', () => app.quit());