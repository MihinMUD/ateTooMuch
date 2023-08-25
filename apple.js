const appleTexture = PIXI.Texture.from("assets/apple.png");

const spawnFrequency = 30;
let apples = [];

let appleSpawner = () => {
    let apple = new PIXI.Sprite(appleTexture);
    apple.height = 40;
    apple.width = 40;
    apple.x = Math.random() * app.screen.width;
    app.stage.addChild(apple);
    apples.push(apple);
};

let timeSinceLastSpawn = 0;

app.ticker.add((delta) => {
    if (timeSinceLastSpawn > 50) {
        appleSpawner();
        timeSinceLastSpawn = 0;
    }
    timeSinceLastSpawn += delta;
    apples.forEach((apple) => {
        apple.y += 5;
    });
});
