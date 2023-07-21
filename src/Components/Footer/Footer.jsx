import "./Footer.css";
import icon from "../../images/post.png";
import icon2 from "../../images/facebook.png";
import icon3 from "../../images/instagram.png";
const Footer = () => {
    return (
        <footer>
            <div className= "icon">
                <img src={icon} alt= "icon"/>
                <img src={icon2} alt= "icon"/>
                <img src={icon3} alt= "icon"/>
            </div>

        </footer>
    )
}
export default Footer;