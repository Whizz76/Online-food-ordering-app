import { useEffect, useState } from 'react';
import Card from '../Restaurant/card';
import Navbar from '../navbar/navbar';
import Filter from '../Filter/filter';
import './home.css';
import Enterdata from '../data/data';
import { useParams } from 'react-router-dom';
function Home(){
    var {e}=useParams();
    var [restaurants,setRestaurants]=useState([]);
    var [location,setLocation]=useState([]);
    //var restname;
    var [restname,setRestName]= useState([]);
    const options={
        method:'get',
        headers:{'content-type':'application/json'},
    };
        
     var u="http://localhost:3200/getby/mealtype/q?mealtype="+e;

	useEffect(()=>{
		fetch(u,options)
		.then(res=>res.json())
		.then((result)=>{
			result=result.filter(r=>r.name);
			setRestaurants(result);
		});
	},[]);
    function filterRestaurantByLocation(event){
        location=(event.target.value).charAt(0).toUpperCase()+(event.target.value).slice(1);
        //location=location.charAt(0).toUpperCase()+restname.slice(1);
        setLocation(location);
        fetch("http://localhost:3200/home/query?name="+restname+"&locality="+location+"&mealtype="+e).then((res)=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                setRestaurants(result);
            
            
        });
       
        /*if(!restname){
            fetch("http://localhost:3200/restaurant/location/"+location).then((res)=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                console.log(result);
            
            
        });
        }
        else{
            fetch("http://localhost:3200/home/query?name="+restname+"&locality="+location).then(res=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                console.log(result);
            });
        }*/
        


    }
    function filterRestaurantByName(event){
        console.log(event.target.value);
        restname=(event.target.value).charAt(0).toUpperCase()+(event.target.value).slice(1);
        //restname=restname.charAt(0).toUpperCase()+restname.slice(1);
        console.log(restname);
        setRestName(restname);
    
        fetch("http://localhost:3200/home/query?name="+restname+"&locality="+location+"&mealtype="+e).then(res=>res.json()).then((result)=>{
                result=result.filter(r=>r.name);
                setRestaurants(result);
            });
    }

   


    return(
        <>
        <Navbar/>
        {/*<Enterdata change={(event)=>filterRestaurantByLocation(event)}  changeIt={(event)=>filterRestaurantByName(event)} />*/}
        <div id="filterandrest">
           
      <div>
          <Filter />
    </div>
        
      <div>
        
        {
            restaurants.length>0 && restaurants.map(r=>
                <Card item={r}/>) 

        }
        </div>
      </div>
        
        </>
    );
}
export default Home;