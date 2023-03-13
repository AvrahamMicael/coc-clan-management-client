import { ReactNode } from "react";

type Props = { children: ReactNode };

const IconContainer = ({ children }: Props) => (
  <div className="d-inline-block me-2 text-center">
    { children }
  </div>
);

export default IconContainer;
