"use client";

import { useOthers } from "@liveblocks/react/suspense";

export function Room() {
  const others = useOthers(); // Array of other connected users
  const userCount = others.length;

  return <div>There are {userCount} other user(s) online</div>;
}
