import PouchDB from "pouchdb";
import React, { useEffect, useState } from "react";

// Debug logging
PouchDB?.debug?.enable("*");

// Disable Debug
// PouchDB.debug.disable();

export default function PouchDBExample() {
  const [state, setstate] = useState();

  useEffect(() => {
    var db = new PouchDB("kittens");
    var horseDB = new PouchDB("http://localhost:5984/Horses");
    db.info().then(function (info) {
      console.log("kittens PouchDB", info);
      setstate("We have a database: " + JSON.stringify(info));
    });
    var doc = {
      _id: "mittens",
      name: "Mittens",
      occupation: "kitten",
      age: 3,
      hobbies: [
        "playing with balls of yarn",
        "chasing laser pointers",
        "lookin' hella cute",
      ],
    };
    db.put(doc);
    db.get("mittens").then((res) => {
      console.log(res);
    });

    horseDB.info().then(function (info) {
      console.log("horseDB PouchDB", info);
    });
  }, []);
  return (
    <div>
      PouchDB
      <p>{state}</p>
    </div>
  );
}
