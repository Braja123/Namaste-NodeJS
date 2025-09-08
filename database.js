// require("mongodb");

const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
  "mongodb+srv://gopal_das:GopalDasBraja@namastenodegopal.q9izqq2.mongodb.net/";

const client = new MongoClient(url);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //   Insert
  const data = {
    firstName: "Subhashree",
    lastName: "Das",
    city: "Balasore",
    phoneNumber: "658677878",
  };

  //   const insertResult = await collection.insertMany([data]);
  //   console.log("Inserted documents =>", insertResult);

  //   Read
  //   const findResult = await collection.find({}).toArray();
  //   console.log("Found documents =>", findResult);

  //   Update
  const data1 = {
    firstName: "Sanu",
    lastName: "Das",
    city: "Bls",
    phoneNumber: "658677878",
  };
  //   const updateResult = await collection.updateOne(data, { $set: data1 });
  //   console.log("Updated documents =>", updateResult);

  //   delete
  //   const deleteResult = await collection.deleteMany(data);
  //   console.log("Deleted documents =>", deleteResult);

  const countResult = await collection.countDocuments({});
  console.log("Count of documents in the user collection => ", countResult);

  //   Find all documents with the filter of name Sanu
  const result = await collection.find({ firstName: "Subhashree" }).toArray();
  console.log("result => ", result);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

// const URI =
//   "mongodb+srv://gopal_das:GopalDasBraja@namastenodegopal.q9izqq2.mongodb.net/";
