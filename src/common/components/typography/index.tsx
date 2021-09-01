import { BoxProps, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { fontStyles } from './fontStyles'

type Heading = 'H1' | 'H2'

interface Props extends BoxProps {
  variant: Heading | 'GenreCard' | 'Body' | 'BookName' | 'BookAuthor'
  children: React.ReactNode
}

const Typography: React.FC<Props> = ({ variant, children, ...rest }) => {
  const isHeading = variant === 'H1' || variant === 'H2'
  const fontProps = fontStyles[variant]
  return isHeading ? (
    <Heading {...fontProps} {...rest}>
      {children}
    </Heading>
  ) : (
    <Text {...fontProps} {...rest}>
      {children}
    </Text>
  )
}

export default Typography
