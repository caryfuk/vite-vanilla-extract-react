import clsx from 'clsx'
import * as React from 'react'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { styles, background, textColor } from './Button.css'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: keyof typeof background;
}

export const Button = React.forwardRef<
  HTMLButtonElement, // type of the element that will be rendered
  ButtonProps  // type of the props that will be passed to the element
>(({ className, variant, ...restProps }, forwardedRef) => {
  return (
    <button
      className={clsx(styles, background[variant], className)}
      ref={forwardedRef}
      style={assignInlineVars({ [textColor]: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` })}
      {...restProps}
    />
  )
})
