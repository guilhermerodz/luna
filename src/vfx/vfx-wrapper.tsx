import * as React from 'react'

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
>((props, ref) => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      aria-hidden
      {...props}
      ref={ref}
    />
  )
})
VFXWrapper.displayName = 'VFXWrapper'
