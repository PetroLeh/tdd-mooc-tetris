import { RotatingShape } from "./RotatingShape.mjs";

export class Tetromino {

    static T_SHAPE = new Tetromino(
        `.T.
         TTT
         ...`, 4
    );

    static I_SHAPE = new Tetromino(
        `.....
         .....
         IIII.
         .....
         .....`, 2
    )

    piece;
    orientations;
    currentOrientation;
    
    constructor (shape, orientations, currentOrientation = 0) {
        this.piece = new RotatingShape(shape)
        this.orientations = [];
        this.currentOrientation = currentOrientation;

        let orientation = this.piece;
        for (let i = 0; i < orientations; i++)  {
            this.orientations.push(orientation)
            orientation = orientation.rotateRight();
        }
    }

    rotateRight() {
        let newOrientation = this.currentOrientation + 1;
        if (newOrientation >= this.orientations.length) newOrientation = 0;
        return new Tetromino(this.piece.getShape(), this.orientations.length, newOrientation);
    }

    rotateLeft() {
        let newOrientation = this.currentOrientation - 1;
        if (newOrientation < 0) newOrientation = this.orientations.length - 1;
        return new Tetromino(this.piece.getShape(), this.orientations.length, newOrientation);
    }

    toString() {
        return this.orientations[this.currentOrientation].toString();
    }

}