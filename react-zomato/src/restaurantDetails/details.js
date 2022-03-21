import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Loading from "../Loading/loading";
import './details.css';
import Allnav from "../allnav/allnav";
function Details(){
    
   
    const {id}=useParams();
    const [restaurant,setRestaurant]=useState();
    const [bi,Setbi]=useState();
    const [complete,Setcomplete]=useState(undefined);
    const reff=React.useRef(null);
    const refff=React.useRef(null);
    function addClasses(){
        reff.current.classList.add("no");
        refff.current.classList.remove("no");
    }
    function removeClasses(){
        reff.current.classList.remove("no");
        refff.current.classList.add("no");
    }
    /*const navRef=React.useRef(null);
    const onRemoveClick=(e)=>{
        e.current.classList.remove("no");
    }*/
    
    const options={
        method:'get',
        headers:{'content-type':'application/json'},
    }
    const ur="http://localhost:3200/getbyid/"+id;

    useEffect(()=>{
        fetch(ur,options)
		.then(res=>res.json())
		.then((result)=>{
			setRestaurant(result);
            Setbi(result.thumb);
            Setcomplete(true);
		});

    },[]);
    
    
    return(
        <>
        {!complete ?(
            <>
            <Loading />
            </>
        ):(
            <>
            <Allnav/>
       
       <div id="frimg" style={{backgroundImage:`url(${bi})`}}>
         </div>
         <h1 id="nor">{restaurant? restaurant.name : ''}</h1>
         <div id="oac">
             <h3 onClick={addClasses}>Overview</h3><h3 onClick={removeClasses} >Contact</h3><button>Place order</button></div>
             <hr id="horline"/>
       <div className="ov" ref={refff}>
           <h2>About this place</h2>
           <h3>Cuisine</h3>
           <p>{restaurant?restaurant.Cuisine[0].name : ''},{restaurant?restaurant.Cuisine[1].name : ''}</p>
           <h3>Average Cost</h3>
           <p><>&#8377;</>{restaurant ? restaurant.cost : ''} for two people (approx.)</p>
       </div>
       <div className="ov no" ref={reff} >
           <h2>About this place</h2>
           <h3>Address</h3>
           <p id="addr">{restaurant?restaurant.address: ''},India</p>
           <h3 style={{visibility:"hidden"}}>Average Cost</h3>
           <p style={{visibility:"hidden"}}><>&#8377;</>{restaurant ? restaurant.cost : ''} for one person</p>
       
       </div>
            </>
            
        )}
       
        </>
    );
}
export default Details;