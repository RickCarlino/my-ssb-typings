declare module "ssb-client" {
  import { ScuttleButtMessageBase } from "secure-scuttlebutt";

  interface SbotCallback<T> {
    (err: null | Error, msg: T): void;
  }

  interface SbotInfo { // NOT COMPLETE
    id: string;
  }

  interface SBot {
    close(): void;
    publish<T extends ScuttleButtMessageBase>(msg: T, cb?: SbotCallback<T>);
    whoami(cb: SbotCallback<SbotInfo>);
    createUserStream(user: SbotInfo);
  }

  const sbot: (err: null | Error, sbot: SBot) => void;

  export default sbot;
}
