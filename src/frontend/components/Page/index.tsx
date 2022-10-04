/* Page */

import React from 'react'
import * as Styles from './styles'
import { TPageProps } from './types'
import { PwC } from '../../types'


const Page: React.FC<PwC<TPageProps>> = ({
  children
}) => {
  return (
    <Styles.RootContainer>
      <Styles.Center>
        { children }
      </Styles.Center>
    </Styles.RootContainer>
  )
}


export default Page
