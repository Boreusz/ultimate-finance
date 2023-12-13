import { ChakraProvider, ThemeConfig, extendTheme } from "@chakra-ui/react";
import Router from "@/router";

function App() {
  const config: ThemeConfig = {
    initialColorMode: "dark", // 'dark' | 'light'
    useSystemColorMode: true,
  };
  const theme = extendTheme({ config });
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
