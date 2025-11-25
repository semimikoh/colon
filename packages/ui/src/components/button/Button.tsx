import { cva } from '../../styled-system/css';
import { styled } from '../../styled-system/jsx';
import type { RecipeVariantProps } from '../../styled-system/types';

const buttonRecipe = cva({
  base: {
    fontWeight: '500',
    borderRadius: 'md',
    px: 'md',
    py: 'sm',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  variants: {
    variant: {
      solid: {
        bg: 'blue.500',
        color: 'white',
        _hover: { bg: 'blue.600' },
        _active: { bg: 'blue.700' },
      },
      outline: {
        border: '1px solid',
        borderColor: 'blue.500',
        color: 'blue.700',
        _hover: { bg: 'blue.50' },
      },
      ghost: {
        color: 'blue.600',
        _hover: { bg: 'blue.50' },
      },
    },
    size: {
      sm: { fontSize: '14px', py: 'xs', px: 'sm' },
      md: { fontSize: '15px', py: 'sm', px: 'md' },
      lg: { fontSize: '16px', py: 'md', px: 'lg' },
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
});

export type ButtonProps = RecipeVariantProps<typeof buttonRecipe> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = styled('button', buttonRecipe);
