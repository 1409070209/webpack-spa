import Canvas from "./Component/Canvas/Canvas";
import Line from "./Component/Canvas/CanvasElement/Line";
import Point from "./Component/Canvas/CanvasElement/Point";
import Audio from "./Component/Audio/Audio";
import AudioContext from "./Component/Audio/AudioCanvas/AudioContext.js";



const audio = new Audio();
const canvas = new Canvas(600,500);
document.querySelector('button').onclick = () => {
    canvas.clear();
};
let lastDate = new Date();
let lastArr = [];

const lineWidth = 7;
const lineMargin = 15;
const lineColor = "#97ffaf";
const lineBottom = 500;
function draw (arr) {
    arr.forEach((item , index)=>{
        const lineX = (lineWidth+lineMargin)*(index+1);
        const lineTop = lineBottom-item*1.5;
        const line = new Line(new Point(lineX,lineTop) , new Point(lineX,lineBottom) , lineWidth , lineColor);
        canvas.renderLine(line);
    })
}

// canvas.renderLine(new Line(new Point(100,100) , new Point(100 ,400) , 4 , 'red'));
// setTimeout(()=>{
//     canvas.clear();
//     setTimeout(()=>{
//         canvas.renderLine(new Line(new Point(200,200),new Point(200,120) , 14 , 'blue'));
//     },1)
// },1000);

new AudioContext(audio.audio , 64 , (arr)=>{
    canvas.clear();
    draw(arr);
});
// canvas.renderLine(new Line(new Point(100,100),new Point(600,500)));
