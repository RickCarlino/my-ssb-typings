declare module "pull-stream" {
  interface Pull {
    (...x: any[]): any;
    collect<T>(cb: (err: undefined | {}, data: T) => void): void;
    /** Add more stuff here - RC */
  }

  const pull: Pull;
  export default pull;
}
