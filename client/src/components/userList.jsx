import {useEffect,useState} from "react";

import api from "../services/api";

function UserList(){

    const [users,setUsers]=useState([]);

    useEffect(()=>{

        fetchUsers();

    },[]);

    async function fetchUsers(){

        const response=await api.get("/users");

        setUsers(response.data);

    }

    return(

        <div className="card">

            <h2>Users</h2>

            {

                users.map(user=>(

                   <div className="user-card" key={user.id}>

    <h3>👤 {user.name}</h3>

    <p>📧 {user.email}</p>

</div>

                ))

            }

        </div>

    );

}

export default UserList;