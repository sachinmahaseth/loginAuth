import  express  from "express";
import { registerController,loginController } from "../controller/authController.js";


const router = express.Router();

//register api
router.post('/Register' , registerController);

//login api
router.post('/Login' , loginController);

export default router;