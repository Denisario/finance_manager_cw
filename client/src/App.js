import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom"

const App = ()=>{
  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App;
