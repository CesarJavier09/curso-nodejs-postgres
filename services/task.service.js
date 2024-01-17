const faker = require('faker');
const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class TasksService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const query = `INSERT INTO tasks (title) VALUES ('${data.title}')`;
    const response = await sequelize.query(query);
    return response.rowCount;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  }

  async findOne(id) {
    const query = `SELECT * FROM tasks WHERE id = ${id}`;
    const response = await sequelize.query(query);
    if (!response) {
      throw boom.notFound('product not found');
    }
    return response.rows;
  }

  async update(id, changes) {
    if(!changes.title && !changes.completed){
      console.error("No data found");
      return;
    }

    const selectQuery = `SELECT * FROM tasks WHERE id = ${id}`;
    const result = await sequelize.query(selectQuery);
    if (!result) {
      throw boom.notFound('task not found');
    }

    const query = `UPDATE tasks SET title = '${changes.title}', completed = ${changes.completed} WHERE id = ${id}`;
    const response = await sequelize.query(query);
    return response.rowCount;
  }

  async delete(id) {
    const selectQuery = await sequelize.query(`SELECT COUNT(*) FROM tasks WHERE id = ${id} COUNT`);
    if (selectQuery == 0) {
      throw boom.notFound('task not found');
    }
   const response = await sequelize(`DELETE FROM tasks WHERE id = ${id}`);
    return response.rowCount;
  }

}

module.exports = TasksService;
