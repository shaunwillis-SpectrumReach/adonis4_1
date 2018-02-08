'use strict'

const Model = use('Model')

class Token extends Model {


  pid() {
    return this.belongsTo('App/Model/Pid');
  }


}

module.exports = Token
