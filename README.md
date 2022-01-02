# Documentacion de proyecto

## Estructura del proyecto
**Siguiendo la estructura de un proyecto desarrollado en ionic, se hara un proyecto donde cada uno de los componentes sera un modulo para realizar carga perezosa**

1.  Componentes compartidos. (Shared)
    - Header
    - footer 
    - Loading Logo

2. Pages 
    - HomePage 
    - MasonryPage

```
├── node_modules
    ├── TODOS LOS MODULOS DE NODE
├── src
    ├── app 
        ├── shared 
            ├── header
                ├── header.module.ts
                ├── header.component.html
                ├── header.component.spec.ts
                ├── header.component.ts
                ├── header.component.css
            ├── footer
                    ├── footer.module.ts
                    ├── footer.component.html
                    ├── footer.component.spec.ts
                    ├── footer.component.ts
                    ├── footer.component.css
            ├── loading
                    ├── loading.component.html
                    ├── loading.component.spec.ts
                    ├── loading.component.ts
                    ├── loading.component.css
                        ├── app-routing.module.ts
            ├── app-component.css
            ├── app-component.html
            ├── app-component.spec.ts
            ├── app-component.ts
            ├── app-module.ts
```
