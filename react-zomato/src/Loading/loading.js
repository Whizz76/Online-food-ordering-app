import './loading.css';
import load from './load.gif';
function Loading(){
    return(
        <>
        <div id="loader">
            <img src={load} alt="loading.."/>
        </div>
        </>
    )
}
export default Loading;