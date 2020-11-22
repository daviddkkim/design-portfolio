import * as React from "react";
import './card.css';


function Card(props) {
    var image;
    if (props.image) {
        image = <div>{props.image}</div>
    }
    //const image = ({props.image}) => <div>{this.props.image}</div>
    return (
            <div className='card' >
                <div className='image'>
                    
                </div>
                <div className='content'>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <p>asdasd</p>
                </div>
            </div>
    )
  }

export default Card;
