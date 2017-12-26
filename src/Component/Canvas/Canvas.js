import Component from "../Component";
import './Canvas.css';
import Html from './Canvas.html';


class Canvas extends Component{

    canvas = false;
    context = false;

    constructor(){
        super();
        this.html = Html;
        this.render();
        this.div = document.querySelector('#canvas');
        this.canvas = this.div.children[0];
        this.canvas.width = 800;
        this.canvas.height = 600;
        //获取context
        this.context = this.canvas.getContext('2d');
    }
    renderLine(line) {
        this.context.moveTo(line.start.x , line.start.y);
        this.context.lineTo(line.end.x , line.end.y);
        this.context.lineWidth = 5;
        this.context.strokeStyle = "#0877ff";
        this.context.stroke();
    }
}

export default Canvas;