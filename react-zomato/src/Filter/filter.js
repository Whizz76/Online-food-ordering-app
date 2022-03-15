import './filter.css';

function Filter(){
	
	
    return(
        <>
		
		
		<div id="filter">
			<h3>Filter</h3>
			<h5>Select location</h5>
			<select>
				<option value={"Mumabi"}>Mumbai</option>
				<option value={"Delhi"}>Delhi</option>
				<option value={"Kolkata"}>Kolkata</option>
				<option value={"Chandigarh"}>Chandigarh</option>
				<option value={"Banglore"}>Banglore</option>
				
			</select>
			<br/>
			<h5>Cuisines</h5>
			<input type={"checkbox"} name="cuisine" value={"North Indian"} id="cuisineN" /><label htmlFor="cuisineN">
			North Indian</label><br />
			<input type={"checkbox"} name="cuisine" value={"South Indian"} id="cuisineS"/><label htmlFor="cuisineS">
			South Indian</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Chinese"} id="cuisineC" /><label htmlFor="cuisineC">
			Chinese</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Street food"} id="cuisineS" /><label htmlFor="cuisineS">
			Street food</label>
			<br />
			<input type={"checkbox"} name="cuisine" value={"Fast food"} id="cuisineF" /><label htmlFor="cuisineF">
			Fast food</label>
			<br />
			<h5>Cost</h5>
			<input type={"radio"} name="cost" value={"less"} id="less" /><label htmlFor="less"> less than <>&#8377;</> 500</label><br/>
			<input type={"radio"} name="cost" value={"ft"} id="ft" /><label htmlFor="ft"> <>&#8377;</> 500 to <>&#8377;</> 1000</label><br/>
			<input type={"radio"} name="cost" value={"tf"} id="tf" /><label htmlFor="tf">  <>&#8377;</> 1000 to <>&#8377;</> 1500</label><br/>
			<input type={"radio"} name="cost" value={"ftt"} id="ftt" /><label htmlFor="ftt">  <>&#8377;</> 1500 to <>&#8377;</> 2000</label><br/>
			<input type={"radio"} name="cost" value={"more"} id="more" /><label htmlFor="more"> more than <>&#8377;</> 2000</label><br/>
			<h5>Sort</h5>
			<input type={"radio"} name="sort" value={"low"} id="low" /><label htmlFor="low">low to high</label><br/>
			<input type={"radio"} name="sort" value={"high"} id="high" /><label htmlFor="high">high to low</label><br/>
         </div>
      
        


{/*<div className="low-part row">*/}
	{/*<div className="colu col-lg-3 col-md-3 col-sm-3 box" htmlFor="open">*/}
	{/*<option><span className="select">Select Location</span></option>*/}
		
		{/*<div className="filter">
<span htmlFor="filter">	Filters</span><br/>
<span htmlFor="location"> Select Location</span><br/>
<select>
	
    <option className='select'>Select Location</option>
	<option value={"Delhi"}> Delhi</option>
	<option value={"Mumbai"}> Mumbai</option>
</select><br/>
<span htmlFor="cuisine">
	Cuisine</span><br/>
	 <input type="checkbox" name="cuisine" value={"ni"} htmlFor="ni"/><label htmlFor="ni" className="ch"> North Indian</label><br/>
 <input type="checkbox" name="cuisine" value={"si"} htmlFor="si"/><label htmlFor="si" className="ch"> South Indian</label><br/>
 <input type="checkbox" name="cuisine" value={"ch"} htmlFor="ch"/><label htmlFor="ch" className="ch"> Chinese</label><br/>
 <input type="checkbox" name="cuisine" value={"ff"} htmlFor="ff"/><label htmlFor="ff" className="ch"> Fast Food</label><br/>
 <input type="checkbox" name="cuisine" value={"sf"} htmlFor="sf"/><label htmlFor="sf" className="ch"> Street Food</label><br/>
<span htmlFor="cost">
	Cost htmlFor Two</span><br/>
	<input type="radio" name="cost" value={"less"} htmlFor="less"/><label htmlFor="less" className="co" > Less than <>&#8377;</> 500</label><br/>
<input type="radio" name="cost" value={"bw"} htmlFor="bw"/><label htmlFor="bw" className="co"> <>&#8377;</> 500 to  <>&#8377;</> 1000</label><br/>
<input type="radio" name="cost" value={"bww"} htmlFor="bww"/><label htmlFor="bww" className="co"> <>&#8377;</> 1000 to  <>&#8377;</> 1500</label><br/>
<input type="radio" name="cost" value={"bwww"} htmlFor="bwww"/><label htmlFor="bwww" className="co"> <>&#8377;</> 1500 to  <>&#8377;</> 2000</label><br/>
<input type="radio" name="cost" value={"to"} htmlFor="to"/><label htmlFor="to" className="co">  <>&#8377;</> 2000+</label><br/>
<span htmlFor="sort"> Sort</span>
<br /><input type="radio" name="cost" value={"too"} htmlFor="too" /><label htmlFor="too" className="co"> Price high to low</label> <br />
<input type="radio" name="cost" value={"tooo"} htmlFor="tooo" /><label htmlFor="tooo" className="co"> Price low to high</label><br />
</div>
*/}
        </>

    );
}

export default Filter;