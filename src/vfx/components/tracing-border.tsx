import * as React from 'react'

import { VFXSlot } from '../vfx-slot'
import { VFXWrapper } from '../vfx-wrapper'
import s from './tracing-border.module.css'

interface TracingBorderProps {
  active?: boolean
  children: React.ReactElement
}
export const TracingBorder = React.forwardRef<
  React.ElementRef<typeof VFXWrapper>,
  TracingBorderProps
>(({ active = true, children, ...props }, ref) => {
  return (
    <VFXSlot
      active={active}
      vfxChild={
        <VFXWrapper ref={ref} className={s.c}>
          <div className={s.b} />
        </VFXWrapper>
      }
    >
      {children}
    </VFXSlot>
  )
})
TracingBorder.displayName = 'TracingBorder'
