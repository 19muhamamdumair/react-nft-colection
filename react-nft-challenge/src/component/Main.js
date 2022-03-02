import React, { useState, useEffect } from "react";
import instagramLogo from "../assests/owner/instagram.png";
import twitterLogo from "../assests/owner/twitter.png";
import moreIcon from "../assests/owner/more.png";
import "./Main.css";
const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]); //page will be update if punkListData or selectedPunk changes
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "white" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                activePunk.owner.profile_img_url
              }
              alt=""
            ></img>
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerAdress">{activePunk.owner.address}</div>
              <div className="ownerHandle">U M A I R</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
