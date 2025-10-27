# Test BCI

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión **1.6.8**.

## 🚀 Servidor de desarrollo

Ejecuta el siguiente comando:

```bash
ng serve
```

Luego abre tu navegador en **[http://localhost:4200/](http://localhost:4200/)**  
La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

---

## 🧩 Generar componentes o elementos

Puedes crear nuevos componentes, directivas, servicios, etc. usando el CLI de Angular:

```bash
ng generate component nombre-componente
```

También puedes generar:
- Directivas: `ng generate directive nombre-directiva`
- Pipes: `ng generate pipe nombre-pipe`
- Servicios: `ng generate service nombre-servicio`
- Módulos: `ng generate module nombre-modulo`

---

## 🏗️ Compilar el proyecto

Para construir el proyecto y generar los archivos listos para producción:

```bash
ng build --prod
```

Los archivos compilados se almacenarán en el directorio `dist/`.

---

## 🧪 Ejecutar pruebas unitarias

Ejecuta las pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## 🌐 Pruebas end-to-end (E2E)

Ejecuta las pruebas end-to-end con [Protractor](http://www.protractortest.org/):

```bash
ng e2e
```

---

## 🏁 Visualizar la aplicación compilada

1. Asegúrate de haber ejecutado `ng build --prod`.  
2. Dentro de la carpeta `dist/`, abre el archivo `index.html` en tu navegador o sirve la carpeta con un servidor local como:

```bash
npx http-server dist/
```

Luego abre **http://localhost:8080** (o el puerto que indique la consola).

> 💡 En caso de subirlo a GitHub Pages o Vercel, asegúrate de usar rutas con `useHash: true` para evitar errores 404.

---

## 🌍 Publicar en GitHub Pages

Si deseas desplegar el proyecto en **GitHub Pages**, sigue estos pasos:

1. Instala el paquete de publicación:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Compila el proyecto para producción con el nombre correcto de la carpeta:
   ```bash
   ng build --prod --base-href "https://github.com/cretamal/bci-test"
   ```

3. Sitio quedará disponible en:
   ```
   https://bci-test-carlosretamal.netlify.app/#/home
   ```

---

## 📘 Ayuda adicional

Para obtener más ayuda con Angular CLI, ejecuta:

```bash
ng help
```

O visita la documentación oficial en:  
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)
