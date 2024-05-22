import React from 'react';
import { useDrag } from 'react-dnd';

function Picture({ id, url }) {

  const [{isDragging}, drag] = useDrag(() => ({
    type: "image", // the type of item being dragged. Where the item can ultimately be dropped
    item: {id: id}, // data regarding the item being dragged
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
  <img 
    ref={drag} 
    src={url}
    width="200px" 
    style={{border: isDragging ? "5px solid green" : "0px"}}
    />
  );
}

export default Picture;