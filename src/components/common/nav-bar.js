import {IconButton, Menu, MenuButton, MenuList, MenuItem} from '@chakra-ui/react';
import {HamburgerIcon} from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Menu>
      <MenuButton
        _focus={{focus: 'none'}}
        as={IconButton}
        icon={<HamburgerIcon />}
        aria-label="Menu"
        variant="outline"
      />
      <MenuList>
        <MenuItem as="a" href="/" style={{textDecoration: 'none'}}>トップ</MenuItem>
        <MenuItem as="a" href="/terms-of-service" style={{textDecoration: 'none'}}>利用規約</MenuItem>
        <MenuItem as="a" href="/privacy-policy" style={{textDecoration: 'none'}}>プライバシーポリシー</MenuItem>
        <MenuItem as="a" href="https://forms.gle/F7fSTRA3KaVEnkY87" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>お問い合わせ</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navbar;
