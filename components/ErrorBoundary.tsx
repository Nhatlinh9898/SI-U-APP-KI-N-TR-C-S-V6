import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      let errorMessage = "Đã xảy ra lỗi không mong muốn.";
      
      try {
        if (this.state.error?.message) {
          const firestoreError = JSON.parse(this.state.error.message);
          if (firestoreError.error) {
            errorMessage = `Lỗi hệ thống: ${firestoreError.error}`;
          }
        }
      } catch (e) {
        // Not a JSON error
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-red-500/30 rounded-3xl p-8 text-center space-y-6 shadow-[0_0_50px_rgba(239,68,68,0.1)]">
            <div className="inline-flex p-4 bg-red-500/10 rounded-full">
              <AlertTriangle className="text-red-500" size={40} />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">HỆ THỐNG GẶP SỰ CỐ</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                {errorMessage}
              </p>
            </div>
            <Button 
              onClick={() => window.location.reload()}
              className="w-full bg-red-600 hover:bg-red-500 text-white rounded-xl py-6 font-bold uppercase tracking-widest gap-2"
            >
              <RefreshCcw size={18} />
              TẢI LẠI HỆ THỐNG
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
