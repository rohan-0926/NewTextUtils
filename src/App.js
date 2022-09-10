// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light'); //Whether Darkmode is enabled or not 

  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{

    setAlert({
      msg:message,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
   
    if(mode === "light")
    {
      setMode("dark");

      document.body.style.backgroundColor = "#042743";

      showAlert("Dark Mode Has Been Enabled", "Success");

      document.title = "Text Utils - Dark Mode";

      // setTimeout(() => {
        
      //   document.title = "Text Utils is Amazing.";


      // }, 2000);

      // setTimeout(() => {
        
      //   document.title = "Install Text Utils Now.";


      // }, 1500);


    }
    else
    {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light Mode Has Been Enabled", "Success");

      document.title = "Text Utils - Light Mode";

    }

  }


  return (
      <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About />}/>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text Here to Analyze :" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
      </>
  );
}

export default App;
