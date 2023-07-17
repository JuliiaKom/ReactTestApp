 import "./Header.css";
 import Nav from "./Nav/Nav";
 import logo from "../../images/logo.jpg"

const Header = () => {
    return (
        <header>
            <img src={logo} alt= "logo"/>
           <Nav/>
        </header>
    )
}
export default Header;