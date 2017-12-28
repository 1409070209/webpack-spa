import Component from "../Component";
import './Canvas.css';
import Html from './Canvas.html';


class Canvas extends Component{

    canvas = false;
    context = false;

    constructor(width , height){
        super();
        this.html = Html;
        this.render();
        this.div = document.querySelector('#canvas');
        this.canvas = this.div.children[0];
        this.canvas.width = width;
        this.canvas.height = height;
        //获取context
        this.context = this.canvas.getContext('2d');
    }
    renderLine(line) {
        this.context.moveTo(line.start.x , line.start.y);
        this.context.lineTo(line.end.x , line.end.y);
        this.context.lineWidth = line.lineWidth;
        this.context.strokeStyle = line.lineColor;
        this.context.stroke();
    }
    clear(){
        this.canvas.width = this.canvas.width;
    }
}

export default Canvas;