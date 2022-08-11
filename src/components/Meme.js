import React from 'react';

import memesData from "../memesData"

export default function Meme() {

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getMemeImage = () => {

    const memesList = allMemeImages.data.memes

    const randomNumber = Math.floor(Math.random() * memesList.length);

    const {url} = memesList[randomNumber];

    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: url
      }
    });
  }

  return (
    <div className="meme">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input"></input>
        <input type='text' placeholder="Bottom Text" className="form--input"></input>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div>
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </div>
  )
}
