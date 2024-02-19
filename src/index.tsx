import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BiomeCombinedProviders } from '@biom3/react';

const rootElement = document.getElementById('app')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <BiomeCombinedProviders
      withThemeToggle
      autoPickTheme
      globalSx={{
        body: {
          bg: 'base.color.translucent.inverse.900',
          p: 'base.spacing.x4',
        },
      }}
    >
      <App />
    </BiomeCombinedProviders>
  </StrictMode>
);
