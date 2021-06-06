import dotenvFlow from 'dotenv-flow';

declare module 'dotenv-flow' {
  interface DotenvConfigOptions {
    /**
     * With this option you can suppress all the console outputs except errors and deprecation warnings.
     */
    silent?: boolean;
  }
}

dotenvFlow.config({
  default_node_env: 'test',
  silent: true
});
