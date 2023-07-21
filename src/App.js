import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


const App = (props) => {
  return (
    <div className="App">
      <Header data = {props.data.header}/>
      <Main data = {props.data.main} />
      <Footer data = {props.data.footer}/>
    </div>
  );
}


export default App;
