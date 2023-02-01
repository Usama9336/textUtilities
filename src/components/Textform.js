import React, {useState} from 'react'
//usestate for class based components
//import PropTypes from 'prop-types'
//shortcut key rfc to import
//function to ^^^ set
//default value
export default function Textform(props) {
  const handleupclick=()=>{
    console.log("Uppercase is clicked");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to UpperCase!","success");
  }
  const handlelclick=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to LowerCase!","success");
  }
  const handleClclick=()=>{
    setText('');
    props.showalert("Text Cleared!","success");
  }
  const handleonclick=(event)=>{
    console.log("On click");
    setText(event.target.value);
  }
  //these are hooks
  const [text,setText]=useState('Enter the text here');
  //text="new text";//wrong way to change state
 //setText("new text");
  return (  
    <>
    <div className='container' style={{color:props.mode==='light'?'#07013c':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text"  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#07013c'}} className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#07013c'}} onChange={handleonclick} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handlelclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClclick}>Clear Text</button>  
    </div>
    <div className="container my-3"  style={{color:props.mode==='light'?'#07013c':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>Time Taken = {0.008*text.split(" ").length}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Something in textbox above to preview it Here"}</p>
    </div>
    </>
  )
}
//bootstrap buttons
