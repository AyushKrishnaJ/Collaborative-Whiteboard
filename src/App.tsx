"use client";

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
  useOthers,
} from "@liveblocks/react/suspense";
import { Room } from "./Room";

export default function App() {
  return (
    <LiveblocksProvider publicApiKey="pk_dev_KVPMiAX4Gg47YjhH8jAfkVj0BqTH7cvL6T1OgyRnLnMhC5FPZ3QT28mYUUHjyhhw">
      <RoomProvider id="test-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          <Room />
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
