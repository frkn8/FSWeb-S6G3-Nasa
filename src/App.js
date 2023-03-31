import React from "react";
import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import BiComponent from "./components/BiComponent";
function App(){
const[apodData, setApodData] = useState("asdfas");
const[datePicker, setDatePicker] = useState("asdfas");

useEffect(() => {
  
  axios.get("https://api.nasa.gov/planetary/apod", {
  params: {
    api_key: "rNEdFEm1XoNcb1ak5cMltkafZEzVuX4yrnp6KCHr"
  }
})
.then(function (response) {
  console.log(response);
  setApodData(response.data);
})
.catch(function (error) {
  console.log(error);
})
.finally(function () {
}); 
console.log("sayfam render oldu");
}, [datePicker]);

  return (
    <div className="App">
  <BiComponent
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );

  }
export default App;
