import dotenvFlow from 'dotenv-flow';
// eslint-disable-next-line @typescript-eslint/naming-convention
dotenvFlow.config({ default_node_env: 'local', silent: true });

export default {
  figma: {
    filename: process.env.FIGMA_FILENAME,
    personalAccessToken: process.env.FIGMA_PERSONAL_ACCESS_TOKEN
  }
};
