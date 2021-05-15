import {Col, Container, Nav, Row} from "react-bootstrap";
import {useState} from "react";

const Header = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logOut = (e)=>{
        e.preventDefault();
        localStorage.clear();
    }


    return <Nav fill onSelect={(item)=>setIsLoggedIn(true)}>
        <Container>
           <Row>
               {
                   !isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/profile">{localStorage.getItem("username")}</Nav.Link>
                   </Nav.Item>
               }

               {
                   isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/">Login</Nav.Link>
                   </Nav.Item>
               }
               {
                   isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/register">Register</Nav.Link>
                   </Nav.Item>
               }
               {
                   !isLoggedIn&&<Nav.Item>
                       <Nav.Link eventKey="logout">Logout</Nav.Link>
                   </Nav.Item>
               }
           </Row>
        </Container>
    </Nav>
}

export default Header;