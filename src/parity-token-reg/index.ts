import { shepherd } from 'mycrypto-shepherd';
type ExtPromise<T> = T extends Promise<infer U> ? U : T;
type IProvider = ExtPromise<ReturnType<typeof shepherd.init>>;
