import React from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  View,
  NativeBaseProvider,
} from "native-base";

const LoginWrapper = () => {
  return (
    <Center w="100%">
      <Box safeArea p="1" py="0" w="100%" maxW="340">
        <Heading
          size="2xl"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={"2"} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input padding={4} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" padding={4} />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            <Text fontSize={22} color={"white"} letterSpacing={"2xl"}>
              Sign in
            </Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              onPress={() => {}}
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export const LoginForm = () => {
  return (
    <NativeBaseProvider>
      <Center marginTop={"1/4"}>
        <LoginWrapper />
      </Center>
    </NativeBaseProvider>
  );
};
