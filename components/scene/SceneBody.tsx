import { ReactNode } from "react";

type SceneBodyProps = {
  children: ReactNode;
};

export function SceneBody({
  children,
}: SceneBodyProps) {
  return (
    <div
      className="
        space-y-20
      "
    >
      {children}
    </div>
  );
}