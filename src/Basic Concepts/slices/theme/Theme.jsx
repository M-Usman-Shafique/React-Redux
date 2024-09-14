import React, { useState} from "react"
import { useDispatch } from "react-redux";
import { changeColor } from './themeSlice'

function Theme() {
  const [color, setColor] = useState('white')
  const dispatch = useDispatch();

  return (
    <div className="field-box">
      <input onChange={(e) => setColor(e.target.value)} placeholder="Enter color name" type="text" className="field"/>
      <button onClick={() => {dispatch (changeColor(color))}}>Color</button>
    </div>
  );
}

export default Theme;
