import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header";

const App = ()=>{
  return (
     <div>
         <Header></Header>
         <BrowserRouter>
             <AppRouter></AppRouter>
         </BrowserRouter>
     </div>
  )
}

export default App;
