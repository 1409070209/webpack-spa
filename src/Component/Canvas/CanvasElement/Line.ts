import Point from "./Point";

class Line {
    start: Point;
    end: Point;
    lineWidth: Number;
    lineColor: String;

    constructor(start: Point, end: Point, width, color) {
        this.start = start;
        this.end = end;
        this.lineWidth = width;
        this.lineColor = color;
    }
}

export default Line;