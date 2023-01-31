export class Board {
  EMPTY = ".";
  width;
  height;
  fallingBlock;
  fallingOnRow;
  fallingOnCol;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.fallingBlock = null;
    this.board = this.initEmptyBoard();
  }

  initEmptyBoard() {
    let board = new Array(this.height);
    for (let i = 0; i < this.height; i++) {
        let row = new Array(this.width);
        row.fill(this.EMPTY);
        board[i] = row;
    }
    return board;
  }

  toString() {
    let s = "";
    for (let row = 0; row < this.height; row++) {
        for (let col = 0; col < this.width; col++) {
            if (this.fallingBlock !== null && row === this.fallingOnRow && col === this.fallingOnCol) {
                s += this.fallingBlock.color;
            } else {
                s += this.board[row][col];
            }
        }
        s += "\n";
    }
    return s;
  }

  drop(block) {
    if(this.fallingBlock !== null) {
        throw("A block is already falling")
    }
    this.fallingBlock = block;
    this.fallingOnRow = 0;
    this.fallingOnCol = 1;
  }

  tick() {
    let row = this.fallingOnRow;
    let col = this.fallingOnCol;
    if (this.hasFalling()) {
        if (row < this.height - 1 && this.board[row + 1][col] === this.EMPTY) {
            this.fallingOnRow++;
        } else {
            this.board[row][col] = this.fallingBlock.color;
            this.fallingBlock = null;
            this.fallingOnRow = 0;
        }
    }
  }

  hasFalling() {
    return this.fallingBlock !== null;
  }
}
