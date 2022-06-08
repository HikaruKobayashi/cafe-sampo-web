import { Box, Link } from "@chakra-ui/react";
import Icon from "../../../public/images/apple-store-btn.svg";

export default function DownloadBtn() {
  return (
    <Box>
      <Link as="a" href="https://t.co/f8s1QIeBaP" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <Icon style={{margin: "0 auto"}}/>
      </Link>
    </Box>
  );
}
