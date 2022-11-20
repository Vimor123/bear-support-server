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
        <div>
            <h1>
                Hello
            </h1>
            <div>
                <img src={"/bears/" + bearPic} alt={"sexy"}></img>
            </div>
            <div>
                <button onClick={askforNewPic}>NEW BEAR</button>
            </div>
        </div>
    );
}

export default App;
