import ContactCollection from "../db/models/contacts.js";
import calculatePaginationData from "../utils/calculatePaginationData.js";

export const getAllContacts = async ({
    perPage,
    page,
})=> {
    const skip = (page - 1) * perPage;
    const contactQuery = ContactCollection.find(); 

    const data = await contactQuery.skip(skip).limit(perPage);
    
    const count = await ContactCollection.find().countDocuments();

    const paginationData = calculatePaginationData({count, perPage, page});

    return {
        page,
        perPage,
        data,
        totalItems: count,
        ...paginationData,
    };
};

export const getContactById = (id)=> ContactCollection.findById(id);


export const createContact = payload => ContactCollection.create(payload);

export const updateContact = async(filter, data, options = {})=> {
    const rawResult = await ContactCollection.findOneAndUpdate(filter, data, {
        new: true,
        includeResultMetadata: true,
        ...options,
    });

    if(!rawResult || !rawResult.value) return null;

    return {
        data: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
};

export const deleteContact = filter => ContactCollection.findOneAndDelete(filter);
