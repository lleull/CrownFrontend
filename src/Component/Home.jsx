import Header from "./Header";
import Lastpage from "./Last";
import logo from "./logo-mastercraft.svg";
import bookmark from "./icon-bookmark.svg";

const Homepage = (props) => {
 
  return (
    <>
     <Header />
    <div className="section">
   
      <div className="cards">
        <div className="card">
          <img className="logoimg" src={logo} alt="s" />
          <h2>MasterCraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & Handcrafted monitor stand to reduce neck and eye
            strain
          </p>
          <div className="actions">
            <button>Back this project </button>
            <div className="book">
              <img src={bookmark} alt="sd" />
              <h3>Bookmark</h3>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="pays">
          <div className="pay">
            <h2 style={{display: "flex"}}>$8233</h2>
            <p>of $1000,000 backed</p>
          </div>
          <div className="pay">
            <h2 style={{display: "flex"}}>5,007</h2>
            <p>total backed</p>
          </div>
          <div className="pay">
            <h2 style={{display: "flex"}}>56</h2>
            <p>days left</p>
          </div>

          </div>
          <div className="process">
            <div className="stage"></div>
          </div>
          
          
        </div>
      </div>
      <Lastpage setmodal={props.setmodal} />
    </div>
    </>
  );
};

export default Homepage;
