import Point from "./Point";

class Line {
    start: Point;
    end: Point;
    constructor(start:Point,end:Point) {
        this.start = start;
        this.end = end;
    }
}

export default Line;