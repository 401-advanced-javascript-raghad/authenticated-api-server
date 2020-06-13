'use strict';

require('dotenv').config();
const schema = require('./users-schema');
const Model = require('../mongo');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');


const SECRET = process.env.SECRET || 'secret';

let roles = {
  user: ['read'],
  writer: ['read', 'add'],
  editor: ['read', 'change', 'add'],
  admin: ['read', 'change', 'add', 'remove'],
};

class Myusers extends Model {
  constructor() {
    super(schema);
  }
 
  async save(record) {
    let data = await this.get({ username: record.username });
    if(data.length === 0){
      return this.create(record);
    }else{
      return Promise.reject('This user is exists!');
    }
  }

  async authenticateBasic(username, password) {
    let data = await this.get({ username: username });
    let valid = await bcryptjs.compare(password, data[0].password);
    return valid ? data[0] : Promise.reject();
  }

  generateToken(user){    
    const token =  jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (15 * 60),
      algorithm:  'RS384',
      username: user.username,
      capabilities: roles[user.role],
    }, SECRET);
    return token;
  }
  async can (permission){
    if(permission){
      Promise.resolve('true');
    }else{
      Promise.reject('false');
    }
  }
  async verifyToken(token) {
    try {
      const tokenObject = await jwt.verify(token, SECRET);
      const result = await this.get({username : tokenObject.username});
      if (result.length != 0) {
        return Promise.resolve(tokenObject);
      } else {
        return Promise.reject('User is not found!');
      }
    } catch (e) {
      return Promise.reject(e.message);
    }
  }
}


module.exports = new Myusers();