import { useDispatch, useSelector } from "react-redux"
import Header from './Header';

export default function Home(){
    const counterval = useSelector((state)=>state.counter);
    const myDetails = useSelector((state) => state.myDetails);
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
            <h1>About Page</h1> 
            <h1>From Redux  {counterval}</h1>
            <h1>{myDetails.name}</h1>
            <h1>{myDetails.email}</h1>
            <input type="button" value="Add" onClick={add}/>
            <input type="button" value ="Sub" onClick={sub}/>
           
        </div>
    )
}