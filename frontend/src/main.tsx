import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@shopify/polaris/build/esm/styles.css';
import App from './App.tsx'
import { AppProvider, ResourceList } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider i18n={translations}>
      <App />
    </AppProvider>
  </StrictMode>,
)
