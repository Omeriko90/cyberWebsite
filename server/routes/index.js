const express = require("express");
const router = express.Router();
const Parser = require("rss-parser");
const parser = new Parser();
var sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./posts.db");

router.post("/addpost", (req, res, next) => {
  const newPost = JSON.parse(req.body);
  const query = db.prepare(
    "INSERT INTO posts (postname,category,postcontent,createdon) VALUES (?,?,?,?)"
  );
  query.run(
    [newPost.title, newPost.category, newPost.content, newPost.createdOn],
    (err) => {
      if (err) {
        return res.send(err);
      } else {
        return res.send("Success");
      }
    }
  );
  query.finalize();
  db.close();
});
router.get("/getposts", (req, res, next) => {
  let posts = [];
  db.all("select * from posts", function (err, rows) {
    rows.forEach((row) => {
      posts.push({
        title: row.postname,
        content: row.postcontent,
        category: row.category,
        createdOn: row.createdon,
      });
    });
    return res.send(posts);
  });
  db.close();
});
module.exports = router;
