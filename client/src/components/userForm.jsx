import { useState } from "react";
import api from "../services/api";

function UserForm() {

    const [form, setForm] = useState({

        id: "",
        name: "",
        email: ""

    });

    function handleChange(e) {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    }

    async function handleSubmit(e) {

    e.preventDefault();

    console.log("Submit button clicked");

    await api.post("/users", {
        id: Number(form.id),
        name: form.name,
        email: form.email
    });

    alert("User Created");

    setForm({
        id: "",
        name: "",
        email: ""
    });

    window.location.reload();
}

    return (

        <div className="card">

            <h2>Create User</h2>

            <form onSubmit={handleSubmit}>

                <input
                    name="id"
                    placeholder="Id"
                    value={form.id}
                    onChange={handleChange}
                />

                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />

                <button type="submit">
                    Create User
                </button>

            </form>

        </div>

    );

}

export default UserForm;