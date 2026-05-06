import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new Client()

client.setProject('69f98fc80007530258f1').setPlatform('com.anonymous.shelfie_app')

export const account = new Account(client)
export const avaters = new Avatars(client)