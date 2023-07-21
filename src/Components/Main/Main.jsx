 import "./Main.css";
import Button from "../Button/Button";
import Section from "./Section/Section";
const Main = (props) => {
    return (
        <main>
            <div className = 'container'>
                <h1>{props.data.titles.main}</h1>
                <Button/>
            </div>
            <Section section={props.data.section}/>
        </main>
    )
}
export default Main;