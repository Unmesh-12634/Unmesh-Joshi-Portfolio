'use client'

import React, { Suspense, lazy, Component, ErrorInfo, ReactNode } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline WebGL Context Error caught by boundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (app: Application) => void
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex flex-col items-center justify-center bg-transparent">
          <div className="w-8 h-8 border-[3px] border-sohub-dark-grey border-t-sohub-white rounded-full animate-spin mb-3" />
          <span className="text-[9px] uppercase tracking-widest text-sohub-grey font-bold font-mono">Loading 3D Model...</span>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
        style={{ background: 'transparent' }}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
