# Rick & Morty Explorer

Taller React API — Programación Front End.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

## Estructura

- `src/hooks/useFetch.js`: hook propio para consumir la API (maneja loading/error/data).
- `src/hooks/useLocalStorage.js`: hook propio para persistir estado en localStorage.
- `src/components/`: componentes de UI (SearchBar, CharacterCard, CharacterList, FavoritesPanel, BlockedPanel, Stats).
- `src/App.jsx`: componente principal, contiene el estado global (favoritos, bloqueados, búsqueda) y la lógica de negocio.

## API usada

Rick and Morty API: https://rickandmortyapi.com/api/character

## Despliegue

1. Sube este repo a GitHub.
2. En vercel.com o netlify.com, "Import project" / "Add new site" desde Git.
3. Framework preset: Vite. Build command: `npm run build`. Output dir: `dist`.
4. Deploy y copia el link generado.
