import ContactCollection from "../db/models/contacts.js";

export const getAllContacts = async ()=> {
    const data = await ContactCollection.find();
    return data;
};