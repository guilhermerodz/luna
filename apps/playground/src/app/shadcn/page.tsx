import { Button } from '@/components/ui/button'
import { OverscrollFade } from '@/components/vfx/effects/overscroll-fade'
import { cn } from '@/lib/utils'

export default async function IndexPage() {
  return (
    <div
      className={cn(
        'container relative flex-1 flex flex-col justify-center items-center',
        'min-h-[100dvh]',
      )}
    >
      <div className="flex items-center gap-10">
        <OverscrollFade className="w-[300px] h-[500px] overflow-y-scroll snap-y snap-mandatory bg-[transparent] flex flex-col gap-6" threshold={0}>
          {Array.from({ length: 30 }).map((item, idx) => (
            <div className='snap-start snap-y' key={idx}>Item {idx + 1}</div>
          ))}
        </OverscrollFade>
        <div className="w-[300px] h-[500px] overflow-y-scroll py-60 scroll-p-60 snap-y snap-mandatory bg-[transparent] flex flex-col gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_calc(100%_-_30%),transparent_100%)]">
          {Array.from({ length: 30 }).map((item, idx) => (
            <div className='snap-start snap-y' key={idx}>Item {idx + 1}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
