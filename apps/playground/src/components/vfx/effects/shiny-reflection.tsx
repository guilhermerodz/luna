import * as React from 'react'

import { VFXSlot } from '../primitives/vfx-slot'
import { VFXWrapper } from '../primitives/vfx-wrapper'
import s from './shiny-reflection.module.css'

import { cn } from '@/lib/utils'

interface ShinyReflectionProps {
  active?: boolean
  children: React.ReactElement
}

export const ShinyReflection = React.forwardRef<
  React.ElementRef<typeof VFXWrapper>,
  ShinyReflectionProps
>(({ active = true, children, ...props }, ref) => {
  return (
    <VFXSlot
      active={active}
      vfxChild={
        <VFXWrapper ref={ref} className={cn(s.c)}>
          <div className={s.b} />
        </VFXWrapper>
      }
    >
      {children}
    </VFXSlot>
  )
})
ShinyReflection.displayName = 'ShinyReflection'
