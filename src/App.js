import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // Dark mode control
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (event) => {
    console.log(event.target.checked);
    if (event.target.checked === undefined) {
      const theme = event.target.classList[1].slice(4);
      if (theme === "primary") {
        setMode("dark");
        document.body.style.backgroundColor = "#0d6efd";
        showAlert("Dark mode has been enabled.", "success");
      } else if (theme === "secondary") {
        setMode("dark");
        document.body.style.backgroundColor = "#6c757d";
        showAlert("Dark mode has been enabled.", "success");
      } else if (theme === "success") {
        setMode("dark");
        document.body.style.backgroundColor = "#198754";
        showAlert("Dark mode has been enabled.", "success");
      } else if (theme === "danger") {
        setMode("dark");
        document.body.style.backgroundColor = "#dc3545";
        showAlert("Dark mode has been enabled.", "success");
      } else if (theme === "warning") {
        setMode("dark");
        document.body.style.backgroundColor = "#ffc720";
        showAlert("Dark mode has been enabled.", "success");
      }
    } else if (event.target.checked) {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
    }
  };
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />
      </div>
    </>
  );
}

export default App;
