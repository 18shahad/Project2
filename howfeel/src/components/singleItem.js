import React from 'react';
export default class singleItem extends React.Component {




  render() {



    //ICONS
    let edit = <button onClick={()=> this.props.editFunc(this.props.index, edit, fav, remove)} className='btn'><span className="glyphicon glyphicon-edit"></span></button>;
    let fav = <button onClick={() => this.props.favFunc(this.props.index)} className='btn'><span className="glyphicon glyphicon-heart"></span></button>;
    let remove = <button onClick={() => this.props.delFunc(this.props.index)} className='btn'><span className="glyphicon glyphicon-remove"></span></button>;
    
    let newID = this.props.index + 's';
    return (
      <div id={this.props.index}>
        <p><strong id={newID}>{this.props.newFeel}</strong></p> 
        {fav}  {edit}   {remove} 
        <hr/>
     </div>
    );
  }
}