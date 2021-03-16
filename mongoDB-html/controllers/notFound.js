'use strict';
/**
 * Not found controller that handles undefined routes
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const notFound = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
  });
}

module.exports = notFound;