const db = require('../../data/dbConfig');

function getAll() {
    return db("users");
}

async function addUser(user) {
    const [id] = await db("users").insert(user);
    return findById(id);
}

function findBy(filter) {
      return db("users")
      .where(filter)
      
  }

function findById(id) {
    return db("users")
      .where("users.id", id)
      .first();
  }

module.exports = {
    getAll,
    addUser,
    findById,
    findBy
}