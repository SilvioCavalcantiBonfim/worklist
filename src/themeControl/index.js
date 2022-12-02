import { extendTheme } from "@chakra-ui/react";

const conf = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const themeExtend = extendTheme({conf});

export default themeExtend;