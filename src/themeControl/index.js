import React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  extendTheme
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

const conf = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const themeExtend = extendTheme({conf});

export default themeExtend;

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      {...props}
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      size="md"
      fontSize="lg"
    />
  )
}