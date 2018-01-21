'use strict';

<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
  var Tasks = sequelize.define('Tasks', {
    task_name: DataTypes.STRING,
    description: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    imageLink: DataTypes.STRING,
    timeFrame: DataTypes.STRING,
    category: DataTypes.STRING,
    skillLevel: DataTypes.STRING,
    internetSearch: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Tasks.belongsTo(models.Category, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Tasks;
};
=======
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Task" model that matches up with DB
var Tasks = sequelize.define("book", {
  task: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  imageLink: {
    type: Sequelize.STRING
  },
  timeFrame: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  }, 
  skillLevel:{
    type: Sequelize.STRING
  }, 
  internetSearch:{
    type: Sequelize.STRING
  },
});

// Syncs with DB
Tasks.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Task
>>>>>>> development
