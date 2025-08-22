import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Peer.types';

type PeerModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class PeerModule extends NativeModule<PeerModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(PeerModule, 'PeerModule');
