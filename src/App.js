import logo from "./logo.svg";
import "./App.css";
import PriceCard from "./priceCard";
import { useState } from "react";

function App() {
  let list=[
    {
      plan:"Free",price:"0",
      listitems:[
        {
          itemName:"Single User",
          isDisabled:false
        },
        {
          itemName:"5GB Storage",
          isDisabled:false
        },
        {
          itemName:"Unlimited public projects",
          isDisabled:false
        },
        {
          itemName:"Community Access",
          isDisabled:false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled:true
        },
        {
          itemName:"Dedicated phone support",
          isDisabled:true
        },
        {
          itemName:"Free Subdomains",
          isDisabled:true
        },
        {
          itemName:"Monthly status report",
          isDisabled:true
        },
      ]
    },
    {
      plan:"Pro",price:"8",
      listitems:[
        {
          itemName:"Five User",
          isDisabled:false
        },
        {
          itemName:"50GB Storage",
          isDisabled:false
        },
        {
          itemName:"Unlimited public projects",
          isDisabled:false
        },
        {
          itemName:"Community Access",
          isDisabled:false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled:false
        },
        {
          itemName:"Dedicated phone support",
          isDisabled:false
        },
        {
          itemName:"Free Subdomains",
          isDisabled:false
        },
        {
          itemName:"Monthly status report",
          isDisabled:true
        },
      ]
    },
    {
      plan:"Plus",price:"40",
      listitems:[
        {
          itemName:"Multi User",
          isDisabled:false
        },
        {
          itemName:"150GB Storage",
          isDisabled:false
        },
        {
          itemName:"Unlimited public projects",
          isDisabled:false
        },
        {
          itemName:"Community Access",
          isDisabled:false
        },
        {
          itemName:"Unlimited Private Projects",
          isDisabled:false
        },
        {
          itemName:"Dedicated phone support",
          isDisabled:false
        },
        {
          itemName:"Free Subdomains",
          isDisabled:false
        },
        {
          itemName:"Monthly status report",
          isDisabled:false
        },
      ]
    }
  ]
  const[currentPlan,setCurrentPlan]=useState([])
  let handleSelectedBtn=(plan)=>{
    setCurrentPlan(plan);
  }
  return (
    <>
      <section class="pricing py-5">
        <div class="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4>Selected Plan:-{currentPlan}</h4>

            </div>
          </div>
          <div class="row">
            {
              list.map((products)=>{
                return <PriceCard data={products} btn={handleSelectedBtn}></PriceCard>
              })
            }
            
            
          </div>
        </div>
      </section>

    </>
  )
}




export default App
