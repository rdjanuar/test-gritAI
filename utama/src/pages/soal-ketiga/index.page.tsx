import { Button, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonBack } from "~/components";
import { hash } from "~/utils";

const Ketiga = () => {
  const [value, setValue] = useState("");

  const handleHash = () => {
    const result = hash("09062023rizkyifabula");
    console.log(result);
    setValue(result);
  };

  return (
    <Container maxW="container.xl">
      <ButtonBack />
      <Button mt={28} colorScheme="red" onClick={handleHash}>
        Generate Hash
      </Button>
      <Text>sha256: {value}</Text>
    </Container>
  );
};

export default Ketiga;
