import {Container, Nav, Row} from "react-bootstrap";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Header = (props)=>{
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("username")===null);
    const history = useHistory();

    const logout = ()=>{
        localStorage.clear();
        setIsLoggedIn(false);
        history.push("/");
    }

    return <Nav fill onSelect={()=>logout()}>
        <Container>
           <Row>
               {
                   isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/profile">{localStorage.getItem("username")}</Nav.Link>
                   </Nav.Item>
               }

               {
                   !isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/">Login</Nav.Link>
                   </Nav.Item>
               }
               {
                   !isLoggedIn&&<Nav.Item>
                       <Nav.Link href="/register">Register</Nav.Link>
                   </Nav.Item>
               }
               {
                   isLoggedIn&&<Nav.Item>
                       <Nav.Link eventKey="logout">Logout</Nav.Link>
                   </Nav.Item>
               }
           </Row>
        </Container>
    </Nav>
}

export default Header;