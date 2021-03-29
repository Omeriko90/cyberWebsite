const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const sqlite3 = require("sqlite3").verbose();
let indexRouter = require("./routes/index");
const app = express();
const db = new sqlite3.Database("./posts.db");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);

app.listen(port, () => initDB());

const initDB = () => {
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, postname TEXT, category TEXT, postcontent TEXT,createdon TEXT)"
    );
    const query = db.prepare(
      "INSERT INTO posts (postname,category,postcontent,createdon) VALUES (?,?,?,?)"
    );

    for (let i = 0; i < initDBValues.length; i++) {
      query.run([
        initDBValues[i].title,
        initDBValues[i].category,
        initDBValues[i].content,
        initDBValues[i].createdOn,
      ]);
    }
    query.finalize();

    db.close();
  });
};

const initDBValues = [
  {
    title: "Is TrickBot Indestructible",
    content:
      "After a takedown attempt in 2020 by the global law enforcement, that somehow wasn't that successful, a new TrickBot version has arrived.",
    category: "Vulnerabilities",
    createdOn: "2021-01-30 00:00:000",
  },
  {
    title: "North Korean Hackers Building Fake Persona on Social Networks",
    content:
      "North Korea-backed threat actors are impersonating security experts to launch attacks on the security community possibly to obtain details of undisclosed vulnerabilities that can be exploited later.",
    category: "Cyber Attacks",
    createdOn: "2021-01-29 00:00:000",
  },
  {
    title: "Emotet - Soon to be Dead and Buried",
    content:
      "Emotet, one of the most active and dangerous botnets, has been taken down by international authorities, in an operation coordinated by Europol and Eurojust.",
    category: "Malwares",
    createdOn: "2021-01-29 00:00:000",
  },
  {
    title: "Emotet - Soon to be Dead and Buried",
    content:
      "CyberNT Databases have been breached by anonymous hackers, due to an undisclosed vulnerability. the commercial website holds sensitive unpublished information about the latest hackings news which can be affect hundreds of companies. A day after the leak which was found in an anonymous pastebin post. The vulnerability should be fixed by now.",
    category: "Data Leaks",
    createdOn: "2021-01-29 00:00:000",
  },
  {
    title: "North Korean Hackers Exploiting Psychological Weaknesses",
    content:
      "Although the tactic was unique considering the targeting of security researchers, it is not technically novel. This incident is a reminder to maintain your psychological defenses and stay vigilant.",
    category: "Malwares",
    createdOn: "2021-01-29 00:00:000",
  },
];
