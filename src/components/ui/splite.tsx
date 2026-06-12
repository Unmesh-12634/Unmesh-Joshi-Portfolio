'use client'

import { Suspense, lazy, useCallback } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

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
