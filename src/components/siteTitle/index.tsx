import { Box } from '@chakra-ui/react'
import React, { Fragment } from 'react'
import Typography from '../../common/components/typography'

const SiteTitle = () => {
  return (
    <Fragment>
      <Typography variant='H1'>Gutenberg Project</Typography>
      <Typography variant='H1'>Almost before we knew it, we had lef</Typography>
      <Typography variant='Body'>
        A social cataloging website that allows you to freely search its
        database of books, annotations, and reviews.
      </Typography>
    </Fragment>
  )
}

export default SiteTitle
