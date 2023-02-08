import { Router } from 'express';

import User from "./controllers/User";

const router = Router();

router.post("/user", User.createUser);
router.get("/user", User.findAllUsers);
router.get("/user/:id", User.findUser);
router.put("/user/:id", User.updateUser);
router.delete("/user/:id", User.deleteUser);

export { router };