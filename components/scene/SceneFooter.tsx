import { ReactNode } from "react";

type SceneFooterProps = {
  children: ReactNode;
};

export function SceneFooter({
  children,
}: SceneFooterProps) {
  return (
    <footer
      className="
        mt-24
        text-center
        text-white/50
      "
    >
      {children}
    </footer>
  );
}