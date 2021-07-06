import React from 'react';
import {Navbar,Container} from 'react-bootstrap';
import {Link} from "react-router-dom";


class Header extends React.Component {


    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Cocktail API</Navbar.Brand>
                        <Link to='/'>Home</Link>
                        <Link to='/Faviourt'>Faviourt</Link>
                    </Container>
                </Navbar>
            </>
        )
    }
}

export default Header;