# Sitio de perros

## Estructura del proyecto

1.  Componentes compartidos. (Shared)
    
    - Header
    - footer 
    - Loading Logo

2. Paginas (Pages) 

    - HomePage 
    - MasonryPage

3.  Componentes no comporatidos (nonShared)
    Estos componentes no son compartidos pero para mantener la simplicidad en el proyecto 
    y establecer un desarrollo modularizado se estableceran los siguientes elementos., 
    
    - MasonryComponents

```
├── node_modules
    ├── TODOS LOS MODULOS DE NODE
├── src
    ├── favicon.ico
    ├── index.html
    ├── main.ts
    ├── polyfills.ts   
    ├── styles.css
    ├── test.ts
    ├── enviroments 
        ├── enviroment.prod.ts
        ├── enviroment.ts
    ├── assets
        ├── .gitkeep
    ├── app
        ├── app-component.css
        ├── app-component.html
        ├── app-component.spec.ts
        ├── app-component.ts
        ├── app-module.ts
        ├── app-routing.module.ts
        ├── service
            ├── httpService
                ├── services-http.service.spec.ts
                ├── services-http.service.ts
            ├── serviceComponent
                ├── services-http.service.spec.ts
                ├── services-http.service.ts
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
        ├── pages
            ├── home
                ├── footer.module.ts
                ├── home.component.html
                ├── home.component.spec.ts
                ├── home.component.ts
                ├── home.component.css                
        ├── nonSharedComponents
            ├── masonryContainer
                ├── masonry.module.ts
                ├── masonry.component.html
                ├── masonry.component.spec.ts
                ├── masonry.component.ts
                ├── masonry.component.css
├── .browserlistsrc 
├── .editorconfig 
├── .gitignore
├── angular.json 
├── karma.conf.js 
├── package-lock.json 
├── package.json 
├── README.MD 
├── tsconfig.app.json
├── tsconfig.spec.json
```

## Enrutamiento. 

```
├──── /
├──── /home 
├──── /masonry 
    ├──── /breed  
```

##  Servicios
    
Se declararan algunos servicios para distintos motivos. 

### Servicios de http (serviceHttp)
    
    Estos servicios se encargaran de realizar peticios http al API encargada
    es un servicio que se usara por los siguientes componentes/modulos
    
    1. Header 
    2. Masonry Container 

### Servicios para comunicacion entre componentes (serviceComponent)

    En ocasiones por la naturaleza del proyecto y el aumento de la complejidad de la comunicacion 
    entre componentes hijo/padre, padre/hijo y hermano/hermano

    ** LOS COMPONENTES QUE REQUIERAN DE ESTOS SERVICIOS SE IRAN LISTANDO DURANTE EL DESARROLLO ** 