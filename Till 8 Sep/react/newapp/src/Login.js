export default function Login(){
    return (
        <body>
            <div>
            <label for="username">Username:</label>
              <input type="text" id="username" ></input> <br></br>
              <label for="password">password:</label>
              <input type="text"  id="password"></input> <br></br>
              <button id="getapi" type="submit">submit</button>
              </div>
        </body>      
          
         
      );
}
async function getapi(){
    let data1 = {
"username": document.getElementById("username").value,
"password": document.getElementById("password").value
}
     let res = await fetch("https://reqres.in/api/users" ,{"method" :"POST",body:JSON.stringify(data1),headers:{"content-type":"application/json"}});
     let json = await res.json();
     console.log(json);
 }
 document.getElementById("getapi").addEventListener("click",getapi);