import './reset.css';

class Component{
    static _document:Document = document || null;
    protected html = '';
    render(){
        if (Component._document == null) {
            console.log('不在客户端渲染鸡毛？');
            return;
        }
        Component._document.body.innerHTML += this.html;
    }
}
export default Component;