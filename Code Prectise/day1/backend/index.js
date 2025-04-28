import express from 'express'
import cors from 'cors';
import jsonData from "./db.json" assert { type: "json" };

const app = express();
const port = 3000;

const data = jsonData;
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello CodeSandbox!");
});

app.get("/data", (req,res)=>{
res.send(data);
})

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});
