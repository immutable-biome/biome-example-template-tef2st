import { ButtCon, useTheme, useToggleableTheme } from '@biom3/react';
import Example from './Example';

export default function App() {
  const theme = useTheme();
  const { toggleTheme } = useToggleableTheme();
  return (
    <>
      <Example />
      <ButtCon
        icon={
          theme.base.colorMode === 'darkOnLight' ? 'ThemeDark' : 'ThemeLight'
        }
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          bottom: 'base.spacing.x2',
          right: 'base.spacing.x2',
        }}
      />
    </>
  );
}
