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
  threshold?: number;
}

export const OverscrollFade = React.forwardRef<
  React.ElementRef<typeof VFXWrapper>,
  OverscrollFadeProps
>(({ children, className, threshold = 0, ...props }, ref) => {
  const divRef = React.useRef<HTMLDivElement>(null)

  // const lastTransitionClassName = React.useReducer(reducer, '')
  const [lastTransitionClassName, setLastTransitionClassName] = React.useState('')

  const prevScrollUp = React.useRef(false)
  const prevScrollDown = React.useRef(false)
  const [canScrollUp, setCanScrollUp] = React.useState(false)
  const [canScrollDown, setCanScrollDown] = React.useState(false)

  React.useLayoutEffect(() => {
    const div = divRef.current!
    if (!div) {
      return
    }

    function onScroll() {
      const _canScroll = div.scrollHeight > div.clientHeight
      const _canScrollUp = div.scrollTop > (0 + threshold)
      const _canScrollDown = div.scrollTop - threshold + div.clientHeight < div.scrollHeight

      if (!_canScroll) {
        return
      }

      setCanScrollUp(prev => {
        prevScrollUp.current = prev
        return _canScrollUp
      })
      setCanScrollDown(prev => {
        prevScrollDown.current = prev
        return _canScrollDown
      })
    }

    div.addEventListener('scroll', onScroll)
    onScroll()

    return () => {
      div.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={divRef}
      className={cn(
        s.f,
        { [s.up]: canScrollUp },
        { [s.down]: canScrollDown },
        className,
      )}
    >
      {children}
    </div>
  )
})
OverscrollFade.displayName = 'OverscrollFade'
