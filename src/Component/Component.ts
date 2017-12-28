import './reset.css';

class Component{
    protected html = '';
    //如果不把html转成Dom而是直接对innerHTML做累加，就会出现指针指向错误
    static $html(str):NodeList{
        let div = document.createElement('div');
        div.innerHTML = str;
        return div.childNodes;
    }
    protected render(){
        if (document === null) {
            console.log('不在客户端渲染鸡毛？');
            return;
        }
        const nodeList:NodeList = Component.$html(this.html);
        for (let i = 0; i < nodeList.length; i++) {
            let obj = nodeList[i];
            document.body.appendChild(obj);
        }
    }
}
export default Component;