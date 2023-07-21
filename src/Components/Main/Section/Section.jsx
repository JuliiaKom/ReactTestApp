import "./Section.css"

const Section = (props) => {
    return (
        <section>
            <div className= "photo">
                <img src={props.section.photo} alt= "photo"/>
                <img src={props.section.photo1} alt= "photo1"/>
            </div>
        </section>
    )
}
export default Section;