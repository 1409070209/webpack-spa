

class AudioContext{
    audioContext;
    gainNode;
    analyser;
    source;
    constructor(audio , size , event) {
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
        this.audioContext = new window.AudioContext();
        this.source = this.audioContext.createMediaElementSource(audio);
        this.gainNode = this.audioContext[this.audioContext.createGain ? "createGain" : "createGainNode"]();

        this.analyser = this.audioContext.createAnalyser();

        // alert(this.audioContext);
        this.source.connect(this.analyser);
        this.analyser.connect(this.audioContext.destination);

        this.analyser.fftSize = size;
        this.analyser.gainNode = this.gainNode;
        this.visualizer(event);
    }
    visualizer(event){
        let arr = new Uint8Array(this.analyser.frequencyBinCount);

        const requestAnimationFrame = window.requestAnimationFrame ||
                                        window.webkitRequestAnimationFrame ||
                                        window.mozRequestAnimationFrame;
        function v () {
            this.analyser.getByteFrequencyData(arr);
            event(arr);
            requestAnimationFrame(v)
        }
        v = v.bind(this);
        requestAnimationFrame(v);
    }
}

export default AudioContext;