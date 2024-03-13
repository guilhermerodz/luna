import * as React from 'react'

import { ShinyContainer } from '../base'
import { withJS } from '../use-closest'
import s from './tracing-border.module.css'

export const TracingBorder = React.forwardRef<
  React.ElementRef<typeof ShinyContainer>,
  React.ComponentPropsWithoutRef<typeof ShinyContainer>
>((props, ref) => {
  return (
    <ShinyContainer ref={ref} className={s.c}>
      <div className={s.b} />
    </ShinyContainer>
  )
})
TracingBorder.displayName = 'TracingBorder'
