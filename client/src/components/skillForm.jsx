import { useState } from "react";
import api from "../services/api";

function SkillForm() {

    const [name, setName] = useState("");
    const [skill, setSkill] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        await api.post("/users/skill", {
            userName: name,
            skillName: skill
        });

        alert("Skill Added Successfully!");

        setName("");
        setSkill("");

        window.location.reload();

    }

    return (

        <div className="card">

            <h2>Add Skill</h2>

            <form onSubmit={handleSubmit}>

                <input
                    placeholder="User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />

                <button type="submit">
                    Add Skill
                </button>

            </form>

        </div>

    );

}

export default SkillForm;