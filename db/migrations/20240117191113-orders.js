'use strict';
const {ORDER_TABLE,orderSchema} = require('./../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
  //  queryInterface.createTable(ORDER_TABLE,orderSchema);
  },

  async down (queryInterface) {
    // queryInterface.dropTable(ORDER_TABLE);
  }
};
