import Homepage from "./Component/Home";
import "./style.scss";
import { useState } from "react";
import Modal from "./Component/Modal/Modal";
const App = () => {
  const [modal, setmodal] = useState(false);
  const close =() =>  setmodal(!modal);
  
  return (
    <div className="app">
    {modal ? <Modal close={close} /> : ""}

      <Homepage setmodal={close}/>
    
    </div>
  );
};

export default App;
