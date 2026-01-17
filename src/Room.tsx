"use client";

import { useOthers } from "@liveblocks/react/suspense";
import { Button } from "./components/ui/button";
export function Room() {
  const others = useOthers(); // Array of other connected users
  const userCount = others.length;
  console.log(others);
  return (
    <div >
      <Button>Gajay gyatt</Button>
    </div>
  );
}
