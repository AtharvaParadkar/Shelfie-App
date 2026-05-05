import { Client, Account, Avatars } from "react-native-appwrite"

export const client = new CLient()
        .setProject('69f98fc80007530258f1')
        .setPlatform('com.anonymous.shelfie_app')

export const Account = new Account(client)
export const avaters = new Avatars(client)