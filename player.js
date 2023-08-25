const PLAYER_SPEED = 10;
let velocity = 0;

const player = PIXI.Sprite.from("assets/icon.png");
//initialize player position and scale at start
player.height = 80;
player.width = 80;
player.y = 350;
player.x = app.screen.width / 2;

// moving code of player
app.ticker.add(() => {
    const futurePos = player.x + velocity * PLAYER_SPEED;
    if (futurePos < app.screen.width && futurePos > 0) {
        player.x = futurePos;
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key == "a") {
        velocity = -1;
    }

    if (event.key == "d") {
        velocity = 1;
    }
});

document.addEventListener("keyup", (event) => {
    velocity = 0;
});
