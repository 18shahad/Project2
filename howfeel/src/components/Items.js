import React from 'react';
import SingleItem from './singleItem'


export default class Items extends React.Component {
    

    
  render() {

    let allFeeling = [];
    if (this.props.show === 'all')
    {
     allFeeling = this.props.feelingList.map((feel, index)=>{
        return <SingleItem checkedList={this.props.checkedList} newFeel={feel} index={index} key={index} editFunc={this.props.editFunc} delFunc={this.props.delFunc} favFunc={this.props.favFunc}/>;

      });
    }

    else if (this.props.show === 'fav')
    {

       allFeeling = this.props.favList.map((feel, index)=>{
        return <SingleItem checkedList={this.props.checkedList} newFeel={feel} index={index} key={index} editFunc={this.props.editFunc} delFunc={this.props.delFunc} favFunc={this.props.favFunc}/>;
      });
    }
    return (
        <div>
            {allFeeling}

        </div>
    );
  }
}





