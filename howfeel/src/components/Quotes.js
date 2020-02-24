import React from 'react';
import axios from 'axios';

export default class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          quoteList: []
                };
    
      }

    componentDidMount(){
        {this.getQuote()}
      
      }
        
      getQuote(){
        let url3 ='https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
       
        axios({ method: 'get', url:url3 })
        .then(res => {
          console.log(res);
          const quoteAuthor = res.data.quoteAuthor;
          const quoteText = res.data.quoteText;
          document.getElementById('qContainer').innerHTML += '<p>' + quoteText + '</p> <p>' + quoteAuthor+'</p> ';
            
      
        })
        .catch(err => {
          console.log(err);
        });
      }


  render() {


    return (
        <div id='right'>
        <h3>Quotes!</h3>
        <button onClick={() => this.getQuote()}> More Quotes </button>

      <div className='scrollable' id='qContainer'> 

            {/* <!-- SHOULD HAVE 2 SECTIONS ALL AND FAV--> */}
            {/* <!--  FAV BUTTONS --> */}
      </div>



    </div>
    );
  }
}









       