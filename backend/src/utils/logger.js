import pino from "pino";
import { env } from "../config/env.js";

const isDevelopment = env.nodeEnv !== "production";

export const logger = pino(
  isDevelopment
    ? {
        transport: {
          target: "pino-pretty",
          options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname",
          },
        },
      }
    : {},
);
