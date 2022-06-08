import {Box, Text} from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      width="100%"
      py="6"
      textAlign="center"
      px={{base: '4', md: '8'}}
      style={{backgroundColor: "#333"}}
    >
      <Text style={{color: "#999"}}>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</Text>
    </Box>
  );
};

export default Footer;
