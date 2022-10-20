import clsx from 'clsx'
import * as React from 'react'
import { styles, sprinkleStyles } from './Card.css'

export const Card = React.forwardRef<
  HTMLDivElement, // type of the element that will be rendered
  React.ComponentProps<'div'> // type of the props that will be passed to the element
>(({ className, title, children, ...restProps }, forwardedRef) => {
  return (
    <div
      className={clsx(styles, sprinkleStyles, className)}
      ref={forwardedRef}
      {...restProps}
    >
      <h2>{title}</h2>
      {children}
    </div>
  )
})
