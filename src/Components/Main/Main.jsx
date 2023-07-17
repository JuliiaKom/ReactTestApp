 import "./Main.css";
import Button from "../Button/Button";
import Section from "./Section/Section";
const Main = () => {
    return (
        <main>
            <div className = 'container'>
                <h1>Discover The World</h1>
                <Button/>
            </div>
            <Section/>
        </main>
    )
}
export default Main;