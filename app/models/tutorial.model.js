module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
           userid : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
       
           },
       
           username: {
             type: DataTypes.STRING,
             allowNull: false,
           },
           email: {
             type: DataTypes.STRING,
             allowNull: false,
             isEmail: true,
            unique : true,
           },
           password: {
             type: DataTypes.TEXT,
             min : 20 ,
             allowNull: false,
           }, 
  });

  return  User;
};
