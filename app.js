import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("layout", { title: "About", content: "This is the about page." }));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
