import './assets/scss/App.css';
import React, {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/App.scss'
import {Element} from "./components/Element";

function App() {
    useEffect(() => {
        document.title = 'Lauris - Awave test';
    });

    return (
        <div className='container'>

            {/*<div className='hours-box'>*/}
            {/*    <Element minNumber="1" maxNumber="12" step="1" />*/}
            {/*</div>*/}

            <div className='hours-box'>
                <Element minNumber="1" maxNumber="12" step="1" />
            </div>

            <div className='clock-seperator' >:</div>
            <div className='hours-box'>
                <Element minNumber="0" maxNumber="59" step="1" />
            </div>
        </div>
   );

  // return (
  //   <div className="App">
  //        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
  //        <p>wtf</p>
  //        <Layout />
  //        <ToastContainer position="bottom-left" />
  //    </div>
  // );
}



export default App;
