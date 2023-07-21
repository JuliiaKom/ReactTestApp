 import "./Nav.css"

 const Nav = (props) => {
    return (
        <nav>
            {
                props.data.nav.map(el => <a href = {el.link}>{el.text}</a> )
            }
        </nav>
    )
}
export default Nav;