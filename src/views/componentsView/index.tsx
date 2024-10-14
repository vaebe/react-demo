import { MessafeView } from './MessafeView.tsx'
import { OtherView } from './Other.tsx'
import { PopoverView } from './PopoverView.tsx'

export default function ComponentsView() {
  return (
    <div className="grid grid-cols-2 mt-4 gap-4">
      <OtherView />

      <MessafeView />

      <PopoverView />
    </div>
  )
}
