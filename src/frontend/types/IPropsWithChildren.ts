import { ReactNode } from 'react'


type IPropsWithChildren<P extends Record<string, unknown> | undefined = undefined, C = ReactNode> =
  P extends undefined
    ? { children: C }
    : { children: C } & P


export default IPropsWithChildren
