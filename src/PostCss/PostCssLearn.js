import Component from '../Component/Component'
import html from './postcss-banner.html'
import './postcss-banner.css'

class PostCssLearn extends Component {
    constructor(){
        super()
        this.html = html;
        this.render();
    }
}

export default PostCssLearn;