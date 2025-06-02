import { useEffect, useState, type FC, type PropsWithChildren } from 'react';
import classNames from 'classnames';
import { getFromStorage, saveToStorage } from '../../services/storage';
import { ThemeContext, type ThemeVariants } from './theme-context';

const STORAGE_KEY = 'theme';

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeVariants | null>(() =>
    getFromStorage<ThemeVariants>(STORAGE_KEY),
  );

  useEffect(() => {
    document.body.className = classNames({
      light: theme === 'light',
      dark: theme === 'dark',
    });

    saveToStorage(STORAGE_KEY, theme);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};
