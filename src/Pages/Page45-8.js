import { useEffect, useState } from "react";    

function ExternalApi(){
const [users, setUsers] = useState([])
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
},[])
return(
    
    <div>
        {users.map(user=><Users name={user.name} email={user.email} address={user.address.city}/>)}
    </div>
)
}

function Users(props){
    return(
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Email: {props.email}</h3>
            <p>Address: {props.address}</p>
        </div>
    )
}
export default ExternalApi