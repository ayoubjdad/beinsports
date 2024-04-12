const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// MongoDB connection string
const uri =
  "mongodb+srv://ayoubjdad1:O6sdnvt1j8MjIbqp@studiosport.4oa73ry.mongodb.net/";

// Connect to MongoDB
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  if (err) {
    console.error("Error connecting to MongoDB:", err);
    return;
  }
  console.log("Connected to MongoDB");
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.post("/save-form", async (req, res) => {
  try {
    // Extract form data from request
    const { title, description, text, links } = req.body;

    // Access the appropriate MongoDB collection
    const db = client.db("admin");
    const collection = db.collection("post"); // Change collection name to 'post'

    // Insert form data into MongoDB
    const result = await collection.insertOne({
      title,
      description,
      text,
      links,
    });

    // Send response
    res
      .status(201)
      .json({ message: "Form data saved successfully", data: result.ops[0] });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
