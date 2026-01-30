import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    static getDerivedStateFromError(error: Error): Partial<State> {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to console in development
        console.error('Error caught by boundary:', error, errorInfo);

        // In production, you would send this to an error tracking service like Sentry
        // Example: Sentry.captureException(error, { extra: errorInfo });

        this.setState({
            error,
            errorInfo,
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null,
        });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex items-center justify-center px-6">
                    <div className="max-w-2xl w-full text-center">
                        {/* Error Icon */}
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 border border-destructive/20">
                                <svg
                                    className="w-10 h-10 text-destructive"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Error Message */}
                        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                            Oops! Something went wrong
                        </h1>
                        <p className="text-lg text-foreground/60 mb-8">
                            We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
                        </p>

                        {/* Error Details (Development Only) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mb-8 p-6 rounded-xl bg-destructive/5 border border-destructive/20 text-left">
                                <h2 className="text-sm font-mono font-semibold text-destructive mb-2">
                                    Error Details (Development Only):
                                </h2>
                                <pre className="text-xs text-foreground/70 overflow-auto max-h-40">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={this.handleReset}
                                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
                            >
                                Try Again
                            </button>
                            <Link
                                to="/"
                                className="px-6 py-3 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors min-h-[44px] flex items-center"
                            >
                                Go Home
                            </Link>
                        </div>

                        {/* Support Link */}
                        <p className="mt-8 text-sm text-foreground/40">
                            Need help?{' '}
                            <Link to="/contact" className="text-foreground/60 hover:text-foreground underline">
                                Contact Support
                            </Link>
                        </p>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
