const db = require('../config/database');

const getAll = async () => {
  try {
    const [results] = await db.query('SELECT * FROM subordinates');
    return results;
  } catch (error) {
    console.error('Error in getAll:', error);
    throw error;
  }
};

const add = async (subordinateData) => {
  try {
    const { name, address, contactNumber, gender } = subordinateData;
    const [results] = await db.query(
      'INSERT INTO subordinates (name, address, contactNumber, gender) VALUES (?, ?, ?, ?)',
      [name, address, contactNumber, gender]
    );
    return results;
  } catch (error) {
    console.error('Error in add:', error);
    throw error;
  }
};

const update = async (id, subordinateData) => {
  try {
    const { name, address, contactNumber, gender } = subordinateData;
    const [results] = await db.query(
      'UPDATE subordinates SET name = ?, address = ?, contactNumber = ?, gender = ? WHERE id = ?',
      [name, address, contactNumber, gender, id]
    );
    return results;
  } catch (error) {
    console.error('Error in update:', error);
    throw error;
  }
};

const deleteSubordinate = async (id) => {
  try {
    const [results] = await db.query(
      'DELETE FROM subordinates WHERE id = ?',
      [id]
    );
    return results;
  } catch (error) {
    console.error('Error in delete:', error);
    throw error;
  }
};

module.exports = {
  getAll,
  add,
  update,
  delete: deleteSubordinate,
};