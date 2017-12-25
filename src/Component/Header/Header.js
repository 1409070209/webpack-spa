import Component from "../Component";
import Html from './Header.html';
import './Header.css';

class Header extends Component{

    constructor (){
        super();
        this.html = Html;
        this.render();
    }
}
export default Header;