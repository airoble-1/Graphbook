import Sequelize from "sequelize";
import sequelize from "../database/index.js";

const { DataTypes } = Sequelize;
const Post = sequelize.define("Post", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Post;
