import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;
    this.width = 70;
    this.height = 20;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      // vertical collision
      if (
        this.game.ball.position.y <= this.position.y ||
        this.game.ball.position.y + this.game.ball.size >= this.position.y
      ) {
        this.game.ball.speed.y = -this.game.ball.speed.y;
      }

      // horizontal collision
      if (
        this.game.ball.position.y <= this.position.y &&
        this.game.ball.position.y + this.game.ball.size >= this.position.y
      ) {
        this.game.ball.speed.x = -this.game.ball.speed.x;
      }

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
