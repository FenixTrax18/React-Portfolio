import React from "react";
import MyFace from "../../assets/J&K.jpg";

function Face() {
    return(
        <div className="image">
            <img src={MyFace} alt="My face" className="img-thumbnail" />
        </div>
    );
}

export default Face;


