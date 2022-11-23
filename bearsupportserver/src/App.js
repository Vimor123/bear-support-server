import './App.css';
import React from "react";
import bearDataJSON from "./assets/bearData.json";

function App() {

    function chooseNewPic() {
        const bearList = bearDataJSON["bears"];
        return bearList[Math.floor(Math.random() * bearList.length)];
    }

    const [bearPic, setBearPic] = React.useState(chooseNewPic);

    function askforNewPic() {
        setBearPic(chooseNewPic);
    }

    return (
        <div className={"content"}>
            <div className={"head-div"}>
                <h1 className={"title"}> Bear Support Den </h1>
                <span> A place where you can look at cute and sexy bears when you're feeling down. </span>
            </div>
            <div className={"bear-image-container"}>
                <img className={"bear-image"} src={"/bears/" + bearPic} alt={"sexy"}></img>
            </div>
            <div>
                <button onClick={askforNewPic}>NEW BEAR</button>
            </div>
        </div>
    );
}

export default App;
