declare module "ssb-keys" {
  interface KeyPair {
    id: string;
    public: string;
    private: string;
  }
  export const createSync: (pathToSecret: string) => KeyPair;
  export const generate: () => KeyPair;
  export const loadOrCreateSync: (pathToSecret: string) => KeyPair;
  export const loadSync: (pathToSecret: string) => KeyPair;
}
