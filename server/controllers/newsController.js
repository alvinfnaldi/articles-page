const { News } = require("../models");

class NewsController {
  static async getNews(req, res) {
    try {
      const result = await News.findAll({
        order: [["id", "DESC"]],
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async create(req, res) {
    try {
      const { title, newsBody, category, writer, writerId, status } = req.body;
      let image = "https://via.placeholder.com/100";
      // let status = 1;
      const result = await News.create({
        title,
        newsBody,
        category,
        writer,
        writerId,
        image,
        status,
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async delete(req, res) {
    try {
      const id = req.params.id;

      const result = await News.destroy({ where: { id: id } });

      result === 1
        ? res.status(200).json({ message: `Id ${id} has been deleted` })
        : res.status(400).json({ message: `Id ${id} has not been deleted` });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async update(req, res) {
    try {
      const id = req.params.id;
      const { title, newsBody, category, writer, writerId, image, status } =
        req.body;

      const result = await News.update(
        {
          title,
          newsBody,
          category,
          writer,
          writerId,
          image,
          status,
        },
        { where: { id: id } }
      );
      console.log(result);
      result[0] === 1
        ? res.status(200).json({ message: `Id ${id} has been updated` })
        : res.status(400).json({ message: `Id ${id} has not been updated` });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async getDetails(req, res) {
    try {
      const id = req.params.id;
      const result = await News.findByPk(id);

      console.log(result);
      result
        ? res.status(200).json(result)
        : res.status(404).json({
            message: `Id ${id} not found`,
          });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async checkToken(req, res, next) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        const verify = jwt.verify(token, process.env.SECRET_KEY);
        if (verify) {
          next();
        }
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = NewsController;
