import { Box, Button, Flex, Heading, Img, Input, Spinner, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { SearchText } from '../store/actions';

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const {searchList, loading} = useSelector((store) => store);
  const dispacth = useDispatch()

  const handleChange = (e) =>{
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    dispacth(SearchText(searchInput));
    setSearchInput("")
  }

  // console.log(searchList[0].imageUrl.split("/")[5])

  return loading ? (
      <Flex justifyContent={"center"} alignItems={"center"} width={"100%"} height={"100vh"}>
        <Spinner
          thickness='8px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Flex>
    ):(
      <>
      <Box width={"80%"} margin={"40px auto"}>
        <Flex gap={10} width={"60%"} margin={"auto"}>
          <Input placeholder='Search here' onChange={handleChange} value={searchInput}/>
          <Button onClick={handleSearch}>Search</Button>
        </Flex>
        {
          searchList.length===0 ? (
            <Box textAlign={"center"} mt={40}>
              <Heading size={"md"}>Search result not availble...</Heading>
            </Box>
          ):(
          <Table mt={10}>
            <Thead>
              <Tr>
                <Th>Company Name</Th>
                <Th>PrimaryText</Th>
                <Th>Headline</Th>
                <Th>Description</Th>
                <Th>CTA</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchList?.map((item) => (
                <Tr key={item._id}>
                  <Td>{item?.company?.[0]?.name}</Td>
                  <Td>{item?.primaryText}</Td>
                  <Td>{item?.headline}</Td>
                  <Td>{item?.description}</Td>
                  <Td>{item?.CTA}</Td>
                  <Td>
                    <Img src={`https://drive.google.com/uc?export=view&id=${item?.imageUrl?.split("/")?.[5]}`} alt="" width={"100px"}/>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
      </>
  )
}

export default SearchPage