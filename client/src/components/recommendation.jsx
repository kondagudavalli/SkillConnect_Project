
import { useState } from "react";
import api from "../services/api";

function Recommendation() {

    const [name, setName] = useState("");
    const [jobs, setJobs] = useState([]);

    async function getRecommendations() {

        if (!name) {
            alert("Enter User Name");
            return;
        }

        const res = await api.get(`/recommendations/${name}`);

        setJobs(res.data);

    }

    return (

        <div className="card">

            <h2>🎯 Job Recommendations</h2>

            <input
                placeholder="Enter User Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={getRecommendations}>
                🔍 Get Recommendations
            </button>

            <div className="recommendations">

                {
                    jobs.length === 0 ?

                        <p className="empty">
                            No Recommendations Yet
                        </p>

                        :

                        jobs.map((job, index) => (

                            <div className="job-card" key={index}>

                                <div className="company">

                                    🏢 {job.company}

                                </div>

                                <div className="job">

                                    💼 {job.job}

                                </div>

                                <div className="tag">

                                    ⭐ Recommended For You

                                </div>

                            </div>

                        ))
                }

            </div>

        </div>

    );

}

export default Recommendation;
