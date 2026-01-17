"use client";

import { LiveblocksProvider, RoomProvider, ClientSideSuspense, useOthers } from "@liveblocks/react/suspense";

function Room() {
  const others = useOthers();
  return <div>There are {others.length} other user(s) online</div>;
}

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
