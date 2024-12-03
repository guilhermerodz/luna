import clsx from 'clsx'
import * as React from 'react'

import s from '../vfx.module.css'

/**
 * This wrapper is a base for creating visual effects.
 * It includes all CSS rules to keep a11y, such as removing
 * pointer events, user selections, and hiding it from screen readers.
 *
 * @returns {React.ReactElement} The wrapper to wrap around a shiny component.
 */
export const VFXWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      aria-hidden
      {...props}
      className={clsx(className, s.vfx, s.w)}
      ref={ref}
    />
  )
})
VFXWrapper.displayName = 'VFXWrapper'
