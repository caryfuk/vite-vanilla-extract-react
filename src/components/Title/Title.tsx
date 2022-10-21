import clsx from 'clsx'
import * as React from 'react'
import { title } from './Title.css'

export const Title = React.forwardRef<
  HTMLHeadingElement, // type of the element that will be rendered
  React.ComponentPropsWithoutRef<'h2'> // type of the props that will be passed to the element
>(({ className, ...restProps }, forwardedRef) => {
  return (
    <h1 ref={forwardedRef} className={clsx(title({ color: 'text' }), className)} {...restProps} />
  )
})
