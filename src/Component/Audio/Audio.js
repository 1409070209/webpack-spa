import Component from "../Component";
import './Auido.css';
import Html from'./Audio.html';
import ANiMA from "./static/AnRan.mp3";

class Audio extends Component{
    div;
    audio;
    audioSource;

    constructor (){
        super();
        this.html = Html;
        this.render();
        this.renderAfter();
    }
    renderAfter(){
        this.div = document.querySelector('#audioDiv');
        this.audioSource = document.querySelector('#audio');
        this.audio = this.div.querySelector('audio');
        this.audioSource.src = ANiMA;

        this.audio.play();
        //传入常量并且给定回调
    }
}

export default Audio;