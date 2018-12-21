import Component from "../Component";
import './Auido.css';
import Html from'./Audio.html';


class Audio extends Component{
    div;
    audio;

    constructor (){
        super();
        this.html = Html;
        this.render();
        this.renderAfter();
    }
    renderAfter(){
        this.div = document.querySelector('#audioDiv');
        this.audio = this.div.querySelector('audio');
        //传入常量并且给定回调
    }
}

export default Audio;