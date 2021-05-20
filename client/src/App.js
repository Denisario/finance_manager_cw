import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header";
import {useDispatch, useSelector} from "react-redux";
import ErrorPage from "./pages/ErrorPage";

const App = ()=>{
    const error = useSelector(state=>state.error);
    const dispatch = useDispatch();
    let socket = new WebSocket('ws:/localhost:4000');

    socket.onopen = ()=>{
        console.log("WS works");
    }

    socket.onmessage = (ms)=>{
        dispatch({type: "GET_ERROR", payload: ms.data});
    }

    return (
     <div>
         <BrowserRouter>
             <Header></Header>
             <AppRouter></AppRouter>
         </BrowserRouter>
         {error.showError&& <ErrorPage msg={error.error}></ErrorPage>}
     </div>
  )
}

export default App;
