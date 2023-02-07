
export class RotatingShape {

    blocks;

    constructor(shape) {
        this.blocks = shape.split("\n")
                           .map(s => s.trim())
                           .map(s => [...s]); 
    }

    toString() {
        let s = this.getShape();
        s += "\n";
        return s;
    }

    getShape() {
        let s = this.blocks.map(row => row.join(""))
                           .join("\n");
        return s;        
    }

    rotateRight() {
        let s = "";
        let size = this.blocks.length;
        for (let i = 0; i < size; i++) {
            for(let j = 0; j < size; j++) {
                s += this.blocks[size - j - 1][i];
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
