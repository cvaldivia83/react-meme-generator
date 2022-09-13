import React from 'react';

export default function Meme() {

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(data => {
      setAllMemes(data.data.memes)
    })
  })

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const getMemeImage = () => {

    const randomNumber = Math.floor(Math.random() * allMemes.length);

    const {url} = allMemes[randomNumber];

    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: url
      }
    });
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMemeState => {
      return {
        ...prevMemeState,
        [name]: value
      }
    })
  }

  console.log(meme.bottomText);

  return (
    <div className="meme">
      <div className="form">
        <input
        type="text"
        placeholder="Top Text" className="form--input"
        name="topText"
        onChange={handleChange}
        value={meme.topText} />

        <input type='text'
        placeholder="Bottom Text" className="form--input"
        name="bottomText"
        onChange={handleChange}
        value={meme.bottomText} />

        <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className="meme-image" />
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
