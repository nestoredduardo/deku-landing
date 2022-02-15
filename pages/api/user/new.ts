import type { NextApiRequest, NextApiResponse } from 'next'
import * as firebase from 'firebase/app'
import { collection, getFirestore, addDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
}

if (firebase.getApps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const addUser = async (email: string | string[]) => {
  try {
    const db = getFirestore()
    const docRef = await addDoc(collection(db, 'users'), {
      email,
    })
    return docRef.id
  } catch (error) {
    return false
  }
}

const handlerNewUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const result = await addUser(req.query.email)

  res.status(200).json({ result })
}

export default handlerNewUser
