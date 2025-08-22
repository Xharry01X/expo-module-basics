// Reexport the native module. On web, it will be resolved to PeerModule.web.ts
// and on native platforms to PeerModule.ts
export { default } from './src/PeerModule';
export { default as PeerView } from './src/PeerView';
export * from  './src/Peer.types';
