# Rifa Online — Servus Schoenstatt

Landing page para rifas online con grilla de números en tiempo real, alimentada por Google Sheets.

## Stack

- React + Vite
- TailwindCSS v4
- Fetch API con polling cada 10s
- Firebase Hosting

---

## Configuración inicial

### 1. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_SHEET_ID=tu_google_sheet_id_aqui
```

El Sheet ID está en la URL de tu hoja:
`https://docs.google.com/spreadsheets/d/`**`<SHEET_ID>`**`/edit`

### 2. Estructura del Google Sheet

El Sheet debe ser **público** (Archivo → Compartir → Cualquier persona con el enlace puede ver).

**Hoja `Rifa`** — columnas requeridas:

| numero | vendido | nombre | telefono | vendedores |
|--------|---------|--------|----------|------------|
| 001    | FALSE   |        |          | Daniel y Karen |
| 002    | TRUE    | Juan   | 0981...  | Karen      |

- `vendedores` puede ser cualquier texto (ej: nombre de una persona o pareja). La app genera los filtros automáticamente a partir de los valores únicos de esta columna.
- `nombre` y `telefono` son opcionales y no se muestran en la UI actualmente.

**Hoja `Premios`** — columnas requeridas:

| numero | Descripción | Palabra clave |
|--------|-------------|---------------|
| 1      | Sesión de fotos | Sesión   |

---

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173)

---

## Producción

```bash
pnpm build
```

El output queda en `/dist`.

---

## Deploy en Firebase Hosting

### Primera vez

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Editar .firebaserc con tu project ID
# "default": "tu-firebase-project-id"
```

### Deploy

```bash
pnpm build
firebase deploy
```

Firebase retorna la URL pública al finalizar el deploy.

### Proyecto Firebase nuevo

Si aún no tenés un proyecto:

1. Ir a [console.firebase.google.com](https://console.firebase.google.com)
2. Crear proyecto
3. Ir a **Hosting** → **Comenzar**
4. Copiar el Project ID y pegarlo en `.firebaserc`

---

## Personalización

| Archivo | Qué cambia |
|---|---|
| `src/constants.js` | Nombre de la organización |
| `src/components/Info.jsx` | Datos bancarios y precio |
| `src/components/Footer.jsx` | Fecha del sorteo |
| `.env` | ID del Google Sheet |

## Filtro por vendedor

Si la columna `vendedores` está presente en la hoja `Rifa`, aparece automáticamente una barra de filtros sobre la grilla con un botón por cada vendedor único, más la opción **Todos**.

- Al seleccionar un vendedor, la grilla y los contadores se filtran a sus números.
- Si todos los registros tienen el campo vacío o hay un solo vendedor, la barra no se muestra.
