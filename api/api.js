const express = require('express');
const apiRouter = express.Router();
const menusRouter = require('./menus.js')
const employeesRouter = require('./employees.js')
apiRouter.use('/employees', employeesRouter );
apiRouter.use('/menus', menusRouter);

module.exports = apiRouter;