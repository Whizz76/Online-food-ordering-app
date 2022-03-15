import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './navbar.css'

function Navbar(){
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
        <div id="i" style={changestyle}>
            <h3>Login</h3>
            <h3>Create account</h3></div>
            <div id="filterSmall"><h3>Filter</h3> <h3 id="gts"><>&gt;</></h3></div>
        <h1 id="homeintro">Available {e} restaurants</h1>
        </>
    )
}

export default Navbar;