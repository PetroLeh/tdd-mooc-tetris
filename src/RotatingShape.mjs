export class RotatingShape {

    shape;

    constructor(shape) {
        this.shape = shape.split("\n").map(s => s.trim());
    }

    toString() {
        let s = this.shape.join("\n") + "\n";
        return s;
    }

    rotateRight() {
        let s = "";
        for (let col = 0; col < this.shape.length; col++) {
            for (let row = this.shape.length - 1; row >= 0; row--) {
                s += this.shape[row].charAt(col);
            }
            if (col !== this.shape.length - 1) {
                s += "\n";
            }
        }
        return new RotatingShape(s)
    }

    rotateLeft() {
        return this.rotateRight()
                    .rotateRight()
                    .rotateRight();
    }
}
