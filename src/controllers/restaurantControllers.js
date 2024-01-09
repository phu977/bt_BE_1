import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const listLikeRes = async (req, res) => {
  try {
    const { res_id } = req.params;
    const result = await conn.restaurant.findAll({
      include: [
        {
          model: conn.like_res,
          as: "like_res", // dùng để kết hợp 2 cột
          attributes: ["like_id", "date_like"],
        },
      ],
      where: { res_id },
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
const listRateRes = async (req, res) => {
  try {
    let { res_id } = req.params;
    const list = await conn.restaurant.findAll({
      include: [
        {
          model: conn.rate_res,
          as: "rate_res", // dùng để kết hợp 2 cột
          attributes: ["amount", "date_rate"],
        },
      ],
      where: { res_id },
    });
    res.status(200).send(list);
  } catch (error) {
    res.send(error);
  }
};
export { listLikeRes, listRateRes };
