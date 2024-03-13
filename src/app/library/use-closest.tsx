'use client'

import * as React from 'react'

type ElementWithStyle = HTMLElement & { style: CSSStyleDeclaration }

// Get the shiny ref, then get the closest HTML element with position: 'static'
// then use JS to apply position: 'relative' to the closest static element.
function useShinyClosest(shinyRef: React.RefObject<HTMLElement>) {
  React.useLayoutEffect(() => {
    const shiny = shinyRef.current
    if (!shiny) {
      console.error('useShinyClosest needs a shiny element. Received:', shiny)
      return
    }
    const closestStatic = findClosestStaticParent(shiny)
    if (!closestStatic) {
      console.error('No static parent found for shiny element:', shiny)
      return
    }
    const el = closestStatic as unknown as ElementWithStyle

    console.log(el)

    const tmp = el.style.position
    el.style.position = 'relative'

    return () => {
      // Execute cleanup fns
      el.style.position = tmp
    }
  }, [shinyRef])
}

export function withJS(
  ShinyComponentWithRef: React.ComponentType<{
    ref: React.RefObject<HTMLElement>
  }>,
) {
  return function ShinyComponent(
    props: React.ComponentProps<typeof ShinyComponentWithRef>,
  ) {
    const shinyRef = React.useRef<HTMLElement>(null)
    useShinyClosest(shinyRef)

    return <ShinyComponentWithRef {...props} ref={shinyRef} />
  }
}

function findClosestStaticParent(element: HTMLElement) {
  let parent = element.parentElement
  let computedStyle

  while (parent && parent !== document.body) {
    if (computedStyle === undefined) {
      computedStyle = window.getComputedStyle(parent)
    }

    const position = computedStyle.position

    if (position === 'static') {
      return parent
    }

    parent = parent.parentElement
  }

  // If no static parent is found until document body, return null
  return null
}
