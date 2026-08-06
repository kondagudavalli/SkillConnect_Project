import {useState} from "react";

import api from "../services/api";

function ConnectForm(){

    const [user1,setUser1]=useState("");

    const [user2,setUser2]=useState("");

    async function handleSubmit(e){

        e.preventDefault();

        await api.post("/users/connect",{

            user1,

            user2

        });

    alert("Users Connected Successfully!");

    setUser1("");
    setUser2("");

    window.location.reload();
    }

    return(

        <div className="card">

            <h2>Connect Users</h2>

            <form onSubmit={handleSubmit}>

                <input
                placeholder="User 1"
                onChange={(e)=>setUser1(e.target.value)}
                />

                <input
                placeholder="User 2"
                onChange={(e)=>setUser2(e.target.value)}
                />

                <button>

                    Connect

                </button>

            </form>

        </div>

    );

}

export default ConnectForm;