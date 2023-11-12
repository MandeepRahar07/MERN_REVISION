// models/courses.js
module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("courses", {
      // Define columns for the courses table
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Courses;
  };
  