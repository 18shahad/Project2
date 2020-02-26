import React from 'react';
import Items from './Items';

export default class Feeling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          feeling: [],
          newItem: '',
          fav: [],
          show: 'all'
                };
    
      }

  
  addFeeling = () => {

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
    this.setState({
        feeling: []
      })
  }

  showAll() {
    this.setState({
        show: 'all'
      })
  }

  showFav() {
    this.setState({
        show: 'fav'
      })
  }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  editFunc = (index) => {
    console.log('IN EDIT', index)
    console.log(this.state.feeling[index])  

    var editText = prompt("TO EDIT YOUR TEXT: ", this.state.feeling[index]);
    let newID = index + 's';
    if (editText != null) {
        this.state.feeling[index] = editText;
        let newFeeling = this.state.feeling;
        this.setState({
            feeling: newFeeling
          })
    }

    }

    delFunc = (index) => {
        console.log('IN DELETE', index)
        console.log(this.state.feeling[index])  
        this.state.feeling.splice(index,1);
        let newFeeling = this.state.feeling;
        this.setState({
            feeling: newFeeling
          })
    }

    favFunc = (index) => {
        console.log('IN FAV', index)
        this.state.fav.push(this.state.feeling[index])
        console.log('fav array is: ', this.state.fav)

    }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  render() {

    return (
        <div id='left'>
        
        <p id='par'>Writing about your feelings can help you to feel better mentally and physically.</p>
        <textarea id='inputText' placeholder="Write your feeling!!" name="feeling" value={this.state.newItem} onChange={this.onTextBoxChange}/>

        <button onClick={()=>this.addFeeling()}> Add </button>
        <div className='scrollable' id='list'>
        <button onClick={()=>this.showAll()} id='show'> Show All </button>
        <button onClick={()=>this.showFav()} id='fav'> Favorite </button>
        <Items feelingList={this.state.feeling} favList={this.state.fav} show={this.state.show} editFunc={this.editFunc} delFunc={this.delFunc} favFunc={this.favFunc}/>
            {/* <!-- HAVE TIME AND WHAT THE USER WRITE -->
            <!-- AND EDITE DEL AND FAV BUTTONS --> */}

        </div> 
        <button onClick={()=>this.clear()}> Clear All! </button>


        </div>
    );
  }
}



