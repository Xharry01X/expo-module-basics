import { NativeModule, requireNativeModule } from 'expo';

import { PeerModuleEvents } from './Peer.types';

declare class PeerModule extends NativeModule<PeerModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<PeerModule>('Peer');
