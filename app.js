// application canvas and background definition
const app = new PIXI.Application({
    width: 720,
    height: 600,
    background: 0x194f71,
    autoStart: false
});

const background = PIXI.Sprite.from("assets/background.png");
background.height = app.screen.height;
background.width = app.screen.width;
app.stage.addChild(background);