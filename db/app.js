const express = require("express");
const cors = require('cors'); // Import the cors package
const bodyParser = require("body-parser");
console.log("Attempting to load dbConnect...");
const dbConnect = require('./dbConnect');
console.log("dbConnect loaded successfully.");
const User = require("./db/user");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3001', // Corrected origin without trailing slash
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Connect to the database
dbConnect();

// Basic route for the root URL
app.get("/", (req, res) => {
    res.send("Welcome to the User Management System!");
});

// Registration Route
app.post("/register", async (req, res) => {
    console.log("Registration endpoint hit");
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ firstName, lastName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Registration error:", error); // Log error to the console
        res.status(500).json({ message: "Server error", error });
    }
});

// Login Route
app.post("/login", async (req, res) => { // Changed to POST
    const { email, password } = req.body;

    try {
        // Find the user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        console.error("Login error:", error); // Log error to the console
        res.status(500).json({ message: "Server error", error });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
