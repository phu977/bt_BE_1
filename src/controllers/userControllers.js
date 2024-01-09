import { json } from "sequelize";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const userLike = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;
    let newUserLike = {
      user_id,
      res_id,
      date_like,
    };
    await conn.like_res.create(newUserLike);
    res.status(200).send("user like");
  } catch (error) {
    res.send(error);
  }
};
const userUnlike = async (req, res) => {
  try {
    let { like_id } = req.params;
    await conn.like_res.destroy({
      where: {
        like_id: like_id,
      },
    });
    res.status(200).send("user unlike");
  } catch (error) {
    res.send(error);
  }
};
const listUserLike = async (req, res) => {
  try {
    const { id: user_id } = req.params;
    const result = await conn.users.findAll({
      include: [
        {
          model: conn.like_res,
          as: "like_res", // dùng để kết hợp 2 cột
          attributes: ["like_id", "date_like"],
        },
      ],
      where: { user_id },
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const createRate = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;
    let newRate = {
      user_id,
      res_id,
      amount,
      date_rate,
    };
    await conn.rate_res.create(newRate);
    res.status(200).send("create rate success");
  } catch (error) {
    res.send(error);
  }
};

const createOder = async (req, res) => {
  try {
    let { user_id, res_id, food_id, amount, code, arr_sub_id } = req.body;
    let newOrder = {
      user_id,
      res_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await conn.order_food.create(newOrder);
    res.status(200).send("create order success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const listUserRate = async (req, res) => {
  try {
    let { user_id } = req.params;
    const list = await conn.users.findAll({
      include: [
        {
          model: conn.rate_res,
          as: "rate_res", // dùng để kết hợp 2 cột
          attributes: ["amount", "date_rate"],
        },
      ],
      where: { user_id },
    });
    res.status(200).send(list);
  } catch (error) {
    res.send(error);
  }
};

export {
  userLike,
  userUnlike,
  listUserLike,
  createRate,
  createOder,
  listUserRate,
};
