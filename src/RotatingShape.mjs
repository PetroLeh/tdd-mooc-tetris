export class RotatingShape {

    shape;

    constructor(shape) {
        this.shape = shape.split("\n").map(s => s.trim());
    }

    toString() {
        let s = this.shape.join("\n") + "\n";
        return s;
    }
}
