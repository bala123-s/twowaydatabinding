import './index.css'
import React,{Fragment} from "react";



 import 'bootstrap/dist/css/bootstrap.css'
//import Fetching from './Components/Fetching/Fetching';
//import TwowayData from './Components/TwoWayDataBinding/TwowayData';
//bootstrap  installation
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import ShoppingCort from "./Components/ShopingCart/ShoppingComponent"
//import TwoWayDataBinding from "./Components/TwoWayDataBinding/TwoWayDataBinding"
import MultipleWayData from './Components/TwoWayDataBinding/MultipleWayData'


let App = () => {
    return(
      <Fragment>
       {/* <TwowayData/> */}
    {/* <Fetching/> */}
    {/* <ShoppingCort/> */}
      {/* <TwoWayDataBinding/> */}
      <MultipleWayData/>
      </Fragment>
    );
}
export default App;





