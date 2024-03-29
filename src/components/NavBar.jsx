import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {Container,Flex,Spacer,Box,Menu,MenuButton,MenuList,MenuItem} from "@chakra-ui/react";
import "../main.css";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="rgb(188, 49, 49)" color="white" borderBottom='1px' borderColor='gray.900'>
        <Flex>
          <Box w="300px" h="12" bg="rgb(188, 49, 49)">
            <Link to={"/"}>
              <h2 className="fuente-brand">Susan Flo Sweaters</h2>
            </Link>
          </Box>
          <Spacer />
          <Box w="400px" h="10" bg="rgb(188, 49, 49)">
            <Flex
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              pt="2"
            >
              <Menu>
                <Link to={"/catalogo"}>
                  <MenuButton >Catalogo</MenuButton>
                </Link>
              </Menu>
              <Spacer />
              <Menu>
                <MenuButton>Productos</MenuButton>
                <MenuList>
                  <Link to={`/category/${"Sweaters Vanlon"}`}>
                    <MenuItem color="black">Sweaters Vanlon</MenuItem>
                  </Link>
                  <Link to={`/category/${"Camisas"}`}>
                    <MenuItem color="black">Camisas</MenuItem>
                  </Link>
                  <Link to={`/category/${"Remeras"}`}>
                    <MenuItem color="black">Remeras</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Spacer />
              <Menu>
              <Link to={"/Ofertas"}>
                <MenuButton>Ofertas</MenuButton>
                
                </Link>
              </Menu>
              <Spacer />
              <Menu>
                <MenuButton>Contacto</MenuButton>
              </Menu>
            </Flex>
          </Box>
          <Spacer />
          <Box w="180px" h="10" bg="rgb(188, 49, 49)">
            <Link to={"/Cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
