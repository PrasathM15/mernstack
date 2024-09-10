import { useDispatch, useSelector } from "react-redux"
import Header from './Header';

export default function Contact(){
    const counterval = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const add=()=>{
        dispatch({
            type:"add"
        })

    }
    const sub=()=>{
        dispatch({
            type:"sub"
        })

        
    }
    return(
        <div >
           <Header/>
            <h1>Contact Page</h1> 
            <h1>From Redux  {counterval}</h1>
            <input type="button" value="Add" onClick={add}/>
            <input type="button" value ="Sub" onClick={sub}/>
        </div>
    )
}