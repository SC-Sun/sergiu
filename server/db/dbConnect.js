const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
  mongoose
    .connect(process.env.DB_URL, {
      // these are options to ensure that the connection is done properly
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    }); //it was mongoose.connect()
}

/* const {MongoClient} = require('mongodb');
require('dotenv').config();

async function main(){

  const client = new MongoClient(process.env.DB_URL);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

      await findOneListingByName(client,`${'hopeless 2'}`);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
   
  async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function findOneListingByName( client, nameOfListing ) {
  const result = await client.db("sergiu").collection('tour').findOne({name:`${nameOfListing}`});
  if(result) {
    console.log(`found the list ${nameOfListing}`);
    console.log(result);
  }
  else {
    console.log('not found')
  }
}
}

main().catch(console.error);  */

//resource:
//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
//https://www.mongodb.com/community/forums/t/typeerror-cannot-read-property-startswith-of-undefined/146999/4
//https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/?_ga=2.267218702.124280541.1683116918-1004332303.1662380413

//module.exports = dbConnect;
module.exports = dbConnect;
