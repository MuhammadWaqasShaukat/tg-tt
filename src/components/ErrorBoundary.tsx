import { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "./UI/Buttons";

interface ChunkLoadErrorBoundaryProps {
  children: ReactNode;
}

interface ChunkLoadErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ChunkLoadErrorBoundary extends Component<
  ChunkLoadErrorBoundaryProps,
  ChunkLoadErrorBoundaryState
> {
  constructor(props: ChunkLoadErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ChunkLoadErrorBoundaryState {
    if (
      error.name === "ChunkLoadError" ||
      error.message.includes("Failed to fetch dynamically imported module") ||
      (error.message.includes("Loading chunk") &&
        error.message.includes("failed")) ||
      (error instanceof TypeError &&
        error.message.includes("Network request failed"))
    ) {
      return { hasError: true, error };
    }
    return { hasError: false, error: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ChunkLoadErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = (): void => {
    (window as any).location.reload(true);
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-dvh h-dvh flex flex-col justify-center items-center gap-4 px-8 bg-white/50">
          <h2 className=" text-center text-[1.5em] text-brown">
            Oops! Something went wrong loading this part of the application.
          </h2>
          <p className=" text-center font-josefin text-[1.25em] text-light-brown">
            It seems there was an issue downloading some necessary files. This
            can happen due to a <strong>Network problem </strong>or if the
            <strong> Application was recently Updated</strong>.
          </p>
          <Button acent="red" onClick={this.handleReload}>
            <span className=" w-max">Reload Page</span>
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ChunkLoadErrorBoundary;
