// const driver = require("../config/db");

// async function seedData() {
//     const session = driver.session();

//     try {

//         const query = `

//         // ===========================
//         // CREATE USERS
//         // ===========================

//         MERGE (u1:User {
//             id:1,
//             name:"Dhanu",
//             email:"dhanu@gmail.com"
//         })

//         MERGE (u2:User {
//             id:2,
//             name:"Rahul",
//             email:"rahul@gmail.com"
//         })

//         MERGE (u3:User {
//             id:3,
//             name:"Priya",
//             email:"priya@gmail.com"
//         })

//         // ===========================
//         // CREATE SKILLS
//         // ===========================

//         MERGE (java:Skill {name:"Java"})
//         MERGE (react:Skill {name:"React"})
//         MERGE (node:Skill {name:"Node.js"})
//         MERGE (sql:Skill {name:"SQL"})

//         // ===========================
//         // CREATE COMPANIES
//         // ===========================

//         MERGE (google:Company {
//             name:"Google",
//             location:"Hyderabad"
//         })

//         MERGE (microsoft:Company {
//             name:"Microsoft",
//             location:"Bangalore"
//         })

//         // ===========================
//         // CREATE JOBS
//         // ===========================

//         MERGE (backend:Job {
//             title:"Backend Developer",
//             experience:"2 Years"
//         })

//         MERGE (frontend:Job {
//             title:"React Developer",
//             experience:"1 Year"
//         })

//         // ===========================
//         // USER -> SKILL
//         // ===========================

//         MERGE (u1)-[:HAS_SKILL]->(java)
//         MERGE (u1)-[:HAS_SKILL]->(react)

//         MERGE (u2)-[:HAS_SKILL]->(node)

//         MERGE (u3)-[:HAS_SKILL]->(sql)

//         // ===========================
//         // USER -> USER
//         // ===========================

//         MERGE (u1)-[:KNOWS]->(u2)

//         MERGE (u2)-[:KNOWS]->(u3)

//         // ===========================
//         // USER -> COMPANY
//         // ===========================

//         MERGE (u2)-[:WORKS_AT]->(google)

//         MERGE (u3)-[:WORKS_AT]->(microsoft)

//         // ===========================
//         // COMPANY -> JOB
//         // ===========================

//         MERGE (google)-[:POSTED]->(backend)

//         MERGE (microsoft)-[:POSTED]->(frontend)

//         `;

//         await session.run(query);

//         console.log("✅ Seed data inserted successfully!");

//     } catch (error) {

//         console.error("❌ Error inserting seed data:");
//         console.error(error);

//     } finally {

//         await session.close();
//         await driver.close();

//     }
// }

// seedData();

const driver = require("../config/db");

async function seedData() {

    const session = driver.session();

    try {

        const query = `

        // =====================================
        // USERS
        // =====================================

        MERGE (u1:User {id:1})
        SET u1.name="Dhanu", u1.email="dhanu@gmail.com"

        MERGE (u2:User {id:2})
        SET u2.name="Rahul", u2.email="rahul@gmail.com"

        MERGE (u3:User {id:3})
        SET u3.name="Priya", u3.email="priya@gmail.com"

        MERGE (u4:User {id:4})
        SET u4.name="Kiran", u4.email="kiran@gmail.com"

        MERGE (u5:User {id:5})
        SET u5.name="Anjali", u5.email="anjali@gmail.com"

        MERGE (u6:User {id:6})
        SET u6.name="Rohit", u6.email="rohit@gmail.com"

        MERGE (u7:User {id:7})
        SET u7.name="Sneha", u7.email="sneha@gmail.com"

        MERGE (u8:User {id:8})
        SET u8.name="Vikram", u8.email="vikram@gmail.com"


        // =====================================
        // SKILLS
        // =====================================

        MERGE (java:Skill {name:"Java"})
        MERGE (react:Skill {name:"React"})
        MERGE (node:Skill {name:"Node.js"})
        MERGE (sql:Skill {name:"SQL"})
        MERGE (python:Skill {name:"Python"})
        MERGE (javascript:Skill {name:"JavaScript"})
        MERGE (typescript:Skill {name:"TypeScript"})
        MERGE (spring:Skill {name:"Spring Boot"})
        MERGE (express:Skill {name:"Express.js"})
        MERGE (mongodb:Skill {name:"MongoDB"})
        MERGE (mysql:Skill {name:"MySQL"})
        MERGE (html:Skill {name:"HTML"})
        MERGE (css:Skill {name:"CSS"})
        MERGE (docker:Skill {name:"Docker"})
        MERGE (aws:Skill {name:"AWS"})
        MERGE (git:Skill {name:"Git"})


        // =====================================
        // COMPANIES
        // =====================================

        MERGE (google:Company {name:"Google"})
        SET google.location="Hyderabad"

        MERGE (microsoft:Company {name:"Microsoft"})
        SET microsoft.location="Bangalore"

        MERGE (amazon:Company {name:"Amazon"})
        SET amazon.location="Hyderabad"

        MERGE (tcs:Company {name:"TCS"})
        SET tcs.location="Chennai"

        MERGE (infosys:Company {name:"Infosys"})
        SET infosys.location="Pune"

        MERGE (accenture:Company {name:"Accenture"})
        SET accenture.location="Bangalore"


        // =====================================
        // JOBS
        // =====================================

        MERGE (backend:Job {title:"Backend Developer"})
        SET backend.experience="2 Years"

        MERGE (frontend:Job {title:"Frontend Developer"})
        SET frontend.experience="1 Year"

        MERGE (reactdev:Job {title:"React Developer"})
        SET reactdev.experience="1 Year"

        MERGE (nodejob:Job {title:"Node.js Developer"})
        SET nodejob.experience="2 Years"

        MERGE (pythonjob:Job {title:"Python Developer"})
        SET pythonjob.experience="2 Years"

        MERGE (cloud:Job {title:"Cloud Engineer"})
        SET cloud.experience="3 Years"

        MERGE (fullstack:Job {title:"Full Stack Developer"})
        SET fullstack.experience="2 Years"

        MERGE (data:Job {title:"Data Engineer"})
        SET data.experience="3 Years"


        // =====================================
        // USER -> SKILLS
        // =====================================

        MERGE (u1)-[:HAS_SKILL]->(java)
        MERGE (u1)-[:HAS_SKILL]->(react)
        MERGE (u1)-[:HAS_SKILL]->(javascript)
        MERGE (u1)-[:HAS_SKILL]->(html)
        MERGE (u1)-[:HAS_SKILL]->(css)

        MERGE (u2)-[:HAS_SKILL]->(node)
        MERGE (u2)-[:HAS_SKILL]->(express)
        MERGE (u2)-[:HAS_SKILL]->(mongodb)
        MERGE (u2)-[:HAS_SKILL]->(javascript)

        MERGE (u3)-[:HAS_SKILL]->(python)
        MERGE (u3)-[:HAS_SKILL]->(sql)
        MERGE (u3)-[:HAS_SKILL]->(mysql)
        MERGE (u3)-[:HAS_SKILL]->(git)

        MERGE (u4)-[:HAS_SKILL]->(java)
        MERGE (u4)-[:HAS_SKILL]->(spring)
        MERGE (u4)-[:HAS_SKILL]->(mysql)

        MERGE (u5)-[:HAS_SKILL]->(react)
        MERGE (u5)-[:HAS_SKILL]->(typescript)
        MERGE (u5)-[:HAS_SKILL]->(css)

        MERGE (u6)-[:HAS_SKILL]->(docker)
        MERGE (u6)-[:HAS_SKILL]->(aws)
        MERGE (u6)-[:HAS_SKILL]->(node)

        MERGE (u7)-[:HAS_SKILL]->(python)
        MERGE (u7)-[:HAS_SKILL]->(mongodb)
        MERGE (u7)-[:HAS_SKILL]->(express)

        MERGE (u8)-[:HAS_SKILL]->(java)
        MERGE (u8)-[:HAS_SKILL]->(spring)
        MERGE (u8)-[:HAS_SKILL]->(docker)
        MERGE (u8)-[:HAS_SKILL]->(aws)


        // =====================================
        // FRIEND CONNECTIONS
        // =====================================

        MERGE (u1)-[:KNOWS]->(u2)
        MERGE (u1)-[:KNOWS]->(u3)

        MERGE (u2)-[:KNOWS]->(u4)
        MERGE (u2)-[:KNOWS]->(u5)

        MERGE (u3)-[:KNOWS]->(u6)

        MERGE (u4)-[:KNOWS]->(u7)

        MERGE (u5)-[:KNOWS]->(u8)

        MERGE (u6)-[:KNOWS]->(u1)

        MERGE (u7)-[:KNOWS]->(u3)

        MERGE (u8)-[:KNOWS]->(u2)


        // =====================================
        // USER -> COMPANY
        // =====================================

        MERGE (u2)-[:WORKS_AT]->(google)
        MERGE (u3)-[:WORKS_AT]->(microsoft)
        MERGE (u4)-[:WORKS_AT]->(amazon)
        MERGE (u5)-[:WORKS_AT]->(tcs)
        MERGE (u6)-[:WORKS_AT]->(infosys)
        MERGE (u7)-[:WORKS_AT]->(accenture)
        MERGE (u8)-[:WORKS_AT]->(google)


        // =====================================
        // COMPANY -> JOB
        // =====================================

        MERGE (google)-[:POSTED]->(backend)
        MERGE (google)-[:POSTED]->(cloud)

        MERGE (microsoft)-[:POSTED]->(reactdev)
        MERGE (microsoft)-[:POSTED]->(frontend)

        MERGE (amazon)-[:POSTED]->(fullstack)

        MERGE (tcs)-[:POSTED]->(pythonjob)

        MERGE (infosys)-[:POSTED]->(data)

        MERGE (accenture)-[:POSTED]->(nodejob)

        `;

        await session.run(query);

        console.log("✅ Seed Data Inserted Successfully!");

    } catch (error) {

        console.error("❌ Error:");
        console.error(error);

    } finally {

        await session.close();
        await driver.close();

    }

}

seedData();