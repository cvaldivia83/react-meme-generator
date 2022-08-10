import memesData from "../memesData"

export default function Meme() {
  const getMemeImage = () => {

    const memesList = memesData.data.memes;

    const randomNumber = Math.floor(Math.random() * memesList.length);

    const {url} = memesList[randomNumber];

    console.log(url);

  }

  return (
    <div className="meme">
      <div className="form">
        <input type="text" placeholder="Top Text" className="form--input"></input>
        <input type='text' placeholder="Bottom Text" className="form--input"></input>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
      </div>
    </div>
  )
}
