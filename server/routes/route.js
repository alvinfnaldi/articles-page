const route = require("express").Router();

const newsRoutes = require("./news")
const userRoutes = require("./user")

route.use("/news", newsRoutes)
route.use("/users", userRoutes)

module.exports = route