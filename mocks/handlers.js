import { rest } from "msw";

const cookieName = "FOO";
const authorizedValue = "ABCD1234";

export const handlers = [
  rest.get("/ping", (req, res, ctx) => {
    if (req.cookies[cookieName] === authorizedValue) {
      return res(ctx.text("pong"), ctx.cookie(cookieName, authorizedValue));
    }
    return res(ctx.status(401));
  }),
];
