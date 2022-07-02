import compress from "compression";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import path from "path";
import services from "./services/index.js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.join(__dirname, "../");

const app = express();
// Aceess resources from remote hosts
app.use(cors());

app.use(compress());

// Set HTTP headers to improve security aganist XSS attacks
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "*.amazonaws.com"],
    },
  })
);
app.use(helmet.referrerPolicy({ policy: "same-origin" }));

// Bind GraphQL server to the Express JS web server

const serviceNames = Object.keys(services);
serviceNames.forEach((name) => {
  if (name === "graphql") {
    (async () => {
      await services["graphql"].start();
      services["graphql"].applyMiddleware({ app });
    })();
  } else {
    // bind service to route via name
    app.use(`/${name}`, services[name]);
  }
});

app.use("/", express.static(path.join(root, "/client/build")));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(8000, () => console.log("Listening on port 8000!"));
