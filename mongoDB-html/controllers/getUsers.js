'use strict';
const userCollection = require('../models/users');

/**
 * Get users endpoint that returns information regarding all the users
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getUserDetails = async (request, response, next) => {
  try {
    console.debug('Index incoming request...');
    console.debug('Getting notes from DB...');
    const users = await userCollection.find({});
    console.debug('Notes found in DB: ' + users);
    response.render('index', {
      pageTitle: 'User lists',
      userList: users,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getUserDetails;
