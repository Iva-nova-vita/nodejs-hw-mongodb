import {Router} from "express";

import * as contactControllers from "../controllers/contacts.js";
import validateBody from "../utils/validateBody.js";

import ctrlWrapper from "../utils/ctrlWrapper.js";

import { contactAddSchema, contactPatchSchema } from "../validation/contacts.js";

const contactsRouter = Router();

contactsRouter.get("/", ctrlWrapper(contactControllers.getAllContactsController));

contactsRouter.get("/:id", ctrlWrapper(contactControllers.getContactByIdController));

contactsRouter.post("/",  validateBody(contactAddSchema), ctrlWrapper(contactControllers.addContactController));

contactsRouter.put("/:id", validateBody(contactAddSchema), ctrlWrapper(contactControllers.upsertContactController));

contactsRouter.patch("/:id", validateBody(contactPatchSchema), ctrlWrapper(contactControllers.patchContactController));

contactsRouter.delete("/:id", ctrlWrapper(contactControllers.deleteContactController));

export default contactsRouter;