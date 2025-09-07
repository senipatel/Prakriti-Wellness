import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md p-8 rounded-lg bg-card text-card-foreground shadow-lg">
            <h1 className="text-2xl font-bold text-destructive mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-4">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
