import { Box, Stack, Text, Image } from "@chakra-ui/react";
import Navbar from './nav-bar';

export default function Header() {
  return (
    <Box
      as="header"
      width="100%"
      backgroundColor="#fff"
      top="0"
      left="0"
      borderBottom="1px"
      borderColor="gray.200"
      zIndex="1"
    >
      <Stack width={{ base: "90%", md: "60%" }} py="3" margin="auto" direction="row" spacing="4" align="center" justify="space-between">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Image
            src="/images/cafe-sampo.png"
            width="35px"
            height="35px"
            alt="カフェさんぽ アイコン"
          />
          <Text fontSize="xl" fontWeight="bold" marginTop="5px">カフェさんぽ</Text>
        </Box>
        <Navbar />
      </Stack>
    </Box>
  );
}
