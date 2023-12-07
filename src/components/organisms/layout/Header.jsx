import { Link, IconButton, useDisclosure, Button } from "@chakra-ui/react";
import LogoImg from "../../../images/LogoImg.png";
import { Box, Img } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { DrawerButton } from "../../atoms/Button/DrawerButton";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        className="header"
        bg="white"
        h="60px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="44vw"
        borderTop="2px solid #F06364"
        mb="40px"
        w="100vw"
      >
        <Box className="header-left">
          <Img
            className="header-img"
            src={LogoImg}
            alt="ホームケアナビアイコン"
          />
        </Box>
        <Box className="header-right" fontSize="13px">
          <Box className="header-list" display={{ base: "none", lg: "flex" }}>
            <Link to={"#"} mr="20px">
              閲覧履歴
            </Link>
            <Link to={"#"} mr="20px">
              ブックマーク
            </Link>
            <Link to={"#"} mr="20px">
              予約履歴
            </Link>
            <Link to={"#"} mr="20px">
              お礼投稿履歴
            </Link>
            <Link to={"#"}>登録情報</Link>
          </Box>
          <IconButton
            aria-label="メニューボタン"
            icon={<HamburgerIcon />}
            size="sm"
            variant="unstyled"
            display={{ base: "block", lg: "none" }}
            color="black"
            position="absolute"
            right="20px"
            top="15px"
            onClick={onOpen}
          />
        </Box>
      </Box>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0}>
              <DrawerButton title="閲覧履歴"></DrawerButton>
              <DrawerButton title="ブックマーク"></DrawerButton>
              <DrawerButton title="予約履歴"></DrawerButton>
              <DrawerButton title="お礼投稿履歴"></DrawerButton>
              <DrawerButton title="登録情報"></DrawerButton>
              <DrawerButton title="プライバシーポリシー"></DrawerButton>
              <DrawerButton title="利用規約"></DrawerButton>
              <DrawerButton title="お問い合わせ"></DrawerButton>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
