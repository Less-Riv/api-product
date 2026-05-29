import { Router } from "express";
import productsControllers from "../controllers/products.controller.js";

const router = Router();

router.get("/getAll", productsControllers.getAll);
router.get("/:barcode", productsControllers.getOne);
router.post("/insertOne", productsControllers.insertOne);
router.put("/updateOne/:barcode", productsControllers.updateOne);
router.delete("/deleteOne/:barcode", productsControllers.deleteOne);

export default router;
