// src/data/users.js

import { Password } from "@mui/icons-material";

const users = [];
const passwords =[];

export function addUser(user) {
  users.push(user);
}

export function addPassword(password){ 
  passwords.push(password)
}

export function getUserByEmail(email) {
  return users.find((u) => u.email === email);
}

export function getUserByPassword(pass){
  return passwords.find((u) => u.password === pass);
}

export function getAllUsers() {
  return users;
}

