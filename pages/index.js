import { Box } from "@chakra-ui/react";
import Header from "../src/components/common/header";
import Footer from "../src/components/common/footer";
import Top from "./../src/components/top";

export default function Home() {
  return (
    <Box as="main" display="flex" flexFlow="column" width="100%" height="100%" minHeight="100vh" margin="0" padding="0">
      <Header />
      <Box flex="1">
        <Top />
      </Box>
      <Footer />
    </Box>
  );
}
