import { useState, useEffect } from "react";
import { db } from "./Firebase";

export default function useFirebase(num){
  const [res, setRes] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  
  async function fetchData(){
    await db.collection('portfolio')
    .orderBy('timestamp', 'desc')
    .limit(num)
    .get()
    .then((snapshot) => {
      let arr = [];
      snapshot.docs.map(async(doc) => {
        arr.push({id: doc.id, data: doc.data()});

      });
      setRes(arr);
    });
  };

  return[res]
};