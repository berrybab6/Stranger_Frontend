// import React from 'react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as iIcons from 'bootstrap'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { SidebarData } from './sidebarData';
import { MDBBtn } from 'mdbreact';

import SubMenu from './subnav';
import { IconContext } from 'react-icons/lib';
import Sidebar from './sidebar';

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-end;
align-items: center;
`;
const NaVItem = ()=>{
    const [isAuthenticated, setAuthenticated ] = useState(false);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

 
    return(
  
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
             <Button variant="outline-success right" onClick = {showSidebar}>Menu</Button>
          
                                <Navbar.Brand href="#home">Hey, Stranger</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    {/* <Form inline> */}
                                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                                  {/* </Form> */}
                                </Navbar.Collapse>
                                <Sidebar />
                            </Navbar>

//      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//         <div className="container">
//         {/* <NavIcon to='#'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </NavIcon> */}
//                 <button class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
//     aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
//     <div class="animated-icon1"><span></span><span></span><span></span></div>
//   </button>
//   <i class="fas fa-bars"></i>
    
//           <Link className="navbar-brand" to={"/home"}>Hey, Stranger</Link>
//           <Link className="navbar-brand" to={"/home"}>Hey, Stranger</Link>
//           <div className="collapse navbar-collapse lela" id="navbarTogglerDemo02">
         
//         {(!isAuthenticated)?(<ul className="navbar-nav ml-auto">
//              <li className="nav-item">
//                 <Link className="nav-link" to={"/menu"}>Menu</Link>
//               </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to={"/home"}>Home</Link>
//                   </li>
//                   <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Signup</Link>
//               </li>
//             </ul>):(<ul className="navbar-nav ml-auto">
               
//               <li className="nav-item" >
//                 <Link className="nav-link" to={"/"}>Logout</Link>
//               </li>
//             </ul>)

//               } 
           

//           </div>
//         </div>
//       </nav> 

    );
            };
export default NaVItem;

