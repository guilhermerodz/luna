import * as React from 'react'

/**
 * This container is a base for creating shiny components.
 * It includes all CSS rules to keep a11y, such as removing
 * pointer events, user selections, and hiding it from screen readers.
 *
 * @returns {React.ReactElement} The container to wrap around a shiny component.
 */
export const ShinyContainer = React.forwardRef<
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
ShinyContainer.displayName = 'ShinyContainer'

const ShinyTemplate = React.forwardRef<
  React.ElementRef<typeof ShinyContainer>,
  React.ComponentProps<typeof ShinyContainer>
>(({ ...props }, shinyContainerRef) => {
  return (
    <ShinyContainer ref={shinyContainerRef}>
      {/* Your VFX in here */}
    </ShinyContainer>
  )
})
ShinyTemplate.displayName = 'ShinyTemplate'