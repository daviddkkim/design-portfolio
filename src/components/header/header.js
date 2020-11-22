import * as React from "react";
import './header.css';
import {
    Link
  } from "react-router-dom"


function onHeaderItem(item) {
    console.log(item)
}

function Header( props ) {

    var items = Object.keys(props.navigation).map(function (i) {
        return props.navigation[i];
      });

    return (
            <div className= "header" >
                <Link to="/" className = "title" onClick = {() => onHeaderItem(props.title)}>{props.title}</Link>

                <div className = "navList">
                    {
                        items.map(item =>
                        <Link to={"/" + item.toLowerCase()} className= "horizontal" key={item} onClick = {() => onHeaderItem(item)}> {item} </Link>                    
                        )
                    }
                </div>
            </div>
    )
  }

  
  export default Header;
