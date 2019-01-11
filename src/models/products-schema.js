'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);
// const category = require('./category-schema')

const products = mongoose.Schema({
  name: { type:String, required:true },
  category: { type:String, required:true},
  // price: { type:String, required:true},
  // description: { type:String, required:true},
},{toObject:{virtuals:true}, toJSON:{virtuals:true}});

// products.virtual('cat', {
//   ref: 'category',
//   localField: 'category',
//   foreignField: 'name',
//   justOne: false,
// });

// products.pre('find', function() {
//   try {
//     this.populate('cat');
//   } 
//   catch(e) { console.error('find error', e); }
// });


module.exports = mongoose.model('products', products);

