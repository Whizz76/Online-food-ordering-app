import { useNavigate } from 'react-router-dom';
import './header.css'
function Header(){
  const navigate=useNavigate();
  const redirect=(e)=>{
    navigate("/nextpage/"+e);
  }
    return(
    <>
    <div className="row upper">
   <div className="row lo">
    <p className="blank col col-lg-8 col-md-7 col-sm-7" style={{maxWidth:"60%"}}></p>
    <a href="#" id="login" className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"10%"}}>Login</a>
    <a href="#" id="account" className="col col-lg-2 col-md-2 col-sm-2" style={{maxWidth:"25%"}}> Create Account</a>
  </div>
  <div className="row restlogo"> 
 <span id="restlogo">e!</span></div>
 <p id="tag">Find the best restaurants,cafes,and bars</p></div>
    <div className="container">
<h1>Quick Searches</h1>
<p id="hi"> Discover restaurants by type of meal</p>
</div>
<div className="xx">
<div className="row boxa xy">
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>redirect("breakfast")}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.1wj0CLOe3uyA-RDg_UNWGgHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}} >
    <p className="break">Breakfast</p><br/>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5 " style={{maxWidth:"70%"}} onClick={()=>redirect("lunch")}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.7zM5De3lBxbjmYk0Wq4DPQHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}}>
     <p className="break">Lunch</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>redirect("snacks")} >
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse4.mm.bing.net/th?id=OIP.0JfAey4ygouDjSN-sRgC9wHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" id="snacks" style={{maxWidth:"60%"}}>
     <p className="break">Snacks</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
   <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>redirect("dinner")}>
     <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.uVHVby3WidgE25MJlYBt8AHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Dinner</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
    </div>
{/*</div>
<div className="row boxa">*/}
{/*<div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}>
     <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse1.mm.bing.net/th?id=OIP.uVHVby3WidgE25MJlYBt8AHaLH&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8" style={{maxWidth:"60%"}}>
     <p className="break">Breakfast</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>*/}
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>redirect("drinks")}>
    <div  className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.EA0H10zDq9MNcJP9koMyoQHaKE&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
<div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Drinks</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
  <div className="row cola col-lg-3 col-md-5" style={{maxWidth:"70%"}}  onClick={()=>redirect("nightlife")}  >
    <div className="image col-lg-5 col-sm-4 col-md-4" style={{maxWidth:"40%"}}>
    <img src="https://tse2.mm.bing.net/th?id=OIP.Kiuu8-gpgsZ-FBi3fREg8wHaJ4&pid=Api&P=0&w=300&h=300" id="image" alt="Food image not loading"/></div>
    <div  className="side col-lg-7 col-sm-8 col-md-8"  style={{maxWidth:"60%"}}>
     <p className="break">Nightlife</p>
    <p className="sen"> Start your day with exclusive breakfast options</p>
  </div>
  </div>
  
</div>
</div>
    </>
    );
}
export default Header;