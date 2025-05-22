## Externe UI-Bibliotheken:
- https://polaris-react.shopify.com
  
## How to run:

### Development:

#### Frontend:
- Navigiere zu `/frontend`
- Führe `pnpm install` aus
- Führe `pnpm run dev` aus

#### Backend:
Um das Backend zu starten muss eine lokale MongoDB Instanz laufen, die konkrete URL kann in `/backend/.env` gesetzt werden.
- Navigiere zu `/backend`
- Führe `pnpm install` aus
- Führe `pnpm start` aus
  
### Deployment:

#### Frontend:
- Navigiere zu `/frontend`
- Führe `pnpm install` aus
- Führe `pnpm build` aus
  
Die gebauten Dateien können in `/frontend/dist` gefunden werden.

#### Backend:
- Navigiere zu `/backend`
- Führe `pnpm install` aus
- Führe `pnpm build` aus
  
Die gebauten Dateien können in `/backend/dist` gefunden werden.
