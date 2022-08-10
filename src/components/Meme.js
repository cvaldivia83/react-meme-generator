import React from 'react';

import memesData from "../memesData"

export default function Meme() {

  const [image, setImage] = React.useState("");

  const getMemeImage = () => {

    const memesList = memesData.data.memes;

    const randomNumber = Math.floor(Math.random() * memesList.length);

    const {url} = memesList[randomNumber];

    setImage(url);
  }

  return (
    <div className="meme">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input"></input>
        <input type='text' placeholder="Bottom Text" className="form--input"></input>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div>
        <img src={image} className="meme--image" />
      </div>
    </div>
  )
}
