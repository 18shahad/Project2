import React from 'react';

export default class Feeling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          feeling:''
        };
    
      }


handleChangeUnput = (e) => {

    this.setState({
      feeling: e.target.value
    })
  }
  
  addFeeling = () => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    document.getElementById('list').innerHTML += '<p>' + this.state.feeling +'</p> <p>Time[' +hours+':'+min+':'+sec +']</p>';
    document.getElementById('list').innerHTML += '<button class="btn"><i class="fa fa-trash"></i></button> <i class="material-icons">favorite</i><hr/>'
    document.getElementById('inputText').value = ' ';
  }

  render() {

    return (
        <div id='left'>
        
        <p id='par'>Writing about your feelings can help you to feel better mentally and physically.</p>
        <input type="text" id='inputText' placeholder="Write your feeling!!" name="feeling" onChange={(event)=>this.handleChangeUnput(event)}/>

        <button onClick={()=>this.addFeeling()}> Add </button>
        <div class='scrollable' id='list'>
        
            {/* <!-- HAVE TIME AND WHAT THE USER WRITE -->
            <!-- AND EDITE DEL AND FAV BUTTONS --> */}
        </div> 
        </div>
    );
  }
}



