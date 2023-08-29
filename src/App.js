import axios from "axios";
import Home from "./components/Home";
import {Routes,Route,Link} from "react-router-dom"; 
import FirstForm from "./components/First-Form/FirstForm";
import {StyledHeader} from "./components/styledComps";
import {useState} from "react"; 
import { useVisible } from "./components/mainHooks/useVisible";

const initial = false;
export default function App() {
  const [visible,setVisible] = useVisible("visible",initial)
  return (
    <div>
      <StyledHeader>
      <Link to = "/">A Comprehensive Repo of Forms</Link>
      </StyledHeader>
      <Routes>
        <Route path = "/" 
        element = {<Home visible = {visible} setVisible = {setVisible} />}/>
        <Route path = "form-1" element = {<FirstForm />} />
      </Routes>
    </div>
  )
}
