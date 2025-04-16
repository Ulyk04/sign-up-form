// src/data/users.js

const users = [];

export function addUser(user) {
  users.push(user);
}

export function getUserByEmail(email) {
  return users.find((u) => u.email === email);
}

export function getAllUsers() {
  return users;
}
