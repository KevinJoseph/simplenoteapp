import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { faQuoteLeft, faQuoteRight, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const NavHome = () => {

    return (
        <>
            <br></br>
            <Navbar bg="light" >
                <Container>
                    <Navbar.Brand><FontAwesomeIcon icon={faQuoteLeft} /> <NavLink style={{textDecoration:'none', color:'black'}} to='/note/list' end>Notes - XXXXXXX</NavLink>    <FontAwesomeIcon icon={faQuoteRight} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#features" style={{ color: 'black' }}> <NavLink style={{textDecoration:'none', color:'black'}} to='/note/add' end> <FontAwesomeIcon icon={faCirclePlus} /> New</NavLink> </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavHome;