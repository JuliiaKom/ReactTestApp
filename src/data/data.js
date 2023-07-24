import logo from "../images/logo.jpg";
import photo from "../images/photo.jpg";
import photo1 from "../images/photo1.jpg";
import icon from "../images/post.png";
import icon2 from "../images/facebook.png";
import icon3 from "../images/instagram.png";

let data  = {
    header: {
    logo: logo,
        nav : [
            {link:"https://travel.usnews.com/", text: "Tour"},
            {link:"https://www.tourcontact.com/kontakt.html", text: "Contact"},
            {link: "https://travel.usnews.com/rankings/", text: "About"},
            {link:"https://travel.usnews.com/cruises/", text: "Gallary"},
        ],
    },

    main: {
        section: {
            photo: photo,
            photo1: photo1
        },
        titles:
            {
                main: 'Discover The World'
            }
    },
    footer: {
            icon: icon,
            icon2: icon2,
            icon3: icon3,

    }
}
export default data;