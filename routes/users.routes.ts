import { Router } from "express";
import UsersController from "../controllers/users.controller";

const router= Router();
const users=new UsersController();


router.get('/', users.usersGet);
router.put('/:id', users.usersPut);
router.post('/', users.usersPost);
router.delete('/:id', users.usersDelete);


export default router;