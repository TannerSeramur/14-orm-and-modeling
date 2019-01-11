'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
// const products = require('./products-schema')

const category = mongoose.Schema({
  name: { type:String, required:true },
  description: { type:String, required:true},
},{toObject:{virtuals:true}, toJSON:{virtuals:true}});

category.virtual('products', {
  ref: 'products',
  localField: 'name',
  foreignField: 'category',
  justOne: false,
});

category.pre('find', function() {
  try {
    this.populate('products');
  } 
  catch(e) { console.error('find error', e); }
});


module.exports = mongoose.model('category', category);

