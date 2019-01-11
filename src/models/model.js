'use strict';

class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  post(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  put(id, entry) {
    return schema.findOneAndUpdate( { _id: id}, { $set: entry }, { new: true });
  }

  delete(id) {
    return schema.findOneAndRemove( { _id: id} );
  }

}

module.exports = DataModel;