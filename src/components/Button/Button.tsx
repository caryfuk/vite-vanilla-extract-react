import clsx from 'clsx'
import * as React from 'react'
import { styles } from './Button.css'

export const Button = React.forwardRef<
  HTMLButtonElement, // type of the element that will be rendered
  React.ComponentProps<'button'> // type of the props that will be passed to the element
>(({ className, ...restProps }, forwardedRef) => {
  return (
    <button
      className={clsx(styles, className)}
      ref={forwardedRef}
      {...restProps}
    />
  )
})
