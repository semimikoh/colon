import { defineConfig } from '@pandacss/dev';
import { semanticColors } from './packages/tokens/src/colors/semantic.colors';

export default defineConfig({
  // 1) colon-ui 패키지 소스에서 스타일을 읽게 설정
  include: ['./packages/ui/src/**/*.{ts,tsx}'],

  // 2) outdir도 colon-ui 내부로
  outdir: './packages/ui/src/styled-system',

  // 3) presets
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],

  // 4) JSX global
  jsxFramework: 'react',

  // 5) Tokens 여기서 확장 가능
  theme: {
    extend: {
      tokens: {
        colors: semanticColors,
      },
    },
  },
});
