import * as React from 'react';

import { PeerViewProps } from './Peer.types';

export default function PeerView(props: PeerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
