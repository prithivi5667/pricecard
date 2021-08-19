import React from "react";

function PriceCard(props) {

    
    return (
        <>
            <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                    <div class="card-body">
                        <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                        <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
                        <hr />
                        <ul class="fa-ul">
                            {
                                props.data.listitems.map((keys)=>{
                                    return keys.isDisabled ? 
                                    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{keys.itemName}</li> :
                                    <li><span class="fa-li"><i class="fas fa-check"></i></span>{keys.itemName}</li>
                                })
                            }
                        </ul>
                        <a href="#" class="btn btn-block btn-primary text-uppercase" onClick={()=>{props.btn(props.data.plan)}}>Button</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceCard;

{/* <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.listitems[0].itemName}</li>
    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.listitems[1].itemName}</li>                       
    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.listitems[2].itemName}</li>
    <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.listitems[3].itemName}</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.listitems[4].itemName}</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.listitems[5].itemName}</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.listitems[6].itemName}</li>
    <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.listitems[7].itemName}</li> */
}