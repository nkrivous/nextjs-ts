import React, { PropsWithChildren } from "react";

export default function Box({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <>{children}</>
    </div>
  );
}
