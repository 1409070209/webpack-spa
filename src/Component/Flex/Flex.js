import Component from "../Component";
import html from './Flex.html';
import './Flex.css';

import './HolyGrail.css';


class Flex extends Component{
    constructor () {
        super();
        this.html += html;
        this.render()
    }
}

export default Flex;