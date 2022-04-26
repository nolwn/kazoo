import Router from "koa-router";
import { file, homepage } from "./handlers";

const router = new Router();

// matches "/content" followed by and letters, numbers and forward slashes
const filePattern = /^(\/content)([\w\/]+)?/;

router.get(filePattern, file);
router.get("/", homepage);

export default router;
