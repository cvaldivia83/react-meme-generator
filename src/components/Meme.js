export default function Meme() {
  return (
    <div className="meme">
      <form className="form">
        <input type="text" placeholder="Top Text" className="form--input"></input>
        <input type='text' placeholder="Bottom Text" className="form--input"></input>
        <button className="form--button">Get a new meme image</button>
      </form>
    </div>
  )
}
