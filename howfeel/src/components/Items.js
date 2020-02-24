import React from 'react';
import SingleItem from './singleItem'


export default class Items extends React.Component {
    

    
  render() {

    const allFeeling = this.props.feelingList.map((feel, index)=>{
        return <SingleItem newFeel={feel} index={index} key={index} editFunc={this.props.editFunc} delFunc={this.props.delFunc} favFunc={this.props.favFunc}/>;
        // return <SingleItem newFeel={feel} index={index} key={index} editFunc={this.editFunc()}/>;

      });

    return (
        <div>
            {allFeeling}

        </div>
    );
  }
}





