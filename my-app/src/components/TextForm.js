import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let nextext= text.toUpperCase();
        setText(nextext)
    }

    const hanldeOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text,setText] = useState("Enter Text Here");
    // text= "new text" // wrong way to set a text
    // setText= "new text" // correct way to set a text
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={hanldeOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    
    )
}
