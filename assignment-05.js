
//
// CRUD Example example based on MongoDB NodeJS Driver Docs
// Developed uisng the Quickstart Guide:
// http://mongodb.github.io/node-mongodb-native/3.5/quick-start/quick-start/
//
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const connect = require("./connect");       // url from connect module
const connect =  ("mongodb+srv://Elisha:Jesus@cluster0.w7thn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"); // url from connect module
const client = new MongoClient(connect, { useUnifiedTopology: true } );

// database name
const dbName = 'users';

 function insertfunction(db)
{
 const collection = db.collection('users');
var info = {FirstName: "Marsh", Surname: "Bob", AddressLine1: "22 Blakestown way Blanchardarstown",AddressLine2: "Blakestown", Mobile: "04672233"};
collection.insertOne(info,function(err, result)
{
 if (err) throw err;
});

// function findfunction = (db)
// {

// }


}
// Use connect method to connect to the server



const insertusers = function(db,FirstName) {
  // Using the "documents" collection
  const collection = db.collection('users');
  // Insert some documents
  collection.insertMany([
    {"Title":"Mr","FirstName": FirstName,"Surname":"Matti","Mobile":"0849937354","EmailAddress":"kahilfmatti32@gmail.com","AddressLine1":"21 allandale drive ongar park","AddressLine2":"blanchardstown","Town":"ongar","County":"Dublin","Eircode":"TK47"},
    {"Title":"Mx","FirstName":"Tj","Surname":"Dan","Mobile":"0849933454","EmailAddress":"tjdan22@gmail.com","AddressLine1":"21 allale drive south park","AddressLine2":"town","Town":"oconnely","County":"Dublin","Eircode":"TK37"},
    {"Title":"Ms","FirstName":"kafll","Surname":"Sam","Mobile":"0849937354","EmailAddress":"kafillsam32@gmail.com","AddressLine1":"21 allendale drive ongar park","AddressLine2":"blanchards","Town":"ongar","County":"Dublin","Eircode":"TK77"},
  ], function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    // assert.equal(3, result.insertedCount);
    // all good if we get to here
    console.log("Inserted 3 documents into the collection");
    
  });
}



const insertOrdes = function(db) {
  // Using the "documents" collection
  const collection = db.collection('Ordes');
  // Insert some documents
  collection.insertMany([
    {"EmailAddress":"kahilfmatti32@gmail.com","Manufacture":"Samsung"},
    {"EmailAddress":"tjdan22@gmail.com","Manufacture":"Acer"},
    {"EmailAddress":"kafillsam32@gmail.com","Manufacture":"HTC"},
    
    
  ], function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    assert.equal(3, result.insertedCount);
    // all good if we get to here
    console.log("Inserted 3 documents into the collection");
    
  });
}

const insertphones = function(db) {
  // Using the "documents" collection
  const collection = db.collection('phones');
  // Insert some documents
  collection.insertMany([
    {"Manufacturer":"Samsung","Model":"S10","Price":"800"},
    {"Manufacturer":"Iphone","Model":"iphone8","Price":"850"},
    {"Manufacturer":"Google","Model":"GooglePixel6","Price":"600"},
    {"Manufacturer":"LG","Model":"LGW41","Price":"700"},
    {"Manufacturer":"HTC","Model":"HTCU12","Price":"500"},
    {"Manufacturer":"Motorola","Model":"MoroG","Price":"400"},
    {"Manufacturer":"Huawei","Model":"HuaweiP50Pocke","Price":"400"},
    {"Manufacturer":"Lenovo","Model":"LenovoTab7","Price":"600"},
    {"Manufacturer":"TCL","Model":"TCL30V","Price":"700"},
    {"Manufacturer":"Acer","Model":"LiquidZ6","Price":"600"},
    
  ], function(err, result) {
    // using the assert module for testing
    assert.equal(err, null);
    // assert.equal(3, result.insertedCount);
    // all good if we get to here
    console.log("Inserted 3 documents into the collection");

  });
}
//
// findDocuments() : find documents in the "documents"
//                   collection (assuming it exists)
// this is the retrive for the user 
const findusers = function(db) {
    // Get the documents collection
    const collection = db.collection('users');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      // all good if we get to here
      console.log("Found the following records");
      console.log(docs)
    });
}

//
// findDocumentsFiltered() : find documents in the "documents"
//                           collection (assuming it exists) using filter
//
const findusersFiltered = function(db) {
    // Get the documents collection
    const collection = db.collection('users');
    // Find some documents - with a filter
    collection.find({'Surname': 'Matti'}).toArray(function(err, docs) {
      // using the assert module for testing
      assert.equal(err, null);
      console.log("Found the following records");
      // all good if we get to here
      console.log(docs);
    });
} 

//
// updateDocument() : update documents in the "documents"
//                    collection (assuming it exists)
//
const updateusers = function(db) {
    // Get the documents collection
    const collection = db.collection('users');
    // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
    collection.updateOne({'EmailAddress' : "kahilfmatti32@gmail.com" }
      , { $set: { EmailAddress :  "kahilfmatti333@gmail.com" } }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      // assert.equal(1, result.modifiedCount);
      // all good if we get to here
      console.log("Updated the document: reset EmailAdress field set to kahilfmatti333@gmail.com");
    });  
  }

//
// updateDocument() : update documents in the "documents"
//                    collection (assuming it exists)
//
const removeusers = function(db) {
    // Get the documents collection
    console.log("The document is removed")
    const collection = db.collection('users');
    // Delete document where email is "alondra.dunne@redmail.ie"
    collection.deleteOne({ 'Mobile': "0849937354" }, function(err, result) {
      // using the assert module for testing
      assert.equal(err, null);
      // assert.equal(1, result.deletedCount);
      // all good if we get to here      
      console.log("Removed the document with Mobile : '0849937354'");
    });    
  }
client.connect(function(err) {
  // using the assert module for testing
  assert.equal(null, err);
  console.log("Connected successfully to server");

  // use this database
  const db = client.db(dbName);
  const dbusers =  db.collection("users");
  insertfunction(db,)
  insertusers(db,"John")
  insertOrdes(db)
  insertphones(db)
  findusers(db)
  findusersFiltered(db)
  updateusers(db)
  removeusers(db)




/* Uncomment this block to see insertMany()
  // do this work : insertMany()
  insertDocuments(db, function() {
    client.close();
  });
*/

/*  Uncomment this block to see findDocuments()
  // do some more work: findDocuments()
  // Note: thismight not work as expected (depending on what you
  // expect) if you leave the earlier block uncommented.
  // can you figure out why there may be an unexpected order
  // in the console messaging? might be an issue with the 
  // client.close() also - when is connection closed?
  findDocuments(db, function() {
    client.close();
  });
*/

/* Uncomment this block to see findDocuments() after insertMany()
  // we really need to be doing something like this
  // enter callback hell!
  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});
*/

/* Uncomment this block to see findDocumentsFiltered() after insertMany()
  insertDocuments(db, function() {
    findDocumentsFiltered(db, function() {
      client.close();
    });
  });
*/

/* Uncomment this block to see updateDocument() after insertDocuments()
insertDocuments(db, function() {
    updateDocument(db, function() {
        findDocuments(db, function() {
            client.close();
          });
    });
});
*/


// var insertusers = function(db) {
//   // Using the "documents" collection
//   const collection = db.collection('users');
//   // Insert some documents
//   collection.insertMany([
//     {"Title":"Mr","FirstName":"kahilf","Surname":"Matti","Mobile":"0849937354","EmailAddress":"kahilfmatti32@gmail.com","AddressLine1":"21 allandale drive ongar park","AddressLine2":"blanchardstown","Town":"ongar","County":"Dublin","Eircode":"TK47"},
//     {"Title":"Mx","FirstName":"Tj","Surname":"Dan","Mobile":"0849933454","EmailAddress":"tjdan22@gmail.com","AddressLine1":"21 allale drive south park","AddressLine2":"town","Town":"oconnely","County":"Dublin","Eircode":"TK37"},
//     {"Title":"Ms","FirstName":"kafll","Surname":"Sam","Mobile":"0849937354","EmailAddress":"kafillsam32@gmail.com","AddressLine1":"21 allendale drive ongar park","AddressLine2":"blanchards","Town":"ongar","County":"Dublin","Eircode":"TK77"},
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     // assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//      insertfunction(db)
 
  
  
//   const collection = db.collection('users');
// var info = {FirstName: "Marsh", Surname: "Bob", AddressLine1: "22 Blakestown way Blanchardarstown",AddressLine2: "Blakestown", Mobile: "04672233"};
// collection.insertOne(info,function(err, result)
// {
//   if (err) throw err;
// });


//  }
//   });
// }


// var insertOrdes = function(db) {
//   // Using the "documents" collection
//   const collection = db.collection('Ordes');
//   // Insert some documents
//   collection.insertMany([
//     {"EmailAddress":"kahilfmatti32@gmail.com","Manufacture":"Samsung"},
//     {"EmailAddress":"tjdan22@gmail.com","Manufacture":"Acer"},
//     {"EmailAddress":"kafillsam32@gmail.com","Manufacture":"HTC"},
    
    
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
    
//   });



//   var insertphones = function(db) {
//     // Using the "documents" collection
//     const collection = db.collection('phones');
//     // Insert some documents
//     collection.insertMany([
//     {"Manufacturer":"Samsung","Model":"S10","Price":"800"},
//     {"Manufacturer":"Iphone","Model":"iphone8","Price":"850"},
//     {"Manufacturer":"Google","Model":"GooglePixel6","Price":"600"},
//     {"Manufacturer":"LG","Model":"LGW41","Price":"700"},
//     {"Manufacturer":"HTC","Model":"HTCU12","Price":"500"},
//     {"Manufacturer":"Motorola","Model":"MoroG","Price":"400"},
//     {"Manufacturer":"Huawei","Model":"HuaweiP50Pocke","Price":"400"},
//     {"Manufacturer":"Lenovo","Model":"LenovoTab7","Price":"600"},
//     {"Manufacturer":"TCL","Model":"TCL30V","Price":"700"},
//     {"Manufacturer":"Acer","Model":"LiquidZ6","Price":"600"},
//     ], function(err, result) {
//       // using the assert module for testing
//       // assert.equal(err, null);
//       assert.equal(3, result.insertedCount);
//       // all good if we get to here
//       console.log("Inserted 3 documents into the collection");
      
//     });
//   }
  




  // function insertphones (db) {
//   // Using the "documents" collection
//   const collection = db.collection('phones');
//   // Insert some documents
//   collection.insertMany([
    // {"Manufacturer":"Samsung","Model":"S10","Price":"800"},
    // {"Manufacturer":"Iphone","Model":"iphone8","Price":"850"},
    // {"Manufacturer":"Google","Model":"GooglePixel6","Price":"600"},
    // {"Manufacturer":"LG","Model":"LGW41","Price":"700"},
    // {"Manufacturer":"HTC","Model":"HTCU12","Price":"500"},
    // {"Manufacturer":"Motorola","Model":"MoroG","Price":"400"},
    // {"Manufacturer":"Huawei","Model":"HuaweiP50Pocke","Price":"400"},
    // {"Manufacturer":"Lenovo","Model":"LenovoTab7","Price":"600"},
    // {"Manufacturer":"TCL","Model":"TCL30V","Price":"700"},
    // {"Manufacturer":"Acer","Model":"LiquidZ6","Price":"600"},
    
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     // assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//   });
// }
//
// findDocuments() : find documents in the "documents"
//                   collection (assuming it exists)
//
// const findusers = function(db) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // all good if we get to here
//       console.log("Found the following records");
//       console.log(docs)
//       // callback(docs);
//     });
// }

//
// findDocumentsFiltered() : find documents in the "documents"
//                           collection (assuming it exists) using filter
//
// const findusersFiltered = function(db ) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Find some documents - with a filter
//     collection.find({'Surname': 'Matti'}).toArray(function(err, docs) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       console.log("Found the following records");
//       // all good if we get to here
//       console.log(docs);
//       // callback(docs);
//     });
// } 

//
// updateDocument() : update documents in the "documents"
//                    collection (assuming it exists)
//
// const updateusers = function(db) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
//     collection.updateOne({EmailAddress : "kahilfmatti32@gmail.com" }
//       , { $set: { EmailAddress :  "kahilfmatti333@gmail.com" } }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // assert.equal(1, result.modifiedCount);
//       // all good if we get to here
//       console.log("Updated the document: reset EmailAdress field set to kahilfmatti333@gmail.com");
//       // callback(result);
//     });  
//   }

//
// updateDocument() : update documents in the "documents"
//                    collection (assuming it exists)
//


 



// const removeusers = function(db) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Delete document where email is "alondra.dunne@redmail.ie"
//     collection.deleteOne({ Mobile : "0849937354" }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // assert.equal(1, result.deletedCount);
//       // all good if we get to here      
//       console.log("Removed the document with Mobile : '0849937354'");
//       // callback(result);
//     });    
//   }
// }


// ///* Uncomment this block to see removeDocument() after updateDocument() after insertDocuments()
//  insertusers(db)
//  insertphones(db)
//  insertOrdes(db)



  //   updateDocument(db, function() {
  //     removeDocument(db, function() {
  //       client.close();
  //     });
  //          });
  //     });
    





//  var enter = {FirstName: "Marsh", Surname: "Bob", AddressLine1: "22 Blakestown way Blanchardarstown",AddressLine2: "Blakestown", Mobile: "04672233"};
// dbusers.insertOne(enter,function(err, result)
// {
//   if (err) throw err;
// });


// const insertusers = function(db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection('users');
//   // Insert some documents
//   collection.insertMany([
//     {"Title":"Mr","FirstName":"kahilf","Surname":"Matti","Mobile":"0849937354","EmailAddress":"kahilfmatti32@gmail.com","AddressLine1":"21 allandale drive ongar park","AddressLine2":"blanchardstown","Town":"ongar","County":"Dublin","Eircode":"TK47"},
//     {"Title":"Mx","FirstName":"Tj","Surname":"Dan","Mobile":"0849933454","EmailAddress":"tjdan22@gmail.com","AddressLine1":"21 allale drive south park","AddressLine2":"town","Town":"oconnely","County":"Dublin","Eircode":"TK37"},
//     {"Title":"Ms","FirstName":"kafll","Surname":"Sam","Mobile":"0849937354","EmailAddress":"kafillsam32@gmail.com","AddressLine1":"21 allendale drive ongar park","AddressLine2":"blanchards","Town":"ongar","County":"Dublin","Eircode":"TK77"},
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     // assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }


// const insertOrdes = function(db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection('Ordes');
//   // Insert some documents
//   collection.insertMany([
//     {"EmailAddress":"kahilfmatti32@gmail.com","Manufacture":"Samsung"},
//     {"EmailAddress":"tjdan22@gmail.com","Manufacture":"Acer"},
//     {"EmailAddress":"kafillsam32@gmail.com","Manufacture":"HTC"},
    
    
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

// const insertphones = function(db, callback) {
//   // Using the "documents" collection
//   const collection = db.collection('phones');
//   // Insert some documents
//   collection.insertMany([
//     {"Manufacturer":"Samsung","Model":"S10","Price":"800"},
//     {"Manufacturer":"Iphone","Model":"iphone8","Price":"850"},
//     {"Manufacturer":"Google","Model":"GooglePixel6","Price":"600"},
//     {"Manufacturer":"LG","Model":"LGW41","Price":"700"},
//     {"Manufacturer":"HTC","Model":"HTCU12","Price":"500"},
//     {"Manufacturer":"Motorola","Model":"MoroG","Price":"400"},
//     {"Manufacturer":"Huawei","Model":"HuaweiP50Pocke","Price":"400"},
//     {"Manufacturer":"Lenovo","Model":"LenovoTab7","Price":"600"},
//     {"Manufacturer":"TCL","Model":"TCL30V","Price":"700"},
//     {"Manufacturer":"Acer","Model":"LiquidZ6","Price":"600"},
    
//   ], function(err, result) {
//     // using the assert module for testing
//     assert.equal(err, null);
//     // assert.equal(3, result.insertedCount);
//     // all good if we get to here
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
// //
// // findDocuments() : find documents in the "documents"
// //                   collection (assuming it exists)
// //
// const findDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Find some documents
//     collection.find({}).toArray(function(err, docs) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // all good if we get to here
//       console.log("Found the following records");
//       console.log(docs)
//       callback(docs);
//     });
// }

// //
// // findDocumentsFiltered() : find documents in the "documents"
// //                           collection (assuming it exists) using filter
// //
// const findDocumentsFiltered = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Find some documents - with a filter
//     collection.find({'Surname': 'Matti'}).toArray(function(err, docs) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       console.log("Found the following records");
//       // all good if we get to here
//       console.log(docs);
//       callback(docs);
//     });
// } 

// //
// // updateDocument() : update documents in the "documents"
// //                    collection (assuming it exists)
// //
// const updateDocument = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Update document where email is "alondra.dunne@purplemail.ie", set to "alondra.dunne@redmail.ie"
//     collection.updateOne({EmailAddress : "kahilfmatti32@gmail.com" }
//       , { $set: { EmailAddress :  "kahilfmatti333@gmail.com" } }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // assert.equal(1, result.modifiedCount);
//       // all good if we get to here
//       console.log("Updated the document: reset EmailAdress field set to kahilfmatti333@gmail.com");
//       callback(result);
//     });  
//   }

// //
// // updateDocument() : update documents in the "documents"
// //                    collection (assuming it exists)
// //
// const removeDocument = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('users');
//     // Delete document where email is "alondra.dunne@redmail.ie"
//     collection.deleteOne({ Mobile : "0849937354" }, function(err, result) {
//       // using the assert module for testing
//       assert.equal(err, null);
//       // assert.equal(1, result.deletedCount);
//       // all good if we get to here      
//       console.log("Removed the document with Mobile : '0849937354'");
//       callback(result);
//     });    
//   }

});