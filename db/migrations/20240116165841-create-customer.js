'use strict';

const {customerSchema, CUSTOMER_TABLE} = require('./../models/customer.model');
const {ORDER_TABLE,orderSchema} = require('./../models/order.model');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface) {
    queryInterface.createTable(ORDER_TABLE,orderSchema);
    await queryInterface.createTable(CUSTOMER_TABLE,customerSchema);
  },

  async down (queryInterface) {
    queryInterface.dropTable(ORDER_TABLE);
   await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
