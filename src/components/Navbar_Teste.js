import React from 'react';
import {Link} from "react-router-dom";

function Navbar_Teste() {
  return (
    <div className='navigation-menu'>
        <ol>
            <li><Link to={"/Emilia_Kunst"}>cap1</Link></li>
            <li><Link to={"/"}>home</Link></li>
        </ol>
    </div>

  )
}

export default Navbar_Teste