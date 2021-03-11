const orm = require('../config/orm.js');

const burger = {
  selectAll(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  insertOne(tableCol, newItem, cb) {
    orm.insertOne('burgers', tableCol, newItem, (res) => cb(res));
  },
  updateOne(tableCol, newName, id, cb) {
    orm.updateOne('burgers', tableCol, newName, id, (res) => cb(res));
  },
};

module.exports = burger;
