import { ReactNode } from "react";

export interface LayoutContext {
  isMobile: boolean;
  topBarRightWidget?: ReactNode;
  setTopBarRightWidget: (widget?: ReactNode) => void;
}