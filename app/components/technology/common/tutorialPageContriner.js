import React from 'react'
import TrainingPage from './trainingPage';

const TrainingContainer = (props) => {
    const list = props.data.map(function(_item,index){
        return (<TrainingPage data={_item} key={index} />)
      })
      return (<div> {list} </div>);
}

export default TrainingContainer;
