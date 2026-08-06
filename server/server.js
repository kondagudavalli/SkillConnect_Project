const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const driver = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("SkillConnect Backend Running");
});

// Test CognoDB Connection
app.get("/test-db", async (req, res) => {
    const session = driver.session();

    try {
        const result = await session.run("RETURN 'CognoDB Connected Successfully!' AS message");

        res.json({
            success: true,
            message: result.records[0].get("message")
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            error: error.message
        });
    } finally {
        await session.close();
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port http://localhost:${PORT}`);
});