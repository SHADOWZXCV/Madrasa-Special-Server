const mongoose = require('mongoose');
const { SCHOOLSCHEMA } = require('./schemas');
const logger = require('@Util/log');

class DB {
    constructor(){
        this._connect();
        this.schoolSchema = this._createInstance();
        this.schoolModel = this._createModel();
    }

    _connect(){
        mongoose.connect(process.env.DBUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } ,(err) => err ? logger.fatal(err) : logger.info('db is conntected'));
    }

    getConnection(){
        return mongoose.connection;
    }

    _createInstance(){
        return mongoose.Schema(SCHOOLSCHEMA, { collection: 'schools' });
    }

    _createModel(){
        return mongoose.model('School', this.schoolSchema);
    }
}

module.exports = new DB();
