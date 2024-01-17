'use strict';

const {CategorySchema, CATEGORY_TABLE} = require('./../models/category.model');
const {ProductSchema, PRODUCT_TABLE} = require('./../models/products.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
   queryInterface.createTable(CATEGORY_TABLE,CategorySchema);
   queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
  },

  async down (queryInterface) {
   queryInterface.dropTable(CATEGORY_TABLE);
   queryInterface.dropTable(PRODUCT_TABLE);
  }
};
