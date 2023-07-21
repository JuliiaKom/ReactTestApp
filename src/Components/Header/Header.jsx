import "./Header.css";
import Nav from "./Nav/Nav"

const Header = (props) => {
    console.log(props)
    return (
        <header>
            <img src={props.data.logo} alt= "logo"/>
            <Nav data={props.data}/>
        </header>
    )
}
export default Header;