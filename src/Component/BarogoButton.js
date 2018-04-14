import React from "react";

const BarogoButton = ({className, title, onClickFunction, imageSource}) => {
    return <button className={className} onClick={onClickFunction} >
        <img src={imageSource}/>
    </button>;
};

export default BarogoButton;