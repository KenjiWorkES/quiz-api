import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Center h="100vh" w="100vw">
      <Flex
        minH="70%"
        align="center"
        justify="space-evenly"
        direction="column"
        maxW={{ base: "70vw", sm: "80vw", lg: "50vw", xl: "50vw" }}
        w="100%"
      >
        <Heading mb={6}>Sign-up</Heading>
        <FormControl
          display="flex"
          flexDir="column"
          gap={2}
          maxW={{ base: "80vw", sm: "50vw", lg: "350vw", xl: "30vw" }}
          w="100%"
        >
          <FormLabel>First Name</FormLabel>
          <Input placeholder="First Name" />
          <FormLabel>Last Name</FormLabel>
          <Input placeholder="Last Name" />
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" />
          <FormLabel>Password</FormLabel>
          <Input placeholder="Password" type="password" />
          <FormLabel>Confirm Password</FormLabel>
          <Input placeholder="Confirm Password" type="password" />
          <Button
            w="100%"
            maxW="50%"
            mt={6}
            color="blackAlpha.900"
            alignSelf="center"
          >
            Sign-up
          </Button>
        </FormControl>
      </Flex>
    </Center>
  );
};
export default Signup;
