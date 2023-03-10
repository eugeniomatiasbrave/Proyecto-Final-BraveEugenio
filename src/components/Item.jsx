import React from "react";
import {Center,Card,CardBody,Image,Heading,Text, Divider,Stack,CardFooter,Button,} from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Item = ({ id, name, price, stock, category, img, description }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card>
            <CardBody >
              <Image borderRadius="lg" src={img} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text color="gray.600" fontSize="xl">
                  Precio: ${price}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Categoria: {category}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Descripcion: {description}
                </Text>
                <Text color="red.600" fontSize="l">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center>
                <Button variant="solid" colorScheme="red" size='sm'>
                  <Link to={`/item/${id}`}>Ver Producto</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
