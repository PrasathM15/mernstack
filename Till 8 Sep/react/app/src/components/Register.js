import { useState } from 'react';

export default function Register() {
  const [userList, setUserList] = useState([]);

  async function getData() {
    try {
      let res = await fetch("https://reqres.in/api/users?page=1"); 
      let json = await res.json();
      setUserList(json.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      {userList.map((obj) => (
        <div key={obj.id}> 
          <h1>{obj.first_ame}</h1>
          <p>{obj.last_name}</p>
        
        </div>
      ))}
    </div>
   );
}
