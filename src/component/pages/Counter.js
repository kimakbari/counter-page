import { Box, Flex } from "@chakra-ui/react";
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "right":
      return { count: state.count + 1 };
    case "left":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Flex
      w="1920px"
      maxW="100%"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="90px"
        h="90px"
        borderRadius="50%"
        border="3px solid pink"
        position="absolute"
        bgColor="yellow"
        cursor="pointer"
        justifyContent="center"
        alignItems="center"
        fontSize="30px"
      >
        {state.count}
      </Flex>
      <Flex
        w="50%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
        color="white"
        _hover={{
          bgColor: "crimson",
          color: "white",
          fontSize: "4rem",
          cursor: "pointer",
        }}
        transition="all .4s ease-in-out"
        userSelect="none"
        onClick={() => dispatch({ type: "left" })}
      >
        DECREASE
      </Flex>
      <Flex
        w="50%"
        h="100vh"
        alignItems="center"
        justifyContent="center"
        color="white"
        _hover={{
          bgColor: "#36f15f",
          color: "white",
          fontSize: "4rem",
          cursor: "pointer",
        }}
        transition="all .4s ease-in-out"
        userSelect="none"
        onClick={() => dispatch({ type: "right" })}
      >
        INCREASE
      </Flex>
    </Flex>
  );
}

export default Counter;

// export {
//     Counter,reducer,initialState
// }
