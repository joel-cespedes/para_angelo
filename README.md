<<<<<<< HEAD
# PruebaApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
Claro, aquí tienes el texto con formato Markdown para un archivo README.md:

# Aplicación con Requerimientos

## Descripción

La aplicación consiste en cuadros que deben funcionar como botones, y cada uno de estos botones tiene una acción asociada que debe ejecutarse. La acción requerida se especifica en el propio botón.

La aplicación solo tendra 2 paginas... 1. la home, 2 formulario..

## Requerimientos

- Montar todo en una versión angular 16.

- El componente inicial que inicia la aplicación debe ser un componente normal (no satanAlone).

- El componente del formulario debe ser un componente independiente (standAlone).

- Cada acción del menu, y cada boton debe ser un componente (ejemplo: componente del item del botom debe ser un for para que no repitas componentes)

- los botones hijos o nietos deben comunicarse hacía arriba con @outputs y si van a recibir data con sus @inputs

- Todo es reactivo, sin recargar la página... Por ejemplo debes usar rxjs y subscribes para cambiar el temas y los números etc.

- El formulario debe hacerse con Reactive Form Module de angular, debe validar al instante, ejemplo si el formato de email no es correcto mostrar un mensaje rojo debajo del input

- el header debe ser un componente

- el boton de fecha, (el que esta en el footer de cada cuadro de color, el que dice "2 Days Left") al darle click a ese componente debe aumentar el día. Ejemplo si está en "2 Days Left" aumentarlo a "3 Days Left" luego "4 Days Left" cuando llegue a 9 debe regresar a "1 Days Left"

- La sección "Client Messages", debe dividise en el componente que engloba los item de los mensajes (padre de los mensajes), otro componente de cada mensaje, luego otro componente para la foto del avatar (componente nieto). Por lo que los mensajes deben ser un array

- Los cuadros de colores deben ser un componente reutilizable, por lo que debe haber un array con la data para que los cuadros de botones se pinten en un for (este array es de un objeto que debe tener color, id, titulo, etc, lo que tu veas)

- el buscador debe buscar de alguna manera los cuadros de colores y mostrarlos o no segun lo que busques en el buscador del header (todo reactivamente)

- Los iconos feather-list y feather-grid deben acomodar los cuadros de colores para que se muestren como listas hacia abajo o como se ven original

## Uso

1. Abre la aplicación.

2. Interactúa con los cuadros/botones según las acciones indicadas.

## Importante

- No debe haber componentes con funcionalidad repetidas deben ser reutilizables
- la aplicación debe mantener las cosas cuando se cierre y se abra de nuevo (mantener el tema, mantener los "me gusta" de los mensajes y mantener el orden de los cuadros de colores: lista o cuadros) para esto puedes usar local storage
- OBLIGATORIO usar tipado en todo, en los mocks, en cada array, en cada componente, en cada evento @inputs o @auputs, en todo.
- PROHIBIDO USAR LIBRERIAS EXTERNAS (Nada de angular material, nada de jquery, nada de javascript nativo,) TODO TYPESCRIPT
- La idea es que sepas y aprendas todo por lo que me debes explicar el código y que hace cada cosa.

-Si tienes dudas me preguntas, es normal que tengas dudas en el desarrollo de cosas que no sabes o como hacerlas, yo me la paso ocupado por eso antes de preguntarme es porque ya agotaste todas las posibilades
>>>>>>> 46316a5aa87b9205840b34e2caa03b91fcdc9f78
