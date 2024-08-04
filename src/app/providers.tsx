// app/providers.tsx
'use client';

import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '../../styles/themes/index';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Box
        w="100vw"
        minH="100vh"
        maxH="100%"
        bgGradient="linear(to-r, green.700, black)"
        bgSize={'auto'}
      >
        {children}
      </Box>
    </ChakraProvider>
  );
}
