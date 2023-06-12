import { Router } from "express";
import { HelloController } from "../controller/hellloController";

const router = Router()
const helloController = new HelloController()


router.get('/', helloController.hello);

export default router

