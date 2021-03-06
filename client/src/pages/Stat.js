import {Container, Row} from "react-bootstrap";
import {Pie} from "react-chartjs-2";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchFinanceStat} from "../store/asyncActions/stat";
import DatePicker from "react-datepicker";

const Stat = (props)=>{
    const data = useSelector(state=>state.stat.data);
    const dates = useSelector(state=>state.date);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchFinanceStat(dates.startDate, dates.finishDate))
    }, [dispatch,dates.startDate, dates.finishDate]);

    return <Container>
        <Row>
            Start <DatePicker  selected={dates.startDate} onChange={(date)=>{
            dispatch({type: "CHANGE_START_DATE", payload: date});
        }}/>
            Finish<DatePicker  selected={dates.finishDate} onChange={(date)=>{
            dispatch({type: "CHANGE_FINISH_DATE", payload: date});
        }}/>
        </Row>
        <Row>
            <Pie height={10} width={10} data={{labels:[data.map(el=>el.name)], datasets:[
                    {
                        data:data.map(el=>+el.sum),
                        backgroundColor: data.map(el=>'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase())
                    }
                ],options: {
                    responsive: false
                }}}>

            </Pie>
        </Row>
    </Container>
}

export default Stat;