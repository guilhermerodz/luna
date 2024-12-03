'use client'

import * as React from 'react'

import { VFXWrapper } from '../primitives/vfx-wrapper'
import s from './overscroll-fade.module.css'

import { cn } from '@/lib/utils'

interface OverscrollFadeProps {
  children: React.ReactNode  
  className?: string
  // /**
  //  * The amount of scrolled pixels required to trigger the fading on top and bottom
  //  * @default 0
  //  */
  // TODO: threshold?: number;
}

export const OverscrollFade = React.forwardRef<
  React.ElementRef<typeof VFXWrapper>,
  OverscrollFadeProps
>(({ children, className, ...props }, ref) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  const [canScrollUp,setCanScrollUp] = React.useState(false);
  const [canScrollDown,setCanScrollDown] = React.useState(false);
  
  React.useLayoutEffect(() => {
    const div = divRef.current!
    if (!div) {
      return
    }

    function onScroll() {
      
      const canScroll = div.scrollHeight > div.clientHeight
      const canScrollUp = div.scrollTop > 0
      const canScrollDown = div.scrollTop + div.clientHeight < div.scrollHeight
      
      if (!canScroll) {
        return
      }

      console.log({ canScrollUp, canScrollDown })

      setCanScrollUp(canScrollUp)
      setCanScrollDown(canScrollDown)
    }
    
    div.addEventListener('scroll', onScroll)
    onScroll()
    
    return () => {
      div.removeEventListener('scroll', onScroll)
    }
  }, [])
  
  return (
      <div ref={divRef} className={cn(
        s.f,
        { [s.up]: canScrollUp },
        { [s.down]: canScrollDown },
        className
      )}>
        {children}
      </div>
  )
})
OverscrollFade.displayName = 'OverscrollFade'
