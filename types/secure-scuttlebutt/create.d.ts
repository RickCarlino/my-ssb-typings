
declare module "secure-scuttlebutt/create" {
  import { ScuttleButt } from "secure-scuttlebutt";
  const create: (path: string, opts?: {}, keys?: any) => ScuttleButt;
  export default create;
}
