import { Box, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) =>{
    setSearchInput(e.target.value);
  }

  return (
    <Box width={"80%"} margin={"20px auto"}>
      <Input placeholder='Search here' onChange={handleChange}/>
      <Text>{searchInput}</Text>
    </Box>
  )
}

export default SearchPage