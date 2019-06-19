import { ExtractJwt, Strategy } from "passport-jwt";
import * as jwt from "jsonwebtoken";

const jwtSecret = process.env.YUN_JWT_SECRET!;
export const JwtStrategy = new Strategy({
  // audience: "hifumi.io",
  secretOrKey: jwtSecret,
  // issuer: "auth.hifumi.io",
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  // we will be blacklisting tokens
  // manually through the database
  // in order to not deal with refresh tokens
  ignoreExpiration: true
}, (payload, done) => {
  console.log(payload);
  done(null, payload);
});

export const issueJwt = (user: object) => {
  return jwt.sign({ user }, jwtSecret, {
    expiresIn: Number.MAX_SAFE_INTEGER
  });
};
