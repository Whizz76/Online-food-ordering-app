import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './allnav.css'

function Allnav(){
    const {e}=useParams();
    var [changestyle,setchangestyle]=useState([]);
   
    function stylechange(){
        changestyle={
            display:"block"
        }
        setchangestyle(changestyle);
        console.log("clicked me!");
        
    }
    return(

        <>
        <div id='homenavbar'>
            <div id="homelogo">
                <h1>e!</h1>
                </div>
                <div id="homeaccount">
                    <h4>Login</h4>
                    <h5>Create Account</h5>
                    <i className='fa fa-reorder' onClick={stylechange}>open</i>
                    </div>

        </div>
        
        </>
    )
}

export default Allnav;