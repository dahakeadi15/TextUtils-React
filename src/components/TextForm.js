import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleRmExSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied!", "success");
    // const copyBtn = event.target;
    // copyBtn.classList.add("disabled");
    // copyBtn.innerText = "Copied!";
    // setInterval(() => {
    //   copyBtn.classList.remove("disabled");
    //   copyBtn.innerText = "Copy Text";
    // }, 2500);
  };

  const handleClearClick = () => {
    setText("");
    setWordCount(0);
    props.showAlert("Cleared the text area!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    const wordsArr = event.target.value.split(" ").filter((element) => {
      return element !== "";
    });
    setWordCount(wordsArr.length);
  };

  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  return (
    <>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleRmExSpacesClick}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} id="copy-btn" className="btn btn-primary m-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-outline-primary m-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743" }}>
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
