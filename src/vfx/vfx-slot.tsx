import * as React from 'react'

import s from './vfx-slot.module.css'

// Ensure that the child has a non-static position
const BASE_CLASSNAME = s['position-non-static']

type VFXSlotProps = {
  children: React.ReactElement
  appendChild?: React.ReactElement
  className?: string
  active?: boolean
}

/**
 * This Slot is the building block of any VFX:
 * 1. Renders effects only if `active` is true. Default: true.
 * 2. Forces the single child element to have a non-static CSS position.
 * 3. Append a single child to the children of the children. This is usually a VFX effect.
 * It's also a flagger for when the VFX is active or inactive.
 * @param {React.ReactElement} children The child to wrap (doesn't support void elements)
 * @param {React.ReactElement} appendChild The VFX to append to the children of the child.
 * @param {string} className The class name to append to the children apart from the internal base class name.
 * @param {boolean} active Whether the VFX is active or not. Default: `true`.
 * @returns
 */
export function VFXSlot({
  className,
  children: child,
  appendChild,
  active = true,
}: VFXSlotProps) {
  const newChild = React.useMemo(() => {
    if (
      typeof child === 'string' ||
      typeof child === 'number' ||
      typeof child === 'boolean' ||
      Array.isArray(child)
    ) {
      logOrThrow("NonStaticSlot's child must be a single React element")
      return child
    }

    const isVoid = ALL_VOID_ELEMENTS.includes(child.type as string)

    // TODO: add support for void elements (automatically create a div or span around it)
    if (isVoid) {
      logOrThrow(
        `VFXSlot cannot wrap a void element. Got element type: ${child.type}. Try wrapping your ${child.type} around a <div> or <span>. Please wrap your element if it is: ${ALL_VOID_ELEMENTS}.`,
      )
      return child
    }

    if (!active) {
      return child
    }

    let cc = child.props.children
    if (cc !== undefined && appendChild) {
      if (!Array.isArray(cc)) {
        const arr = React.Children.toArray(cc).map((item, index) => {
          if (
            !React.isValidElement(item)
            // typeof item === 'string' ||
            // typeof item === 'number' ||
            // typeof item === 'boolean'
          ) {
            return item
          }
          return React.cloneElement(item, {
            key: index,
          })
        })
        cc = arr
      }
      cc.push(appendChild)
    }

    return React.cloneElement(child, {
      children: cc,
      className:
        BASE_CLASSNAME +
        ' ' +
        (className || '') +
        ' ' +
        (child.props.className || ''),
    })
  }, [active, appendChild, child, className])

  return newChild
}

/**
 * Thanks to my friend Igor Bedesqui for showing me the void specs.
 * @see https://html.spec.whatwg.org/multipage/syntax.html#void-elements
 */
const VOID_ELEMENTS = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'track',
  'wbr',
  'param'
]
const MANUALLY_ADDED_ELEMENTS_THAT_BEHAVE_LIKE_VOID = ['video']
const ALL_VOID_ELEMENTS = VOID_ELEMENTS.concat(
  MANUALLY_ADDED_ELEMENTS_THAT_BEHAVE_LIKE_VOID,
)

function logOrThrow(message: string) {
  console.error(message)
  if (process.env.NODE_ENV === 'development') {
    throw new Error(message)
  }
}
