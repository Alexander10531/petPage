**  
    Siguiendo la estructura de un proyecto desarrollado en ionic, se hara un proyecto 
    donde cada uno de los componentes sera un modulo para realizar carga perezosa
** 

**
    -- ESTRUCTURA DEL PROYECTO --
**

1.  Componentes compartidos. (Shared)
    1.1 Header
    1.2 footer 
    1.3 Loading Logo

2. Pages 
    2.1 HomePage 
    2.2 MasonryPage

Estructura de directorios
    ++++ node_modules
        ---- TODOS LOS MODULOS DE NODE
    ++++ src
        ++++ app 
            ++++ shared 
                ++++ header
                    ---- header.module.ts
                    ---- header.component.html
                    ---- header.component.spec.ts
                    ---- header.component.ts
                    ---- header.component.css
                ++++ footer
                    ---- footer.module.ts
                    ---- footer.component.html
                    ---- footer.component.spec.ts
                    ---- footer.component.ts
                    ---- footer.component.css
                ++++ loading
                    ---- loading.component.html
                    ---- loading.component.spec.ts
                    ---- loading.component.ts
                    ---- loading.component.css
            ---- app-routing.module.ts
            ---- app-component.css
            ---- app-component.html
            ---- app-component.spec.ts
            ---- app-component.ts
            ---- app-module.ts
        ++++ assets
            ---- .gitkeep
        ++++ enviroments 
            ---- enviroment.prod.ts
            ---- enviroment.ts
        ---- favicon.ico
        ---- index.html
        ---- main.ts
        ---- polyfills.ts   
        ---- styles.css
        ---- test.ts
    ---- .browserlistsrc 
    ---- .editorconfig 
    ---- .gitignore
    ---- angular.json 
    ---- karma.conf.js 
    ---- package-lock.json 
    ---- package.json 
    ---- README.MD 
    ---- tsconfig.app.json
    ---- tsconfig.spec.json
