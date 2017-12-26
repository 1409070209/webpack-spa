import Canvas from "./Component/Canvas/Canvas";
import Line from "./Component/Canvas/CanvasElement/Line";
import Point from "./Component/Canvas/CanvasElement/Point";
import Audio from "./Component/Audio/Audio";



const audio = new Audio();
const canvas = new Canvas();
canvas.renderLine(new Line(new Point(100,100),new Point(600,500)));
