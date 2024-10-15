import { db } from "../database/index.js";
import { users } from "../database/schema.js";
import jwt from "jsonwebtoken";

// Get all users with their associated accounts
export const getUsers = async (req, res) => {
  try {
    const allUsers = await db.query.users.findMany({
      with: {
        accounts: true,
      },
    });

    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users." });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body; // ene hoyr utgiig requstiin bodygoos awch irj bga
  // const users = readJson("users.json"); //ooriin users.jhson file-iig unshij bga, duudaj bga
  try {
    const users = await db.query.users.findMany({});
    const user = users.find(
      (user) => user.email === email && user.password === password
    ); // utguudtai taarah vr dvn bga esehiig shalgaj bga

    if (!user) {
      return res
        .status(401)
        .json({ message: "Nuuts vg buruu eswel email bvrtgelgvi bn" });
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
      message: "Амжилттай нэвтэрлээ",
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Create a new user
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await db
      .insert(users)
      .values({ name, email, password })
      .returning();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user." });
  }
};
