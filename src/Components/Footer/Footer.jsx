import "./Footer.css";
// import icon from "../../images/post.png";
// import icon2 from "../../images/facebook.png";
// import icon3 from "../../images/instagram.png";
const Footer = (props) => {
    return (
        <footer>
            <div className= "icon">
                <img src={props.data.icon} alt= "icon"/>
                <img src={props.data.icon2} alt= "icon2"/>
                <img src={props.data.icon3} alt= "icon2"/>

            </div>

        </footer>
    )
}
export default Footer;