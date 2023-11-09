import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProductGetRequest, Productdelete } from '../Redux/actions'; // Import the delete action if you have one
import { useSelector } from 'react-redux';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  UnorderedList,
  ListItem,
 
  Button,
  Checkbox,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

function Product() {
  const ProductData = useSelector((state) => state.Product.ProductData);
  const Dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);
console.log(selectedProducts);
  useEffect(() => {
    Dispatch(ProductGetRequest());
  }, [Dispatch]);

  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleDeleteSelected = () => {
    // You should implement a delete action in your Redux to delete the selected products
    Dispatch(Productdelete(selectedProducts)); // Assuming you have a delete action
    setSelectedProducts([]);
  };

  return (
    <Box>
      
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th><Button onClick={handleDeleteSelected} mb={4} colorScheme="red">
        Delete Selected
      </Button></Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>Title</Th>
            <Th>Year</Th>
            <Th>Price</Th>
            <Th>Mileage</Th>
            <Th>Power (BHP)</Th>
            <Th>Max Speed</Th>
            <Th>Colors Available</Th>
            <Th>Bulletpoints</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ProductData.map((product) => (
            <Tr key={product.id}>
              <Td>
                <Checkbox
                  isChecked={selectedProducts.includes(product.id)}
                  onChange={() => handleProductSelection(product.id)}
                />
              </Td>
              <Td>
                <Image src={product.image} alt={product.name} maxW="100px" />
              </Td>
              <Td>{product.name}</Td>
              <Td>{product.title}</Td>
              <Td>{product.year}</Td>
              <Td>{product.price}</Td>
              <Td>{product.mileage}</Td>
              <Td>{product.power}</Td>
              <Td>{product.speed}</Td>
              <Td>
                <UnorderedList>
                  {product.colorred && (
                    <ListItem color="red">Red</ListItem>
                  )}
                  {product.colorgreen && (
                    <ListItem color="green">Green</ListItem>
                  )}
                  {product.colorblack && (
                    <ListItem color="black">Black</ListItem>
                  )}
                  {product.colorwhite && (
                    <ListItem color="white">White</ListItem>
                  )}
                  {product.colorblue && (
                    <ListItem color="blue">Blue</ListItem>
                  )}
                </UnorderedList>
              </Td>
              <Td>
                <UnorderedList>
                  <ListItem>{product.bulletpoint1}</ListItem>
                  <ListItem>{product.bulletpoint2}</ListItem>
                  <ListItem>{product.bulletpoint3}</ListItem>
                  <ListItem>{product.bulletpoint4}</ListItem>
                  <ListItem>{product.bulletpoint5}</ListItem>
                </UnorderedList>
              </Td>
              <Td>
                <Link to={`/product/${product.id}`}>
                  <Button>Edit</Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default Product;
