declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    API_URL: string;
    DISCORD_TOKEN: string;
  }
}