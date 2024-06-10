import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { TiThMenuOutline } from 'react-icons/ti';
import { useCollapse } from 'react-collapsed';
import { routes } from '../../Routing';
import "./Navbar_style.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Navbar() {

  const [stan,setStan ] = useState(false)
  const [count,setCount] = useState(1)
  function Swap() {
    setCount(count + 1)
    if(count % 2 == 0) {
        setStan(true)
    }
    else {
        setStan(false)
    }
  }
  return (
    <div className="navbar" data-testid="navbarr">
      <Dropdown onClick={Swap}>
        <Dropdown.Toggle /*variant="success"*/ id="btnNav" data-testid='close-icon' >
            {stan ?  <IoCloseCircleOutline className="icons_nav"/>: <TiThMenuOutline className="icons_nav"/> }
        </Dropdown.Toggle>

        <Dropdown.Menu className='nav_menu' data-testid='menu-icon'>
            {routes
            .filter(route => route.path !== '/openbox')
            .map((route) => (
                <Dropdown.Item href={route.path} className="items_nav">{route.title}{route.icon}</Dropdown.Item>
                ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>


  );
}

//  