import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/roboto-mono';

const theme: Record<string, any> = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        overflowX: 'hidden',
        color: props.colorMode === 'light' ? 'dark' : 'light',
        bg: props.colorMode === 'light' ? 'light' : 'dark'
      }
    })
  },
  colors: {
    default: {
      light: '#fcfcfc',
      dark: '#232323'
    },
    primary: {
      100: '#d1c1f4',
      200: '#b199e7',
      300: '#9171dc',
      400: '#7b4ecb',
      500: '#805ad5',
      600: '#45248f',
      700: '#311968'
    },
    secondary: {
      100: '#e6fffa',
      200: '#b2f5ea',
      300: '#81e6d9',
      400: '#4fd1c5',
      500: '#38b2ac',
      600: '#319795',
      700: '#2c7a7b'
    },
    neutrals: {
      100: '#f4f4f4',
      200: '#d9d9d9',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040'
    }
  },
  fonts: {
    body: 'var(--font-roboto-mono)',
    heading: 'var(--font-roboto-mono)'
  }
});

export default theme;
