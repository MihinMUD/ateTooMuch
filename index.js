let score = 0;
let lives = 3;

const fontConfig = {
    fill: "white",
    stroke: "black",
    strokeThickness: 3,
};

const scoreCounter = new PIXI.Text("Score: 0", fontConfig);
const livesCounter = new PIXI.Text("Lives: 3", fontConfig);

livesCounter.y = 40;

// load all assets to app window and append the app to the DOM
app.stage.addChild(scoreCounter).addChild(livesCounter).addChild(player);
document.querySelector(".game").appendChild(app.view);

app.ticker.add(() => {
    apples.forEach((apple, index) => {
        if (apple.y > app.screen.height) {
            apple.destroy();
            apples.splice(index, 1);
            lives -= 1;
        } else {
            const playerBound = player.getBounds(true);
            let appleBound = apple.getBounds(true);

            if (playerBound.intersects(appleBound)) {
                apple.destroy();
                apples.splice(index, 1);
                score += 1;
            }
        }
        scoreCounter.text = `Score: ${score}`;
        livesCounter.text = `Lives: ${lives}`;
        if (lives == 0) {
            const gameOver = new PIXI.Text(`Game Over. You scored ${score}!`, { ...fontConfig, fontSize: 40 });
            gameOver.x = app.screen.width / 2 - gameOver.width / 2;
            gameOver.y = app.screen.height / 2 - gameOver.height / 2;

            app.stage.addChild(gameOver);
            app.stop();
        }
    });
});
