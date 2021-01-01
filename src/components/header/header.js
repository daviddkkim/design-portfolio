import * as React from "react";
import './header.css';
import {ReactComponent as Logo} from '../../assets/logoSmall.svg';
import {
    Link
  } from "react-router-dom"
  import { HashLink } from 'react-router-hash-link';


function onHeaderItem(item) {
    console.log(item)
}

function Header( props ) {

    /* var items = Object.keys(props.navigation).map(function (i) {
        return props.navigation[i];
      }); */
    
    return (
            <div className= "header" >
                <Link to="/" className = "title" onClick = {() => onHeaderItem(props.title)}><Logo className='hovering'></Logo></Link>

                <div className = "navList">
                    <HashLink smooth to={"/#work"} className= "horizontal" key={'work'} onClick = {() => onHeaderItem('work')}> Work </HashLink>
                    <HashLink smooth to={"/#explore"} className= "horizontal" key={'explore'} onClick = {() => onHeaderItem('explore')}> Explorations </HashLink>                                        
{/*                     <HashLink to={"/About"} className= "horizontal" key={'about'} onClick = {() => onHeaderItem('about')}> About </HashLink>                    
 */}                </div>
            </div>
    )
  }

  
  export default Header;
