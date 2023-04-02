const {Router} = require("express")

const usersRoutes = require("./users.routes")
const dishsRoutes = require("./dishes.routes")
const cartsRoutes = require("./carts.routes")
const sessionsRoutes = require("./sessions.routes")

const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/dishes", dishsRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/carts", cartsRoutes)
module.exports = routes

