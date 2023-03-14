import React, { Component, ErrorInfo, ReactNode } from "react";
import WarningSVG from "../WarningSVG";

type Props = { children: ReactNode };

type State = { error: Error | null };

export default class ErrorBoundary extends Component<Props, State>
{
  readonly state: State = { error: null };

  constructor(props: Props)
  {
    super(props);
  }

  static getDerivedStateFromError(error: Error): State
  {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void
  {
    console.error("Uncaught error:", error, errorInfo);
  }

  render(): ReactNode
  {
    if (this.state.error)
      return <WarningSVG message={ this.state.error?.message }/>;
    return this.props.children;
  }
}
