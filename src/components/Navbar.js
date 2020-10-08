import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

const menus = [
  {
      name : 'Home',
      to : '/',
      exact : true
  },
  {
    name : 'Students',
    to : '/students',
    exact : true
  }
];

const MenuLinks = ({ lable,to,exact }) => {
  return(
    <Route path={to} exact={exact} children={({match})=>{
      const active = match ? 'active' : '';
      return(
        <li className={active}>
          <Link to={to} exact={exact.toString()}>
            {lable}
          </Link>
        </li>
      )
    }}/>
  )
};

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <ul>
          {menus.map((menu,index) => <MenuLinks key={index} to={menu.to} path={menu.path} lable={menu.name} exact={menu.exact}/>
          )}
        </ul>
      </div>
    );
  }
}

export default Navbar;