import * as React from "react";
import './card.css';
import {Link} from 'react-router-dom';

function Card(props) {
    
    let image;
    //refactor this mess later
    if(props.project===1){
        image = <div className= 'image-1'></div>
    } else if (props.project ===2 ){
        image= <div className= 'image-2'></div>
    } else if (props.project ===3 ){
        image= <div className= 'image-3'></div>
    } else if (props.project ===4 ){
        image= <div className= 'image-4'></div>
    } else if (props.project ===5 ){
        image= <div className= 'image-5'></div>
    } else if (props.project ===6 ){
        image= <div className= 'image-6'></div>
    } else if (props.project ===7 ){
        image= <div className= 'image-7'></div>
    } else if (props.project ===8 ){
        image= <div className= 'image-8'></div>
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
