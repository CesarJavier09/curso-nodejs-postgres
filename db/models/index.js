const {User, UserSchema} = require('./user.model');
const {Customer, customerSchema} = require('./customer.model');
const {Category, CategorySchema} = require('./category.model');
const {Product, ProductSchema} = require('./products.model');
const {Order, orderSchema} = require('./order.model');
const {OrderProduct, orderProductSchema} = require('./order-product.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Customer.init(customerSchema,Customer.config(sequelize));
  Category.init(CategorySchema,Category.config(sequelize));
  Product.init(ProductSchema,Product.config(sequelize));
  Order.init(orderSchema,Order.config(sequelize));
  OrderProduct.init(orderProductSchema,OrderProduct.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
