const express = require("express");
const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

function response(results) {
  return `
  <h1>Full Cycle Rocks!</h1>
  <ol>
      ${results.map(({ name }) => `<li>${name}</li>`)}
  </ol>
  `;
}

app.get("/", (req, res) => {
  const randomName = faker.name.findName();

  const sql = `INSERT INTO people(name) values('${randomName}')`;
  const select = `SELECT name from people`;

  connection.query(sql);

  connection.query(select, function (err, results, fields) {
    res.send(response(results));
  });
});

app.listen(port, () => {
  console.log(`Running at port:${port}`);
});
