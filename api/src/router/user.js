const express = require("express");
const router = new express.Router();
const Users = require("../models/user");
const { ObjectID } = require("mongodb");
const authenticate = require("../middleware/auth");
const { paginatedPayload, getPagination } = require("../utils/pagination");

router.get("/users", async (req, res) => {
  const { page, size, ...query } = req.query;
  const { limit, offset } = getPagination(page, size);

  try {
    const data = await Users.paginate(query, { offset, limit });
    res.send(paginatedPayload(data, "users"));
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

router.post("/users", async (req, res) => {
  const user = new Users(req.body);
  try {
    const token = await user.newAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/me", async (req, res) => {
  res.send(req.user);
});

router.put("/users/me", authenticate, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password", "age"];
  const isValidOperation = updates.some((update) =>
    allowedUpdates.includes(update)
  );
  const _id = req.user._id;

  if (!isValidOperation) {
    res.status(400).send({ error: "Invalid request" });
  }

  if (!ObjectID.isValid(_id)) {
    return res.status(404).send();
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send();
  }
});

router.delete("/users/me", authenticate, async (req, res) => {
  if (!ObjectID.isValid(req.user._id)) {
    return res.status(404).send();
  }

  try {
    await req.user.remove();
    res.send(req.user);
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await Users.checkValidCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.newAuthToken();
    console.log(user, token);
    res.send({ user, token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

router.post("/users/logout", authenticate, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

router.post("/users/logoutall", authenticate, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
