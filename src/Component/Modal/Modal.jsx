import "./modal.css";
import clse from "./icon-close-modal.svg";
import { useState } from "react";
import Successmoda from "./Successmoda";
const Modal = (props) => {
  const [card1, setcard1] = useState(false);
  const [card2, setcard2] = useState(false);
  const [card3, setcard3] = useState(false);
  const [succes, setsuccess] = useState(false);
  const hcard1 =() => setcard1(!card1)
  const hcard2 =() => setcard2(!card2)
  const hcard3 =() => setcard3(!card3)

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="firstpart">
          <h2>Back this project</h2>
          <img onClick={props.close} src={clse} alt="as" />
        </div>
        <p>
          Want to support us in bringing MasterCraft Bamboo Monitor Riser out in
          the world
        </p>
        {/* card */}
        <div className={card1? "card3" : "card"}>
          <div className="start">
            <div onClick={hcard1}  className={card1 ? "radios" : "radio"}></div>
            <h3>Pledge with no Reward</h3>
          </div>
          <p>
            Choose to support of with a no reward if you simply believe in our
            project. As a backer, You will be signed up to recieved product
            updates via email
          </p>
          {card1  ? (
            <div className="enter">
              <p>Enter Pledge</p>
              <div className="enterbtn">
                <input type="text" placeholder="$|" required />
                <button onClick={() => setsuccess(true)}>Continue</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div  className={card2  ?"card3" : "card"}>
          <div className="start">
            <div onClick={hcard2}   className={card2 ? "radios" : "radio"}></div>
            <h3>Bamboo stand </h3>
            <h3>Pledge $25 0r more </h3>
            <h2
            
            >
              101 <p>left</p>
            </h2>
          </div>
          <p>
            You get an economic Stand made of natural bamboo, You`ve Helped us
            to launch our promotion campaign, and you`ll be added to a special
            list of backer{" "}
          </p>
          <h4>
              101 <p>left</p>
            </h4>
          {card2? (
            <div className="enter">
              <p>Enter Pledge</p>
              <div className="enterbtn">
                <input type="text" placeholder="$|" required />
                <button onClick={() => setsuccess(true)}>Continue</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div   className={card3 ? "card3" : "card"}>
          <div className="start">
            <div onClick={hcard3}  className={card3 ? "radios" : "radio"}></div>
            <h3 style={{ color: "black" }}>Black Edition Stand</h3>
            <h3>Pledge $75 or more</h3>
            <h2
           
            >
              64 <p>left</p>
            </h2>
          </div>
          <p>
            Your get a black Special Edition computer and a pesonal thank you{" "}
            <br /> You`ll be added to our Backer member list. Shipping is
            Included
          </p>
          <h4
             >
             64 <p>left</p>
            </h4>
          {card3? (
            <div className="enter">
              <p>Enter Pledge</p>
              <div className="enterbtn">
                <input type="text" placeholder="$|" required />
                <button onClick={() => setsuccess(true)}>Continue</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="card">
          <div className="start">
            <div className="radio"></div>
            <h3 style={{ color: "gray", textAlign:"center" }}>Mahongany Special Edition</h3>
            <h3>Pledge $200 or more</h3>
          
          </div>
          <p>
            Choose to support of Mahongany Special Edition a no reward if you
            simply believe in our project. As a backer, You will be signed up to
            recieved product updates via email
          </p>
        </div>
      </div>
      {succes  ? <Successmoda/> : ""}
    </div>
  );
};

export default Modal;
