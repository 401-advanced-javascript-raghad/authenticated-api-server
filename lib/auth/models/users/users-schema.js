'use strict';

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const schema = mongoose.Schema({
  username : {type : String , required : true},
  password : { type : String , required : true},
  role : {
    type : String,
    default : 'user',
    enum : ['admin', 'editor' ,'writer','user'],
  }});

schema.pre('save', async function() {
  this.password  = await bcryptjs.hash(this.password, 5);
});

module.exports = mongoose.model('schema', schema);