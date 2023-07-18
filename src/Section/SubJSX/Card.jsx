import React from 'react';
import '../../CSS/main.css';


function Card(props) {
    return (
        <div className="card">
            <div className="image">
                <img src={props.imgsrc} alt="" />
            </div>
            <div className="content">
                <h3 className="title">{ props.title }</h3>
                <p className="paragraph">{ props.paragraph }</p>
            </div>
        </div>
    )
}


export default Card;