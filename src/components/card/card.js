import * as React from "react";
import './card.css';
import {Link} from 'react-router-dom';

function Card(props) {
    
    let image;
    if(props.project==1){
        image = <div className= 'image-1'></div>
    } else if (props.project ==2 ){
        image= <div className= 'image-2'></div>
    }

    const link = props.link? props.link: props.title;
    return (
       
            <div className='card' onClick={(e) => (window.location = link)} >
                <Link to={'/'+ link}>
                {image}
                
                <div className='content'>
                    <span>{props.tagLine}</span>
                    <h2 className='title-line'>{props.title}</h2>
                    <span className='description-line'>{props.content}</span>
                </div>
                </Link>
            </div>
       
    )
  }

export default Card;
