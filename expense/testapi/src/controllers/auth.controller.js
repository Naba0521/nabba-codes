const { readJson, saveJson } = require("../utils");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
require("dotenv").config();
console.log(process.env.JWT_SECRET);

const login = async (req, res) => {
  const { email, password } = req.body; // ene hoyr utgiig requstiin bodygoos awch irj bga
  const users = readJson("users.json"); //ooriin users.jhson file-iig unshij bga, duudaj bga

  const user = users.find(
    (user) => user.email === email && user.password === password
  ); // utguudtai taarah vr dvn bga esehiig shalgaj bga

  if (!user) {
    return res.status(401).json({ message: "Nuuts vg buruu bna" });
  } // herwee taarah utga bhgvi oldohgvi bol ene utgiig butsaana return nemj ogsonoor end vildel duusaj bga bogood daraagiin vildeliig hiihgvi tul back unahgvi ee
  const token = jwt.sign(
    //token vvsgej bga vildel generateleh
    {
      username: user.name,
      email: user.email,
      id: user.id,
    }, //payload hiih yumaa bichih heseg
    process.env.JWT_SECRET // .env(git rvv push hiigdehgvi  bh yostoi) deer hadgalsan nuuts vgiig nuutsalsan baidlaar oruulj irj bga
  );
  res.json({
    token,
    user: {
      username: user.name,
      email: user.email,
      id: user.id,
    },
  });

  // if (user) {
  //   res.status(200).json({ message: "Login successful" });
  // } else {
  //   res.status(401).json({ message: "Invalid credentials" });
  // }
};
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const users = readJson("users.json");

  const user = users.find((user) => user.email === email); // iim emailtai user bvrtgeltei bga esehiig shalgaj bga

  if (user)
    return res.status(400).json({ message: "Ene email bvrtgeltei bna" }); // herwee oldohiig ene email bvrtgeltei bna gesen aldaa butsaay

  const newUser = {
    // oldohgvi bhin bol shine hereglegch vvsgeed id nemj ogood
    id: v4(),
    name,
    email,
    password,
  };

  users.push(newUser); // user lvvgee hiij hadgalah

  saveJson("users.json", users); // hadgalah

  res.json(newUser); // shine hereglegch geed butsaah
};

module.exports = { login, createUser };
