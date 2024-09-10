import { useDispatch, useSelector } from "react-redux"
import Header from './Header';
import { useState } from "react";

export default function Home(){
    const counterval = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const[status,setStatus] = useState(true);
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
    const storeMyDetailsReducer=()=>{
        dispatch({
            type:"saveDetails",
            data:{"name":"Prasath M","email":"iamprasath15@gmail.com"}
        });
    }
    return(
        <div >
             <Header/>
            <h1>Home Page</h1> 
            <h1>From Redux  {counterval}</h1>
            <input type="button" value="Add" onClick={add}/>
            <input type="button" value ="Sub" onClick={sub}/>
            <input type="button" value="click" onClick={storeMyDetailsReducer}/>
            {(status)?<p className="red">This is Paragraph</p>:null}
        </div>
    )
}