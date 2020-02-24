import React from 'react';
export default class singleItem extends React.Component {




  render() {

    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    //ICONS
    let edit = <button onClick={()=> this.props.editFunc(this.props.index)} className='btn'><span className="glyphicon glyphicon-edit"></span></button>;
    let fav = <button onClick={() => this.props.favFunc(this.props.index)} className='btn'><span className="glyphicon glyphicon-heart"></span></button>;
    let remove = <button onClick={() => this.props.delFunc(this.props.index)} className='btn'><span className="glyphicon glyphicon-remove"></span></button>;
    

    return (
      <div id={this.props.index}>
        <p>{this.props.newFeel}</p>
        <p>Time [{hours} : {min} : {sec}]</p>
        {fav}  {edit}   {remove} 
     </div>
    );
  }
}