import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default async function IndexPage() {
  return (
    <div
      className={cn(
        'container relative flex-1 flex flex-col justify-center items-center',
        'min-h-[100dvh]',
      )}
    >
      <Button variant="outline">Test</Button>
    </div>
  )
}
