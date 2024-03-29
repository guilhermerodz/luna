'use client'

import { TracingBorder } from '@/components/vfx/effects/tracing-border'
import { cn } from '@/lib/utils'
import { Button, useColorMode } from '@chakra-ui/react'

export default function IndexPage() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div
      className={cn(
        'container relative flex-1 flex flex-col justify-center items-center',
        'min-h-[100dvh]',
      )}
    >
      <TracingBorder>
        <Button variant="outline">Test</Button>
      </TracingBorder>

      <button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}
