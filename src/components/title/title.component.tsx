import React from "react";
import "./title.style.scss";

interface props {
    text: string
}
const Title = (props: props): JSX.Element => {
    return (
        <h1 className="title-wrapper">
            <span>
                {props.text}
            </span>
        </h1>
    )
}

export default Title;