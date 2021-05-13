import {Container, Row} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {Pie} from "react-chartjs-2";
import axios from "axios";

const IncomeItems = (props)=>{
    const itemId = useRef(props.match.params.id);

    const [item, setItem] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/income/${itemId.current}`).then(data=>data.data).then(data=>setItem(data[0]));
    },[setItem])
    console.log(item);
    return item?<Container>
        <Row>
            <div>Name:{item.header}</div>
        </Row>
        {
            item.income_items.map((el,id)=>{
                return <Row>
                    <div>Title: {el.title} Sum: {el.sum} Category: {el.category.name}</div>
                </Row>
            })
        }
        <Row>
            <Pie height={"10%"} width={"10%"}  data={{labels:[item.income_items.map(el=>el.title)], datasets:[
                    {
                        data:item.income_items.map(el=>el.sum),
                        backgroundColor: [
                            "#FF6384",
                            "#63FF84",
                            "#84FF63",
                            "#8463FF",
                            "#6384FF"
                        ]
                    }
                ]}}></Pie>
        </Row>
    </Container>:false;
}

export default IncomeItems;