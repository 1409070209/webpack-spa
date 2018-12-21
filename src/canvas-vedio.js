import Canvas from "./Component/Canvas/Canvas";
import Line from "./Component/Canvas/CanvasElement/Line";
import Point from "./Component/Canvas/CanvasElement/Point";
import Audio from "./Component/Audio/Audio";
import AudioContext from "./Component/Audio/AudioCanvas/AudioContext.js";
import ANiMA from './Component/Audio/static/ANiMA.mp3';
    
const audio = new Audio();
const canvas = new Canvas(600,400);

/**
 * 之所以需要在click事件后执行业务逻辑，是应为chrome升级66版本后，
 * 要求AudioContext对象必须在用户交互之后执行
 * 
 * 这个机制以前在移动端才有，66chrome版本后移植到了PC端
 */
document.addEventListener('click', function (e) {
    audio.audio.autoplay = 'true'
    audio.audio.src = ANiMA;

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

    new AudioContext(audio.audio , 64 , (arr)=>{
        canvas.clear();
        draw(arr);
    });
    canvas.renderLine(new Line(new Point(100,100),new Point(600,500)));
});
