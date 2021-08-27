module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "tbl_product",
    {
      p_code: { type: DataTypes.STRING(10), primaryKey: true },
      p_name: { type: DataTypes.STRING(30), allowNull: false },
      p_price: { type: DataTypes.INTEGER, allowNull: false },
      p_rem: { type: DataTypes.STRING(30) },
    },
    { timestamps: false } // createAt, updateAt 만들지않기
  );

  return product;
};
