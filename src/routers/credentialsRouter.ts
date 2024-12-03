import { Router } from "express";
import { validateSchema } from "../middlewares/schemaMiddleware";
import { createCredentialSchema } from "../schemas/credentialsSchema";
import { validateToken } from "../middlewares/authMiddleware";
import { deleteCredential, getCredential, getCredentials, postCredential, putCredential } from "../controllers/credentialsController";

const credentialsRouter = Router();

credentialsRouter.use(validateToken)

credentialsRouter.post('/credentials', validateSchema(createCredentialSchema), postCredential);
credentialsRouter.get('/credentials', getCredentials);
credentialsRouter.get('/credentials/:id', getCredential);
credentialsRouter.put('/credentials/:id', validateSchema(createCredentialSchema), putCredential);
credentialsRouter.delete('/credentials/:id', deleteCredential);

export default credentialsRouter;