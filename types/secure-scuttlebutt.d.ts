
declare module "secure-scuttlebutt" {
  import { KeyPair } from "ssb-keys";
  type PullSource = any;

  interface LogStreamOpts {
    gt: any;
    tail: boolean
  }

  interface HistoryStreamOpts {
    id: string;
    seq?: number;
    live?: boolean;
    limit?: number;
    keys?: boolean;
    values?: boolean;
  }

  interface LinkOpts {
    source?: string;
    dest: string;
    rel?: string;
    meta?: true;
    keys?: true;
    values?: false;
    live?: false;
    reverse?: false;
  }

  interface MessageByTypeOpts {
    type: string;
    live?: boolean
  }

  interface FeedStreamOpts {
    start: any;
    end: any;
    reverse: any;
    tail: any;
  }
  export interface ScuttleButtMessageBase {
    type: string;
    recps?: string[];
  }

  export interface ScuttleButtMessage extends ScuttleButtMessageBase {
    type: string;
    message: object | string;
    recps?: string[];
  }
  // TODO: Check out SSBC's schema definitions.
  export interface ScuttleButtPost extends ScuttleButtMessageBase {
    type: string;
    text: string;
    recps?: string[];
  }

  type AddCallback<T = ScuttleButtPost> = (e: object | undefined, msg: T, hash: string) => void;

  class ScuttleButtFeed {
    public add(message: ScuttleButtPost, cb: AddCallback): void;
    public id: string;
    public keys?: string[];
  }

  interface Feed {
    add<T>(msg: ScuttleButtPost, cb: AddCallback): void;
  }

  export interface ScuttleButt {
    createFeed(keys?: KeyPair): Feed;
    createFeedStream(opts?: FeedStreamOpts): PullSource;
    createLogStream(opts: LogStreamOpts): PullSource;
    createHistoryStream(opts: HistoryStreamOpts): PullSource;
    messagesByType(opts: MessageByTypeOpts): PullSource;
    links(opts: LinkOpts): PullSource;
  }
  /** Probably wrong? */
  type CreateFeed = (keys?: KeyPair) => ScuttleButtFeed;
  const createFeed: CreateFeed;
  export default createFeed;
}
