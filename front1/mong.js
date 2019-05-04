const MongoClient = require("mongodb").MongoClient;
 
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err) throw(err);

    const db = client.db("mrkde");
    const collection = db.collection("files");
    console.log(collection.find({}).toArray(function(err, result) {
        if (err) throw err;
        let myDiv = document.getElementById("selector");
        let selectList = document.createElement("select");
        selectList.id = "mySelect";
        myDiv.appendChild(selectList);
        for (let i = 0; i < result.length; i++){
            let option = document.createElement("option");
            option = {value: result[i].title, text: result[i].title};
            selectList.appendChild(option);
        }
      }));
      console.log("I'm here");
    client.close();
});