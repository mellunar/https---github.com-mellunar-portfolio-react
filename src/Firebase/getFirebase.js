import { db, storage } from "./Firebase";

export default async function getFirebase(num){
  async function fetch(){
    await db.collection('amara')//.orderBy('timestamp', 'desc')
    .limit(num)
    .get()
    .then((snapshot) => {
      let arr = [];
      snapshot.docs.map(async(doc) => {
        const image = await storage.ref().child(`teste/${doc.data().imgUrl}`).getDownloadURL().then((url)=>{return url})
        arr.push({id: doc.id, data: doc.data(), img: image});

      });
      return arr;
    });
  }
  fetch()
};