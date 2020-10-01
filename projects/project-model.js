const db = require('../db/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
};

function find() {
    return db('projects')
}

function findBy(filter) {
    return db('projects').where(filter);
}

async function add(project) {
    const [id] = await db('projects').insert(project);

    return findById(id);
}

function findById(id) {
    return db('projects')
    .where({ id })
    .first();
}

function remove(id) {
    return db('projects')
      .where('id', Number(id))
      .del();
}

function update(changes, id) {
    return db('projects')
      .where({ id })
      .update(changes);
};