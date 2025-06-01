import { useState, type FC, type PropsWithChildren } from 'react';
import { ThemeContext, type ThemeVariants } from '.';

const darkSchemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const isDarkScheme = darkSchemeMatcher.matches;

  const [theme, setTheme] = useState<ThemeVariants | null>(
    isDarkScheme ? 'dark' : null,
  );

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
