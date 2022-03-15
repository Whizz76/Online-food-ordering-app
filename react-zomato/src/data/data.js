function Enterdata({change,changeIt}){
    return(
        <>
        <input type="text" placeholder='Enter location' onInput={(event)=>change(event)}/>
        <input type="text" placeholder='Enter name of the restaurant' onInput={(event)=>changeIt(event)}/>
        </>
    )
}
export default Enterdata;