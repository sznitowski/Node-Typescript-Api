import { Router } from "express";
import passport from "passport";

const router = Router();

import { protect } from "../controllers/protect.controller";

router.get(
  "/protect",
  passport.authenticate("jwt", { session: true }),
  protect
);

export default router;