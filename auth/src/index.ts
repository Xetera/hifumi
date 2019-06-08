import { config } from "dotenv";
config();

import express from "express";
import passport from "passport";
import { Strategy } from "passport-discord";
import session from "express-session";
import cors from "cors";
import morgan = require("morgan");

const port = process.env.PORT || 4000;
const app = express();

app.use(
  session({
    // if we ever have to reset the secret
    // the sessions should also be invalidated
    secret: process.env.YUN_OAUTH_SECRET!,
    resave: false,
    saveUninitialized: true,
    name: "yunsid",
    cookie: {
      domain: ".hifumi.io",
      secure: process.env.NODE_ENV === "prod",
      httpOnly: true
    }
  })
);

passport.use(
  new Strategy(
    {
      clientID: process.env.YUN_OAUTH_ID!,
      clientSecret: process.env.YUN_OAUTH_SECRET!,
      callbackURL: process.env.YUN_OAUTH_CALLBACK,
      scope: ["identify"]
    },
    (_, __, profile, cb) => {
      cb(null, profile.id);
    }
  )
);

passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

app.use(
  cors({
    credentials: true,
    origin: process.env.NODE_ENV === "prod" ? "https://web.hifumi.io" : "http://localhost:4040",
    allowedHeaders: ["Authorization"]
  })
);
app.use(morgan(process.env.NODE_ENV === "prod" ? "short" : "dev"));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send({ test: "yes" });
});

app.get("/login", passport.authenticate("discord"));
app.get("/callback", passport.authenticate("discord"), (req, res) => {
  res.redirect(
    process.env.YUN_WEBSITE_REDIRECT || "http://localhost:4040/dashboard"
  );
});

app.get("/auth", (req, res) =>
  res.send({
    authorized: Boolean(req.session.passport && req.session.passport.user)
  })
);

app.get("/hasura", (req, res) => {
  if (!req.session.passport || !req.session.passport.user) {
    return res.sendStatus(401);
  }
  return res.send({
    "X-Hasura-User-Id": req.session.passport.user,
    "X-Hasura-Role": "user"
  });
});

app.listen(port, () => {
  console.log("Running...");
});
