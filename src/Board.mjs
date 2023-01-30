export class Board {
  width;
  height;
  board;
  falling;
  fallingBlock;
  fallingOnRow;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = ["...", "...", "..."]
    this.falling = false;
  }

  toString() {
    let s = "";
    for (let row = 0; row < this.board.length; row++) {
        s += this.board[row] + "\n";
    }
    return s;
  }

  drop(block) {
    if(this.falling) {
        throw("already falling")
    }
    this.fallingOnRow = 0;
    this.fallingBlock = block
    this.board[this.fallingOnRow] = "." + this.fallingBlock.color + ".";
    this.falling = true;
  }

  tick() {
    if (this.hasFalling()) {
        if (this.fallingOnRow < this.board.length - 1 && this.board[this.fallingOnRow + 1] === "...") {
            this.board[this.fallingOnRow] = "...";
            this.fallingOnRow++;
            this.board[this.fallingOnRow] = "." + this.fallingBlock.color + ".";
        } else {
            this.falling = false;
            return;
        }
    }


  }

  hasFalling() {
    return this.falling;
  }
}
