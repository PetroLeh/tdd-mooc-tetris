
export class RotatingShape {

    shape;

    constructor(shape) {
        this.shape = shape.split("\n")
                           .map(s => s.trim())
                           .map(s => [...s]);
    }

    toString() {
        let s = this.shape.map(row => row.join(""))
                           .join("\n");
        s += "\n";
        return s;
    }

    rotateRight() {
        let s = "";
        let size = this.shape.length;
        for (let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                s += this.shape[size - j - 1][i];
            }
            if (i < size - 1) s+= "\n";
        }
        return new RotatingShape(s);
    }

    rotateLeft() {
        let shape = this.rotateRight()
                        .rotateRight()
                        .rotateRight();
        return shape;
    }


}
