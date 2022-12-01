// const { MongoClient, ServerApiVersion } = require('mongodb');
// const express = require("express");
// const cors = require("cors");
// const ObjectId = require("mongodb").ObjectId;
// require("dotenv").config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));
// // mongodb connection url
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.badr9.mongodb.net/?retryWrites=true&w=majority`
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.badr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// // const client = new MongoClient(uri, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });
// //https://shielded-basin-18619.herokuapp.com
// const stripe = require("stripe")('sk_test_51JzIXkDSbfkSaEB4RTXab6GAloWH6HvwzL9KbBAcxr0U9KrHncDwUnWhjK5ImYzy0CogzDkLRTkB0Vb8dLgWpjNV00B3hETT3U');


// async function run() {
//   try {
//     await client.connect();
//     const database = client.db("car_market");
//     const productCollection = database.collection("products");
//     const orderCollection = database.collection("orders");
//     const reviewCollection = database.collection("reviews");
//     const userCollection = database.collection("users");
//     console.log("Database connected");



//     app.get("/products", async (req, res) => {
//       const result = await productCollection.find({}).toArray();
//       res.json(result);
//     });
//     app.get("/products/:id", async (req, res) => {
//       const productId = req.params.id;
//       const query = { _id: ObjectId(productId) };
//       const result = await productCollection.findOne(query);
//       res.json(result);
//     });
//     app.post("/products", async (req, res) => {
//       const product = req.body;
//       console.log(product);
//       const result = await productCollection.insertOne(product);
//       console.log(result);
//       res.json(result);
//     });
//     app.delete("/products/:id", async (req, res) => {
//       const productId = req.params.id;
//       const query = { _id: ObjectId(productId) };
//       const result = await productCollection.deleteOne(query);
//       res.json(result);
//     });
//     app.post("/orders", async (req, res) => {
//       const newOrder = req.body;
//       const result = await orderCollection.insertOne(newOrder);
//       res.json(result);
//       console.log(result);
//     });
//     app.get("/orders", async (req, res) => {
//       const result = await orderCollection.find({}).toArray();
//       res.json(result);
//     });

//     app.delete("/orders/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const result = await orderCollection.deleteOne(query);
//       res.json(result);
//     });
//     app.get("/orders/:email", async (req, res) => {
//       const email = req.params.email;
//       const query = { email: { $eq: email } };
//       const result = await orderCollection.find(query).toArray();
//       res.json(result);
//     });
//     app.put("/orders/:id", async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: ObjectId(id) };
//       const options = { upsert: true };
//       const updateDoc = {
//         $set: {
//           status: "Shipped",
//         },
//       };
//       const result = await orderCollection.updateOne(query, updateDoc, options);
//       res.json(result);
//     });
//     app.post("/reviews", async (req, res) => {
//       const review = req.body;
//       const result = await reviewCollection.insertOne(review);
//       res.json(result);
//     });
//     app.get("/reviews", async (req, res) => {
//       const result = await reviewCollection.find({}).toArray();
//       res.json(result);
//     });
//     app.post("/users", async (req, res) => {
//       const user = req.body;
//       const result = await userCollection.insertOne(user);
//       res.json(result);
//     });
//     app.get("/users", async (req, res) => {
//       const result = await userCollection.find({}).toArray();
//       res.json(result);
//     });
//     app.put("/users/:id", async (req, res) => {
//       const userId = req.params.id;
//       const role = req.body;
//       const setRol = role.role;
//       const query = { _id: ObjectId(userId) };
//       const options = { upsert: true };
//       const updateRole = {
//         $set: {
//           role: setRol,
//         },
//       };
//       const result = await userCollection.updateOne(query, updateRole, options);
//       res.json(result);
//     });
//     app.get("/users/:email", async (req, res) => {
//       const email = req.params.email;
//       const query = { email: { $eq: email } };
//       const result = await userCollection.findOne(query);
//       res.json(result);
//     });

//     app.post("/create-payment-intent", async (req, res) => {
//       try {
//         const { price } = req.body;
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: price*100,
//         currency: "usd",
//         automatic_payment_methods: {
//           enabled: true,
//         },
//       });
    
//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//       } catch (error) {
//         console.log(error)
//       }
      
//     });
//   } finally {
//   }
// }
// run().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Welocome To CarBAZAAR");
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log("Server running on port", port);
// });
