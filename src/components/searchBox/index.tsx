import React, { useCallback, useState } from 'react'
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Box
} from '@chakra-ui/react'
import searchIcon from '../../assets/images/Search.svg'
import cancelIcon from '../../assets/images/Cancel.svg'

interface Props {
  onChange: Function
}

const SearchBox: React.FC<Props> = ({ onChange }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = useCallback(
    (event) => {
      const inputValue = event.target.value
      setInputValue(inputValue)
      onChange(inputValue)
    },
    [onChange]
  )

  const onClear = useCallback(() => {
    setInputValue('')
    onChange('')
  }, [onChange])

  return (
    <InputGroup>
      <InputLeftElement
        children={<Box as='img' src={searchIcon} />}
        pointerEvents='none'
        color='gray.300'
        fontSize='1.2em'
      />
      <Input placeholder='Search' value={inputValue} onChange={handleChange} />
      {inputValue && (
        <InputRightElement
          children={
            <Box
              _hover={{ cursor: 'pointer' }}
              onClick={onClear}
              as='img'
              src={cancelIcon}
            />
          }
        />
      )}
    </InputGroup>
  )
}

export default SearchBox
