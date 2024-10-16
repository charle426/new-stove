const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("../App");
const app = express();
app.use(express.static("public"));


app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString("<App />");
  res.send(html);
});



const PORT = process.env.PORT || 3000;
app.listen(PORT);