import React from "react";
import bearPic from "../../public/bears/sexy.jpeg";

function Bear() {
    return(
        <img src={require(bearPic)} alt="sexyBear"></img>
    );
}

export default Bear;