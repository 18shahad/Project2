import React from 'react';
import Items from './Items';
import Edit from './Edit';

export default class Feeling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          feeling: [],
          newItem: ''
                };
    
      }

  
  addFeeling = () => {
//  console.log('ADD FEELING')
    this.setState({
        feeling: [...this.state.feeling, this.state.newItem],
        newItem: ''
      });
  }

    onTextBoxChange = (e) => {
    this.setState({
      newItem: e.target.value
    });
  }

  clear() {
    document.getElementById('list').innerHTML = '';
    this.setState({
        feeling: []
      })
  }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  editFunc = (index) => {
    console.log('IN EDIT', index)
    }
    delFunc = (index) => {
        console.log('IN DELETE', index)
        console.log(this.state.feeling[index])  
        this.state.feeling.splice(index,1);
         
    }
    favFunc = (index) => {
        console.log('IN FAV', index)
    }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  render() {

    return (
        <div id='left'>
        
        <p id='par'>Writing about your feelings can help you to feel better mentally and physically.</p>
        <input type="text" id='inputText' placeholder="Write your feeling!!" name="feeling" value={this.state.newItem} onChange={this.onTextBoxChange}/>

        <button onClick={()=>this.addFeeling()}> Add </button>
        <div class='scrollable' id='list'>
        <Items feelingList={this.state.feeling} editFunc={this.editFunc} delFunc={this.delFunc} favFunc={this.favFunc}/>

            {/* <!-- HAVE TIME AND WHAT THE USER WRITE -->
            <!-- AND EDITE DEL AND FAV BUTTONS --> */}
        </div> 
        <button onClick={()=>this.clear()}> Clear All! </button>

        </div>
    );
  }
}



