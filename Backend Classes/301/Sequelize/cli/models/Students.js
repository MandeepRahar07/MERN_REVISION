// models/students.js
module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("students", {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: DataTypes.INTEGER,
      coursID: {
        type: DataTypes.INTEGER,
        references: {
          model: "courses", // Corrected reference to the "courses" table
          key: "id",
        },
      },
    });
    return Students;
  };
  