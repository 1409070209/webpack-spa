import Component from "../Component";
import './Auido.css';
import Html from'./Audio.html';
import ANiMA from "./static/ANiMA.mp3";

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

        this.control = document.querySelector('.control');
        this.controlButton = document.querySelector('button');
        this.controlP = this.control.children[1];
        this.control.addEventListener('click',function(){
            console.log('play');
            this.audio.play();
            this.controlP.innerHTML = '12132';
        })

    }
}

export default Audio;