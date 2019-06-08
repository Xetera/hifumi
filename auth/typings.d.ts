declare namespace Express {
  export interface Request {
    session: Session & {
      user?: string;
    };
  }
}
