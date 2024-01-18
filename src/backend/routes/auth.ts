import { Router } from "express";
import * as AuthController from "../controllers/AuthController";
const Route = Router()

/* =============================================================== */
Route.post('/signup', AuthController.Store)
Route.post('/signin',  AuthController.Auth)
/* =============================================================== */


export default Route