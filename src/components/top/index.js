import { Box, Text, Image} from "@chakra-ui/react";
import DownloadBtn from "./download-btn";

export default function Top() {
  return (
    <Box width={{ base: "90%", md: "50%" }} marginX="auto" marginY={{base: "20px", md: "30px"}} display={{md: "flex"}} justifyContent={{md: "center"}} alignItems={{md: "center"}}>
      <Image
        src="/images/cafe-sampo-iphone.png"
        width={{base: "50%", md: "40%"}}
        alt="カフェさんぽ iPhoneイメージ"
        margin="auto"
      />
      <Box>
        <Text textAlign="center" fontSize="5xl">カフェさんぽ</Text>
        <Box paddingY="20px">
          <Text>近くにあるカフェを簡単に探すことができるアプリ</Text>
          <Text>
            Wi-Fiや駐車場の有無、ペットと行けるカフェなど様々な条件からあなたの理想のカフェを検索できます
          </Text>
          <Text>シンプルで使いやすいUI/UXを目指しています</Text>
        </Box>
        <DownloadBtn />
      </Box>
    </Box>
  );
}
