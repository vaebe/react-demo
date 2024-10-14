import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'
import { useMemo, useRef, useState } from 'react'
import {
  arrow,
  flip,
  FloatingArrow,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  hide,
  shift,
} from '@floating-ui/react'
import { createPortal } from 'react-dom'
import './index.scss'

type Alignment = 'start' | 'end'
type Side = 'top' | 'right' | 'bottom' | 'left'
type AlignedPlacement = `${Side}-${Alignment}`

interface PopoverProps extends PropsWithChildren {
  content: ReactNode // 内容
  trigger?: 'hover' | 'click' // 触发方式
  placement?: Side | AlignedPlacement //
  open?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
  style?: CSSProperties
}

function Popover({ open, onOpenChange, content, children, trigger = 'hover', placement = 'bottom', className, style }: PopoverProps) {
  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState(open);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open);
      onOpenChange?.(open);
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef,
      }),
      flip(),
      hide(),
      shift()
    ]
  });

  const interaction = trigger === 'hover' ? useHover(context) : useClick(context);

  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    interaction,
    dismiss
  ]);

  const el = useMemo(() => {
    // 当元素存在时不在重复创建元素
    if (document.querySelector('.wrapper')) {
      return document.querySelector('.wrapper')!
    }

    const el = document.createElement('div');
    el.className = `wrapper`;

    document.body.appendChild(el);
    return el;
  }, []);

  const floating = isOpen && <div
    className='popover-floating'
    ref={refs.setFloating}
    style={floatingStyles}
    {...getFloatingProps()}
  >
    {content}
    <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1}/>
  </div>

  return (
    <>
       <div ref={refs.setReference} {...getReferenceProps()} className={className} style={style}>
        {children}
      </div>
      
      {
        createPortal(floating, el)
      }
    </>
  );
}

export { Popover }
export default Popover
