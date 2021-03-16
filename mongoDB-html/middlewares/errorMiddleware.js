'use strict';
/**
 * Error middleware
 * @param {*} error
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const errorMiddleware = (error, req, res, next) => {
  console.error(error);
  res.status(500).render('500', {
    pageTitle: 'Error',
    isAuthenticated: (req.session && req.session.isLoggedIn) || false,
  });
};

module.exports = errorMiddleware;
