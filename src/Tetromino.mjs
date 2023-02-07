import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(
        `.T.
         TTT
         ...`
    );

    static I_SHAPE = new Tetromino(
        `.....
         .....
         IIII.
         .....
         .....`
    )

    piece;
    
    constructor (shape) {
        this.piece = new RotatingShape(shape)
    }

    rotateRight() {
        let newShape = this.piece.rotateRight().getShape();
        return new Tetromino(newShape);
    }

    rotateLeft() {
        let newShape = this.piece.rotateLeft().getShape();
        return new Tetromino(newShape);
    }

    toString() {
        return this.piece.toString();
    }

}