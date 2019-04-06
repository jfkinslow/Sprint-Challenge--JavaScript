// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height =  height;
        this.volume = (this.length * this.width * this.height);
        this.surfaceArea = (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }

    getVolume(){
        return this.volume;
    }

    getSurfaceArea() {
        return this.surfaceArea;
    }
}

let cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.getVolume()); // 100
console.log(cuboid.getSurfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(length, width, height){
        super(length, width, height);
        this.surfaceArea = 6 * (this.length * this.width)
    }
}

let cube = new CubeMaker(5,5,5);

console.log(cube.getVolume());
console.log(cube.getSurfaceArea());