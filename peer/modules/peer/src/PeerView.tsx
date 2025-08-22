import { requireNativeView } from 'expo';
import * as React from 'react';

import { PeerViewProps } from './Peer.types';

const NativeView: React.ComponentType<PeerViewProps> =
  requireNativeView('Peer');

export default function PeerView(props: PeerViewProps) {
  return <NativeView {...props} />;
}
