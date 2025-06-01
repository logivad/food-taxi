import { useContext, useEffect, type FC } from 'react';
import { Button } from '../button/button';
import { ThemeContext } from '../../../contexts';
import classNames from 'classnames';

const themeToLabel = new Map([
  [null, 'тема: системная'],
  ['light', 'тема: светлая'],
  ['dark', 'тема: тёмная'],
]);

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = classNames({
      light: theme === 'light',
      dark: theme === 'dark',
    });
  }, [theme]);

  const cycleTheme = () => {
    switch (theme) {
      case null:
        setTheme('light');
        break;
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme(null);
        break;
    }
  };

  return <Button onClick={cycleTheme}>{themeToLabel.get(theme)}</Button>;
};
