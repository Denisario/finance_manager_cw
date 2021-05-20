import {Button, Container, Nav, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Header = (props)=>{
    const history = useHistory();
    const user = useSelector(state=>state.user);
    const dispatch = useDispatch();

    const logout = (e)=>{
        e.preventDefault();
        dispatch({type: "LOG_OUT"});
        localStorage.clear();
        history.push("/login");
        window.location.reload();
    }

    return <Nav fill onSelect={()=>{logout()}}>
        <Container>
           <Row>
               {
                   (localStorage.getItem("id")||!user.loggedIn)&&<Nav.Item>
                       <Nav.Link href="/profile">{localStorage.getItem("username")}</Nav.Link>
                   </Nav.Item>
               }

               {
                   (!localStorage.getItem("id")||user.loggedIn)&&<Nav.Item>
                       <Nav.Link href="/login">Login</Nav.Link>
                   </Nav.Item>
               }
               {
                   (!localStorage.getItem("id")||user.loggedIn)&&<Nav.Item>
                       <Nav.Link href="/register">Register</Nav.Link>
                   </Nav.Item>
               }
               {
                   (localStorage.getItem("id"))&&<Button onClick={(e)=>{logout(e)}}>Logout</Button>
               }
           </Row>
        </Container>
    </Nav>
}

export default Header;