const driver = require("../config/db");

const getUsers = async (req, res) => {

    const session = driver.session();

    try {

        const result = await session.run(`
    MATCH (u:User)
    RETURN u
`);

        const users = result.records.map(record => {
            return record.get("u").properties;
        });

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    } finally {

        await session.close();

    }

};

//get user by name
const getUserByName = async (req, res) => {

    const session = driver.session();

    try {

        const { name } = req.params;

        const result = await session.run(
            `
            MATCH (u:User {name:$name})
            RETURN u
            `,
            { name }
        );

        if (result.records.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        const user = result.records[0].get("u").properties;

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    } finally {

        await session.close();

    }

};

//create user
// Create User
const createUser = async (req, res) => {

    const session = driver.session();

    try {

        const { id, name, email } = req.body;

        const query = `
            MERGE (u:User {id: $id})
            SET
                u.name = $name,
                u.email = $email
            RETURN u
        `;

        await session.run(query, {
            id,
            name,
            email
        });

        res.status(201).json({
            success: true,
            message: "User created/updated successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    } finally {

        await session.close();

    }

};

// Add Skill to User
const addSkill = async (req, res) => {

    const session = driver.session();

    try {

        const { userName, skillName } = req.body;

        console.log(req.body);

        await session.run(
            `
            MATCH (u:User {name:$userName})

            MERGE (s:Skill {name:$skillName})

            MERGE (u)-[:HAS_SKILL]->(s)

            RETURN u,s
            `,
            {
                userName,
                skillName
            }
        );

        res.json({
            success: true,
            message: "Skill added successfully"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    } finally {

        await session.close();

    }

};

//connect two users
const connectUsers = async (req, res) => {

    const session = driver.session();

    try {

        const { user1, user2 } = req.body;

        await session.run(
            `
            MATCH (u1:User {name:$user1})
            MATCH (u2:User {name:$user2})

            MERGE (u1)-[:KNOWS]->(u2)
            `,
            {
                user1,
                user2
            }
        );

        res.json({
            message: "Users connected successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    } finally {

        await session.close();

    }

};

//recommanded jobs api
const getRecommendations = async (req, res) => {

    const session = driver.session();

    try {

        const { name } = req.params;

        const result = await session.run(
            `
            MATCH (u:User {name:$name})-[:HAS_SKILL]->(skill:Skill)

            MATCH (other:User)-[:HAS_SKILL]->(skill)

            WHERE other <> u

            MATCH (other)-[:WORKS_AT]->(company:Company)

            MATCH (company)-[:POSTED]->(job:Job)

            RETURN DISTINCT

            company.name AS company,

            job.title AS job,

            skill.name AS matchedSkill,

            other.name AS recommendedFrom
            `,
            { name }
        );

        const recommendations = result.records.map(record => ({

            company: record.get("company"),

            job: record.get("job"),

            matchedSkill: record.get("matchedSkill"),

            recommendedFrom: record.get("recommendedFrom")

        }));

        res.json(recommendations);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    } finally {

        await session.close();

    }

};

module.exports = {
    getUsers,
    getUserByName,
    createUser,
    addSkill,
    connectUsers,
    getRecommendations
};