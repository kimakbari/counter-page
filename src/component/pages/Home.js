import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Flex
      w="1920px"
      maxW="100%"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Link to="/Counter">
        <Button mx="10px" bgColor="tomato" color="#fff">
          Go To Counter
        </Button>
      </Link>
      <Link to="/Toggle">
        <Button mx="10px" bgColor="tomato" color="#fff">
          Go To Toggle
        </Button>
      </Link>
    </Flex>
  );
}
export default Home;
