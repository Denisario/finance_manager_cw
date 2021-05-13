import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Row} from "react-bootstrap";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Categories from "./Categories";
import Income from "../components/Income";

const Profile = (props)=>{
    const dispatch = useDispatch();
    const history = useHistory();
    const addMoneyModal = useSelector(state=>state.modals.addMoneyModal);
    useEffect(()=>{
        dispatch({type: "GET_USER"})
    }, [dispatch]);

    const logout =(e)=>{
        e.preventDefault();
        localStorage.clear();
        history.push("/");
    }



    const showAddMoneyModal = (e)=>{
        e.preventDefault();
        dispatch({type:"SHOW_ADD_MONEY_MODAL"})
    }
    return <Container>
        <Row>
            <div>Welcome {localStorage.getItem("username")}</div>
            <Button onClick={()=>history.push("/finances")}>Finances</Button>
            <Button onClick={(e)=>showAddMoneyModal(e)}>Add money</Button>
            <Button onClick={(e)=>logout(e)}>Log out</Button>
            <Categories></Categories>
            <Income show={addMoneyModal} onHide={()=> dispatch({type:"SHOW_ADD_MONEY_MODAL"})}></Income>
        </Row>
    </Container>
}

export default Profile;