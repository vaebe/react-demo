import type { CSSProperties, PropsWithChildren } from 'react'
import classNames from 'classnames'
import './index.scss'

export interface CardProps extends PropsWithChildren {
  title?: string
  style?: CSSProperties
  className?: string | string[]
}

function Card({ children, title, className = '', style }: CardProps) {
  const cls = classNames('card', className)

  return (
    <div className={cls} style={style}>

      {
        title && (
          <div className="card__title">
            {title}
          </div>
        )
      }

      <div className="card__content">
        {children}
      </div>
    </div>
  )
}

export { Card }

export default Card
