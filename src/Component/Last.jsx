const Lastpage = (props) => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        The Mastercard Bamboo Monitor Riser is a Sturdy and stylish platform
        that elevates Your screen to a more Comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comforatable while at work, helping you stay focused on
        the task at hand.
      </p>

      <p>
        Featuring artisan craftmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand{" "}
      </p>
       <div className="card">
        <div className="name">
          <h2>Bamboo Stand</h2>
          <p>Pledge $25 or more</p>
        </div>
        <p>You get  an ergonomic stand made of Natural bamboo. You`ve helped us launch  our promotion campaign, adn you`ll be added to a specific Backer memeber it  </p>
       <div className="action">
        <h1>101 <p>left</p></h1>
        <button onClick={props.setmodal}>Select Reward</button>
       </div>
       </div>
       <div className="card">
        <div className="name">
          <h2>Black addition</h2>
          <p>Pledge $75 or more</p>
        </div>
        <p>You get  a Black Special  Edition computer stand and a personal thank you. You`ll  be added to our Backer  member list. Shipping is included   </p>
       <div className="action">
        <h1>64 <p>left</p></h1>
        <button onClick={props.setmodal}>Select Reward</button>
       </div>
       </div>
       <div className="card">
        <div className="name">
          <h2>Mahogany  Special Edition</h2>
          <p>Pledge $200 or more</p>
        </div>
        <p>You  get two Special Edition Mahogany and the Best stands all over the world.Shipping included </p>
       <div className="action">
        <h1>0 <p>left</p></h1>
        <button>Out of Stack</button>
       </div>
       </div>
    </div>
  );
};

export default Lastpage;
