import React, { Fragment } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import Content from '../../components/layout/content'
import GenreCard from '../../components/genreCard'
import MainPageTitle from '../../components/mainPageTitle'
import { GENRES } from '../../constants/genres'
import PageHeader from '../../components/layout/pageHeader'

interface Props {
  onClick: Function
}

const GenrePage: React.FC<Props> = ({ onClick }) => {
  return (
    <Fragment>
      <PageHeader background={true}>
        <MainPageTitle />
      </PageHeader>
      <Content>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacingX={'80px'}
          spacingY={'30px'}
        >
          {GENRES.map((genre) => (
            <GenreCard
              genre={genre.value}
              iconSrc={genre.icon}
              key={genre.value}
              onClick={onClick}
            />
          ))}
        </SimpleGrid>
      </Content>
    </Fragment>
  )
}

export default GenrePage
