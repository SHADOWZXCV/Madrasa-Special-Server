require('dotenv').config();
require('module-alias/register');
const express = require('express');
const cors = require('cors');
const registerRoutes = require('@Route');
const { corsOptions, checkState } = require('./config');
const morganMiddleware = require('./middleware/morganLogger.middleware');
const logger = require('@Util/log');
const app = express();

app.use(cors(corsOptions));
app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
registerRoutes(app);
checkState();

app.listen(3001, () => logger.info("Wezza_special is on port 3001"));
