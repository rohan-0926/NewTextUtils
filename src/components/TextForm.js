import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    // console.log("Upper Case Was Clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert("Converted to UpperCase!","success");

  }

  const handleLoClick = () =>{
    // console.log("Lower Case Was Clicked." + text);
    let LowText = text.toLowerCase();
    setText(LowText);

    props.showAlert("Converted to LowerCase!","success");

  }


  const handleTitleClick = () =>{
    let newText = text.toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    setText(newText);

    props.showAlert("First Letter of Each word is Capitalize","success");

  }


  const handleClearClick = () =>{
    let newText = "";
    setText(newText);

    props.showAlert("Cleared the text..","success");

  }





  const handleOnChange = (event) =>{
    // console.log("On Changed.");
    setText(event.target.value);
  }
    
  const [text, setText]=useState('');


  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Covert to Uppercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Covert to Lowercase</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleTitleClick}>Title</button>
          <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview : </h2>
        <p>{text.length>0?text:"Enter Something to Preview it here."}</p>
      </div>
    </>
  )
}
