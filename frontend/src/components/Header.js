import React from 'react';
// import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import { useHistory } from 'react-router-dom';



const Header = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const profileScreenHandler = () => {
    history.push('/profile')
    console.log("Clicked profile Use History action")
  }


  return (

  <header>
  <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect >
  
  <Container>

    <Link to='/' >
      <Navbar.Brand > Tech ProShop </Navbar.Brand> 
    </Link>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="ms-auto">

        <Link to='/cart' className='fas fa-shopping-cart' style={{color: 'white'}}>
          Cart
        {/* <Nav.Link > <i className='fas fa-shopping-cart'></i> 
        Cart </Nav.Link> */}

        </Link>

        {userInfo ? (
          <NavDropdown title={userInfo.name} className='fas fa-user' id='userName'>
            <Link to='/profile'  
            >
                <NavDropdown.Item 
                className='fas fa-user'
                onClick={profileScreenHandler}
                >Profile</NavDropdown.Item>
            </Link>

            <NavDropdown.Item 
            onClick={logoutHandler} 
            className='fas fa-user'>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : <Link to='/login' 
        className='fas fa-user' 
        style={{color: 'white'}}> 
        Sign In
      </Link> }

        
      </Nav>

    </Navbar.Collapse>
  </Container>

</Navbar>
  </header>
  )
};

export default Header;

