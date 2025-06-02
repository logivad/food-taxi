import { useContext, type FC } from 'react';
import { ThemeContext } from '../../../contexts/theme/theme-context';

export const ThemeButton: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const selectedValue = theme ? theme : '';

  const onThemeSelect = (value: string) => {
    if (value === 'light' || value === 'dark') {
      setTheme(value);
    } else {
      setTheme(null);
    }
  };

  return (
    <select
      value={selectedValue}
      onChange={(event) => onThemeSelect(event.target.value)}
    >
      <option value="light">Светлая</option>
      <option value="dark">Тёмная</option>
      <option value="">Системная</option>
    </select>
  );
};
