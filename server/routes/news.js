const newsRoute = require("express").Router()
const newsController = require("../controllers/newsController")

newsRoute.get("/", newsController.getNews)
newsRoute.post("/create", newsController.create)
newsRoute.delete("/delete/:id", newsController.delete)
newsRoute.put("/update/:id", newsController.update)
newsRoute.get("/details/:id", newsController.getDetails)

module.exports = newsRoute