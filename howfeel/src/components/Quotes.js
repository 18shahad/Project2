import React from 'react';
import axios from 'axios';

export default class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          quoteList: [],
          quoteText: '',
          quoteAuthor: ''
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
          this.setState({
            quoteAuthor: res.data.quoteAuthor,
            quoteText: res.data.quoteText
          });            
      
        })
        .catch(err => {
          console.log(err);
        });
      }


  render() {


    return (
        <div id='right'>
        <h3><strong>Today's Quote!</strong></h3>
        {/* <button onClick={() => this.getQuote()}> More Quotes </button> */}

      <div className='scrollable' id='qContainer'> 

            <strong>{this.state.quoteText}</strong>
            <p>" {this.state.quoteAuthor} "</p>
      </div>
        <img src={require('../components/feels.png')} alt='feeling'/>


    </div>
    );
  }
}









       