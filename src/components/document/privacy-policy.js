import { Box, Text, Heading } from '@chakra-ui/react';

const Policy = () => {
  return (
    <Box width={{ base: "90%", md: "40%" }} marginX="auto" marginY={{base: "20px", md: "30px"}}>
      <main>
        <Heading as="h2">プライバシーポリシー</Heading>
        <Text>
          カフェさんぽ運営（以下「運営」）は、カフェさんぽ（以下「本サービス」）におけるプライバシー情報の取り扱いについて、以下の通りにプライバシーポリシー（以下「本ポリシー」）を定めます。
        </Text>
        <Heading as="h3" paddingY="10px">第1条（定義）</Heading>
        <Text>本ポリシーで使用する用語の定義は、次に掲げる通りとします。</Text>
        <Text>
          (1)個人情報：プライバシー情報のうち「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス等個人を特定することができる情報を指します。
        </Text>
        <Heading as="h3" paddingY="10px">第2条（個人情報を収集、利用する目的）</Heading>
        <Text>運営が個人情報を収集、利用する目的は以下の通りです。</Text>
        <Text>(1)利用者に対する本サービスの提供を行うため</Text>
        <Text>(2)本サービスの利便性向上を目的とした開発を行うため</Text>
        <Text>(3)利用者に対する本サービス内でのお知らせ等を通知するため</Text>
        <Text>(4)利用者からのお問い合わせに対応するため</Text>
        <Text>(5)上記の利用目的に付随する目的のため</Text>
        <Heading as="h3" paddingY="10px">第3条（個人情報の開示）</Heading>
        <Text>
          運営は、利用者が登録した個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情Headingを第三者に原則として開示いたしません。
        </Text>
        <Text>(1)利用者の同意がある場合</Text>
        <Text>
          (2)運営が利用目的の達成に必要な範囲内において個人情報の取り扱いの全部または一部を委託する場合
        </Text>
        <Text>
          (3)本サービスの買収その他の事由による事業の継承に伴い、個人情報が提供される場合
        </Text>
        <Text>(4)法令に基づき個人情報を開示する必要がある場合</Text>
        <Heading as="h3" paddingY="10px">第4条（法令、規範の遵守と見直し）</Heading>
        <Text>
          運営は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。
        </Text>
        <Heading as="h3" paddingY="10px">第5条（プライバシーポリシーの変更）</Heading>
        <Text>
          運営は、本ポリシーの内容を利用者の断り並びに通知することなく、変更することができるものとします。
        </Text>
        <Heading as="h3" paddingY="10px">第6条（お問い合わせ）</Heading>
        <Text>本ポリシーに関するお問い合わせは、以下にお願いいたします。</Text>
        <a href="https://forms.gle/uucVRS9Sd9bUYDhG6">お問い合わせはこちら</a>
        <Text>最終更新日：2022年2月17日（木）</Text>
      </main>
    </Box>
  );
}

export default Policy;
