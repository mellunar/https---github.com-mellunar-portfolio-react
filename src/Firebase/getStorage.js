import { storage } from "./Firebase"

export async function getStorage(item){
  await storage.ref().child(`amara/${item}`).getDownloadURL().then((url)=>{return url})
}