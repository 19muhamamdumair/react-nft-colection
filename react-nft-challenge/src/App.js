import "./App.css";
import Main from "./component/Main";
import Header from "./component/Header";
import CollectionCard from "./component/CollectionCard";
import React ,{ useState, useEffect } from "react";
import axios from "axios";
import Punklist from "./component/Punklist";
/*usestate: to acess open sea data and store in the array 
useeffect:to pull data data and make and api request*/
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x102c5E6c35B4CE4c3074B705FB6862bFDB6f858D&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App;
