import React from "react";
import ak from '../image/ak.png';
import '../index.css';

export default function Image(props) {
    var imageUrl = '../image/ak.png';
    const style = {
        backgroundImage: `url(`+imageUrl+`)`,
        backgroundSize: `cover`,
        width: `120px`,
        height: `150px`,
    };
    return (
        <div className="image">
        {props.children}
        </div>
    );
}











