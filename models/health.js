module.exports = function(sequelize, DataTypes) {
  console.log('Going to initialize this model')
  var Food = sequelize.define("Food", {
    food: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1, 50]
}
  },
    amount: {
      type: DataTypes.INTEGER
},
   fullness: {
      type: DataTypes.STRING
},
  emotion: {
      type: DataTypes.STRING
},
   note: {
      type: DataTypes.STRING
},
   picture: {
      type: DataTypes.STRING
}
}, {
  timestamps: true
});
return Food;
};
