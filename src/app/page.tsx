import * as React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TracingBorder } from './library/components/tracing-border'
import { TracingBorderJS } from './library/js-components'

export default async function IndexPage() {
  return (
    <div
      className={cn(
        'container relative flex-1 flex flex-col justify-center items-center',
        'min-h-[100dvh]',
      )}
    >
      {/* position:relative */}
      <Button variant="outline" className="relative">
        Test
        
        <TracingBorder />
      </Button>
    </div>
  )
}

export const revalidate = 3600

// with JS (hydration delay)
// <Button variant="outline">
//   Test
//   <TracingBorderJS />
// </Button>
