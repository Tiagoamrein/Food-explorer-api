const { Router } = require("express");
const CartsController = require("../Controllers/CartsController");
const authenticated = require("../middlewares/ensureAuthenticated");
const ensureIsAdmin = require("../middlewares/ensureIsAdmin");

const cartsRoutes = Router();

const cartsController = new CartsController();

cartsRoutes.use(authenticated);

cartsRoutes.post("/", cartsController.create);
cartsRoutes.get("/:id", cartsController.show);
cartsRoutes.get("/",ensureIsAdmin, cartsController.index);
cartsRoutes.delete("/:id", cartsController.delete);
cartsRoutes.put("/", cartsController.update);


module.exports = cartsRoutes;