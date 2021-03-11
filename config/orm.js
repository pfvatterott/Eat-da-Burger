// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
    selectAll(table, cb) {
        const queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        }
        )
    },

    insertOne(table, tableCol, newItem, cb) {
        const queryString = `INSERT INTO ${table} (${tableCol}) VALUES (${newItem});`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result);
        }
        )
    },

    updateOne(table, tableCol, newName, id, cb) {
        const queryString = `UPDATE ${table} SET ${tableCol} = ${newName} WHERE id = ${id};`;
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
