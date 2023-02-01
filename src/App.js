//import logo from './logo.svg';--we can ignore logo
import './App.css';
import React,{useState} from 'react'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { Route,Routes } from 'react-router-dom';
import About from './components/About';
//import About from './components/About';
//import Alert from './components/Alert';
/*import {
  Routes,
  Route
} from "react-router-dom";*/
//let m="AMASU";
 //jsx part approx same as html
    //and {}can be used for variables
export default function App () {

  const [mode,setmode] = useState('light');//modes of color
  //const [alert, setalert] = useState('null');
  const showalert=(message,type)=>{
    console.log(message);
          //setalert({
                //msg:message,
                //type:type
            //})
            setTimeout(() => {
            //  setalert(null);
            },2000);
  }
  const togglemode=()=>{
          if(mode==="light")
          {setmode('dark')
          document.body.style.backgroundColor="#07013c ";
          //showalert("Dark Mode has been enabled","Success");     
           document.title='TextUtils-Dark Mode';
           setInterval(() => {
            document.title='TextUtils is Amazing Mode';
           }, 2000);
           setInterval(() => {
            document.title='Install TextUtils Now';
           }, 1500);
        }
          else  
          {setmode('light')
          document.body.style.backgroundColor="white";
          //showalert("Light Mode has been enabled","Success");
          document.title='TextUtils-Light Mode';  
        }
        }
  
  return (
    <>
<Navbar title="NAVIGATION" mode={mode} togglemode={togglemode}/>
<Textform showalert={showalert} heading="ENTER YOUR TEXT HERE" mode={mode}/>
{/*<Routes>
  <Route exact path='/' element={<Textform/>} />
<Route exact path='/about' element={<About/>}/>
  </Routes>*/}
{/*<Alert alert={alert}/>
    <Routes>
<div className="container my-3">
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<Textform showalert={showalert} heading="ENTER YOUR TEXT HERE" mode={mode}/>}>
          </Route>
</div>
  </Routes>*/}
</>
)
}

