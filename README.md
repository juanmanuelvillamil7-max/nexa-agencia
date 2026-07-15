# NEXA Agencia de Marketing - Proyecto Final Coder House

Sitio web institucional estático (HTML + SASS) para una agencia de marketing digital.

## Estructura

```
nexa-agencia/
├── index.html
├── pages/
│   ├── nosotros.html
│   ├── servicios.html
│   ├── portfolio.html
│   └── contacto.html
├── css/
│   └── style.css        (generado a partir de /sass)
├── sass/
│   ├── style.scss        (archivo principal, solo importa partials)
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _base.scss
│   ├── _header.scss
│   ├── _hero.scss
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _sections.scss
│   ├── _forms.scss
│   └── _footer.scss
└── js/
    └── script.js
```

## Cómo compilar el SASS

Si modificás algún archivo `.scss`, hay que volver a compilarlo a CSS:

```bash
npm install -g sass
sass sass/style.scss css/style.css
```

## Pasos para subir a GitHub

```bash
git init
git add .
git commit -m "Estructura inicial del proyecto: HTML + SASS"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/nexa-agencia.git
git push -u origin main
```

Sugerencia de commits para que el historial se vea prolijo (podés hacerlos en este orden real mientras trabajás, en vez de un solo commit gigante):

1. `Estructura inicial de carpetas y archivos`
2. `Agrego index.html con hero y navegación`
3. `Agrego variables, mixins y base de SASS`
4. `Agrego estilos de header, hero y botones`
5. `Agrego página de Nosotros`
6. `Agrego página de Servicios`
7. `Agrego página de Portfolio con filtro`
8. `Agrego página de Contacto con formulario`
9. `Responsive y ajustes finales`
10. `Deploy a Vercel`

## Deploy en Vercel

1. Entrar a https://vercel.com y loguearse con la cuenta de GitHub.
2. "Add New Project" → seleccionar el repo `nexa-agencia`.
3. Como es HTML/CSS/JS plano, dejar el "Framework Preset" en **Other** y el directorio raíz sin cambios.
4. Deploy. Vercel va a dar una URL tipo `https://nexa-agencia.vercel.app`.

## Deploy en Netlify (alternativa)

1. Entrar a https://app.netlify.com
2. "Add new site" → "Import an existing project" → conectar el repo de GitHub.
3. Build command: vacío. Publish directory: `/` (raíz del repo).
4. Deploy.
