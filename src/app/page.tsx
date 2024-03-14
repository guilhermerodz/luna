import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TracingBorder } from '../vfx/components/tracing-border'

export default async function IndexPage() {
  return (
    <div
      className={cn(
        'container relative flex-1 flex flex-col justify-center items-center',
        'min-h-[100dvh]',
      )}
    >
      <Button variant="outline" shiny>Test</Button>
    </div>
  )
}

export const revalidate = 3600
