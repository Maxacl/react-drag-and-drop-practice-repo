import React from 'react'
import Picture from './Picture';
import { useState } from 'react';
import { useDrop } from 'react-dnd';

import "../App.css";

import image1 from "../assets/2023-06-26.png";
import image2 from "../assets/Screenshot 2023-11-01 112110.png";
import image3 from "../assets/bootstrap screen grab.png";


const PictureList = [
  {
    id: 1,
    url: image1
  },
  {
    id: 2,
    url: image2
  },
  {
    id: 3,
    url: image3
  }

]

function DragDrop() {

  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "image", //which element "type" can be dropped
    drop: (item) => addImageToBoard(item.id), // function to execute once item is dropped
    collect: (monitor) => ({  // collect data from monitor object
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard([pictureList[0]]);
  };

  return (
    <>
    <div className="Pictures">
      {PictureList.map((picture) => {
        return <Picture url={picture.url} id={picture.id} />;
      })}
    </div>
    <div className="Board" ref={drop} style={{backgroundColor: isOver ? "green" : "white"}}>
      {board.map((picture) => {
        return <Picture url={picture.url} id={picture.id} />;
      })}
    </div>
    </>
  )
}

export default DragDrop;