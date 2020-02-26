import React from 'react';
import Feeling from './components/Feeling';
import Quotes from './components/Quotes';
import './App.css';


export default class App extends React.Component {

render() {
  return (
    <div id='container'>
      <h1><strong>HOW DO YOU FEEL TODAY !!!</strong></h1>
             {/* <!-- LEFT SECTION !!!!! --> */}
             <div id='content'>

             <Feeling />
    
            {/* <!-- RIGHT SECTION !!!!! --> */}
            <Quotes />
        </div>
    </div>
  )
}

}


