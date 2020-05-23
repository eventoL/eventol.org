export const CONTRIBUTORS_URL =
  'https://api.github.com/repos/eventol/eventol/contributors';
export const TAGS_URL = 'https://api.github.com/repos/eventol/eventol/tags';
export const REPO_URL = 'https://api.github.com/repos/eventol/eventol';

const CHANGELOGS = {
  'v0.0.0': `
#### Issues:
- [#111](https://github.com/eventoL/eventoL/issues/111) - Traducciones para la parte de presentaciones
- [#17](https://github.com/eventoL/eventoL/issues/17) - Traducciones de los admins que se vayan a usar para brindar funcionalidad
- [#109](https://github.com/eventoL/eventoL/issues/109) - Presentaciones y edición de charlas confirmadas
- [#78](https://github.com/eventoL/eventoL/issues/78) - Editar charlas y propuestas
- [#99](https://github.com/eventoL/eventoL/issues/99) - Desconfirmar charlas confirmadas
- [#110](https://github.com/eventoL/eventoL/issues/110) - Subir presentaciones y link para descargarlas
- [#108](https://github.com/eventoL/eventoL/issues/108) - Api 2.0
- [#107](https://github.com/eventoL/eventoL/issues/107) - Cambio de template de cronograma
- [#106](https://github.com/eventoL/eventoL/issues/106) - URL sin case sensitive
- [#105](https://github.com/eventoL/eventoL/issues/105) - Votes for talks por sede
- [#104](https://github.com/eventoL/eventoL/issues/104) - Detalles del reporte
- [#103](https://github.com/eventoL/eventoL/issues/103) - Pull request: Api + Reportes
  - [#101](https://github.com/eventoL/eventoL/issues/101) - Vista de Reportes en la web
  - [#102](https://github.com/eventoL/eventoL/issues/102) - Api con Django Rest
- [#100](https://github.com/eventoL/eventoL/issues/100) - Letra para cuando hay muchas aulas
- [#95](https://github.com/eventoL/eventoL/issues/95) - Mergeo con cronograma y detalles de error encontrado
- [#89](https://github.com/eventoL/eventoL/issues/89) - Descolapsar todas las charlas
- [#59](https://github.com/eventoL/eventoL/issues/59) - Cronograma
- [#93](https://github.com/eventoL/eventoL/issues/93) - Listado de charlas para colaboradores despues de confirmar el schedule
- [#92](https://github.com/eventoL/eventoL/issues/92) - Export
- [#72](https://github.com/eventoL/eventoL/issues/72) - Exportar datos
- [#88](https://github.com/eventoL/eventoL/issues/88) - Cronograma2
- [#86](https://github.com/eventoL/eventoL/issues/86) - Se cambia el redirect de attendee_registration_by_collaborator de /SEDE a /registration/attendee/search
- [#76](https://github.com/eventoL/eventoL/issues/76) - Mostrar la fecha del evento en la página principal de la sede
- [#74](https://github.com/eventoL/eventoL/issues/74) - Image cropping no funca en el admin
- [#71](https://github.com/eventoL/eventoL/issues/71) - Posibilidad de que las sedes usen un sitio externo
- [#67](https://github.com/eventoL/eventoL/issues/67) - Mapa de homepage
- [#65](https://github.com/eventoL/eventoL/issues/65) - Lista de sedes
- [#66](https://github.com/eventoL/eventoL/issues/66) - Cambio de link
- [#64](https://github.com/eventoL/eventoL/issues/64) - Agregar Link a Flisol general
- [#63](https://github.com/eventoL/eventoL/issues/63) - Imagen para tamaño acorde a celular
- [#49](https://github.com/eventoL/eventoL/issues/49) - Index retoques
- [#48](https://github.com/eventoL/eventoL/issues/48) - Traducciones casi terminadas
- [#46](https://github.com/eventoL/eventoL/issues/46) - Pull request: Comments + Banner + Schedule confirm + Alerts
  - Corrección de comentarios sin titulo
  - Templates con user en el titulo de comentario
  - Cambio de banner
  - Alerta de que el comentario es publico
  - Lista de charlas en collaborator
  - Schedule confirm
  - Botón de confirmación de cronograma en vista de charlas
  - Message.info para visitas de schedule y redireccion a talks
- [#45](https://github.com/eventoL/eventoL/issues/45) - Homepage y detalles
- [#43](https://github.com/eventoL/eventoL/issues/43) - Restore password2
- [#15](https://github.com/eventoL/eventoL/issues/15) - Funcionalidad para recuperar la contraseña
- [#42](https://github.com/eventoL/eventoL/issues/42) - Pull request: is_sede_staff + responsive
  - Cambios para is_staff con verificación de sede
  - Mejor responsive en celulares para las charlas y propuestas
  - [#41](https://github.com/eventoL/eventoL/issues/41) - Filter is_staff_in_sede
- [#40](https://github.com/eventoL/eventoL/issues/40) - Forms con entorno limitado
- [#39](https://github.com/eventoL/eventoL/issues/39) - Pull request: Query Set + "ver en el sitio" + Attende Search con autocomplete
  - [#4](https://github.com/eventoL/eventoL/issues/4) - ABM de los modelos que los coordinadores necesitan definir
  - Nueva funcionalidad ("ver en el sitio")
  - Arreglo de autocomplete para attende search
- [#38](https://github.com/eventoL/eventoL/issues/38) - Pull request: Alerts + Correcciones (#35) + Limpieza de urls y sus templates + Detalles
  - Detalles de Merge Requests
  - Mejora de import de models
  - Alerts de success nuevos
  - Alerts de error
  - Detalle en base-main para alerts de error -> danger
  - Borrado de templates y urls de mas (las tipo success.html, confirm.html, ...)
- [#35](https://github.com/eventoL/eventoL/issues/35) - Pull request: Votos + Comentarios + Talk + Proposal to talk + fecha limite + extras
  - [#3](https://github.com/eventoL/eventoL/issues/3) - Agregar una propuesta de charla al cronograma final
  - [#33](https://github.com/eventoL/eventoL/issues/33) - Nuevas templates para Talks, Cronograma y TalksPorposal
  - [#2](https://github.com/eventoL/eventoL/issues/2) - Review de propuestas de charlas
  - [#12](https://github.com/eventoL/eventoL/issues/12) - Agregar fecha de fin para propuestas de charlas por sede
  - Votos a propuestas por colaboradores, instaladores o administradores
  - Comentar propuestas por colaboradores, instaladores o administradores
  - Vistas para charlas, propuestas, ...
  - Controlador de horarios disponibles
  - Mejora de permisos para base-main y templates con datos para usuarios según su nivel
  - Paso a Django 1.7.7
  - Detalles encontrados de versiones anteriores
  - Nivel en las propuestas de charlas
  - Fecha limite para propuestas
  - [#17](https://github.com/eventoL/eventoL/issues/17) - Traducciones de los admins que se vayan a usar para brindar funcionalidad
  - Uso de contacts en base-main
- [#37](https://github.com/eventoL/eventoL/issues/37) - Limpieza de las tempaltes de success para usar los alerts y mejoras en la registración
- [#29](https://github.com/eventoL/eventoL/issues/29) - Cambiar cómo se muestran los mensajes de success e info
- [#36](https://github.com/eventoL/eventoL/issues/36) - Alert
- [#12](https://github.com/eventoL/eventoL/issues/12) - Agregar fecha de fin para propuestas de charlas por sede
- [#32](https://github.com/eventoL/eventoL/issues/32) - Pantalla principal + Cambios para Talks + Detalles
- [#28](https://github.com/eventoL/eventoL/issues/28) - Diseño de la página principal
- [#30](https://github.com/eventoL/eventoL/issues/30) - Collaborator + Urls + Detalles
- [#31](https://github.com/eventoL/eventoL/issues/31) - Cambio de urls y redirects_urls
- [#9](https://github.com/eventoL/eventoL/issues/9) - Formulario de contacto
- [#13](https://github.com/eventoL/eventoL/issues/13) - Mostrar speakers en la descripción de las charlas
- [#20](https://github.com/eventoL/eventoL/issues/20) - Override custom jquery de image_cropping
- [#14](https://github.com/eventoL/eventoL/issues/14) - Campo para poner una fecha de cierre del registro de asistentes
- [#27](https://github.com/eventoL/eventoL/issues/27) - Pull request: Footer e información de evento por sede + interfaz de WYSIWYG en el admin + colaborador -> instalador
  - [#6](https://github.com/eventoL/eventoL/issues/6) - Footer por sede
  - [#5](https://github.com/eventoL/eventoL/issues/5) - WYSIWYG para información del evento
  - [#18](https://github.com/eventoL/eventoL/issues/18) - Hacer que un colaborador se pueda registrar como instalador
- [#26](https://github.com/eventoL/eventoL/issues/26) - Material design!
- [#19](https://github.com/eventoL/eventoL/issues/19) - Agregar los post-processors de easy_thumbnails
- [#22](https://github.com/eventoL/eventoL/issues/22) - Refactor: Cambiar "Attendant" por "Attendee"
- [#24](https://github.com/eventoL/eventoL/issues/24) - Crear índice en la db por el campo sede.url
- [#10](https://github.com/eventoL/eventoL/issues/10) - Sección "Follow us!" por sede
- [#21](https://github.com/eventoL/eventoL/issues/21) - Cambiar la url /app/xxx por /sede/xxx
- [#23](https://github.com/eventoL/eventoL/issues/23) - Multi-sede
- [#11](https://github.com/eventoL/eventoL/issues/11) - Pull request: Primeros Detalles
  - Cambio de logo a flisol 2015
  - Organización de código repetido
  - Refactor de pequeños detalles
  - Cambios para uso de grapelli

#### Fixed bugs:

- [#56](https://github.com/eventoL/eventoL/issues/56) - Pull request: BUGS solucionandos
  - [#54](https://github.com/eventoL/eventoL/issues/54) - Votos
    - El colaborador puede cancelar un voto que emitió en charlas que ya fueron confirmadas
    - Cuando el formulario tiene error no carga los votos
  - [#50](https://github.com/eventoL/eventoL/issues/50) - Horarios
    - Horarios de fin antes que horarios de inicio
    - Horarios iguales
  - [#57](https://github.com/eventoL/eventoL/issues/57) - Forms tabulación
  - [#55](https://github.com/eventoL/eventoL/issues/55) - Messages
  - [#53](https://github.com/eventoL/eventoL/issues/53) - Falta de link en Talk List
  - [#52](https://github.com/eventoL/eventoL/issues/52) - Marcar presente (Se puede marcar como presente varias veces a la misma persona)
  - [#51](https://github.com/eventoL/eventoL/issues/51) - Redireccion de Atendee Search
- [#47](https://github.com/eventoL/eventoL/issues/47) - Bug de image-cropping + autocomplete filtrado
- [#44](https://github.com/eventoL/eventoL/issues/44) - Pull request: Fix error superuser/collaborator + Permisos para /admin a todos los collaborators
  - Fix error superuser/collaborator
  - Permisos para /admin a todos los collaborators
- [#57](https://github.com/eventoL/eventoL/issues/57) - Forms tabulación
- [#52](https://github.com/eventoL/eventoL/issues/52) - Marcar presente
- [#117](https://github.com/eventoL/eventoL/issues/117) - Fix error de filtrado por sede en los reportes
- [#115](https://github.com/eventoL/eventoL/issues/115) - Fix error de filtrado por sede
- [#116](https://github.com/eventoL/eventoL/issues/116) - Error de estadísticas
- [#98](https://github.com/eventoL/eventoL/issues/98) - Solución para el bug de formularios de confirmación de charlas
- [#97](https://github.com/eventoL/eventoL/issues/97) - Comportamiento extraño en la lista de charlas
- [#94](https://github.com/eventoL/eventoL/issues/94) - Dos charlas con el mismo horario se pueden crear en la misma aula
- [#73](https://github.com/eventoL/eventoL/issues/73) - Error 500 por error de validación en el admin
- [#82](https://github.com/eventoL/eventoL/issues/82) - View on site tira error 500
- [#85](https://github.com/eventoL/eventoL/issues/85) - Error en script de data de ejemplo
- [#75](https://github.com/eventoL/eventoL/issues/75) - Los instaladores no son staff
- [#70](https://github.com/eventoL/eventoL/issues/70) - Algunos mensajes (largos) en inglés no se traducen
- [#69](https://github.com/eventoL/eventoL/issues/69) - Cuando una charla no tiene imagen, hace una petición a /None
- [#61](https://github.com/eventoL/eventoL/issues/61) - No se puede deshacer un archivo en el formulario (propuesta de charla)
- [#60](https://github.com/eventoL/eventoL/issues/60) - Muchos clicks en el botón submit, submitean el form muchas veces
  `,
  'v0.1.0': `
#### Issues:
  
  - [#218](https://github.com/eventoL/eventoL/issues/218) - Administración de asistencia
  - [#131](https://github.com/eventoL/eventoL/issues/131) - Funcionalidad para sorteos entre los asistentes
  - [#209](https://github.com/eventoL/eventoL/issues/209) - Send email to installed attendee when installation in saved.
  - [#151](https://github.com/eventoL/eventoL/issues/151) - Que al usuario que se le instala algo, le llegue un mail con links útiles para soporte
  - [#211](https://github.com/eventoL/eventoL/issues/211) - Added new reports
  - [#204](https://github.com/eventoL/eventoL/issues/204) - Removed API. Rewrite of reports
  - [#205](https://github.com/eventoL/eventoL/issues/205) - Install doc: Fix paths for example data files
  - [#184](https://github.com/eventoL/eventoL/issues/184) - #142 - Leer Ticket
  - [#203](https://github.com/eventoL/eventoL/issues/203) - Fix typos in error message when CFP is closed
  - [#201](https://github.com/eventoL/eventoL/issues/201) - Agrego safe para pasar de N,n% a N.n% que es lo que maneja css
  - [#200](https://github.com/eventoL/eventoL/issues/200) - Tamaño de charlas en el cronograma
  - [#195](https://github.com/eventoL/eventoL/issues/195) - NameError: global name 'room_available' is not defined
  - [#193](https://github.com/eventoL/eventoL/issues/193) - Error en links de charlas del cronograma
  - [#128](https://github.com/eventoL/eventoL/issues/128) - README en español + instalación y deploy en español
  - [#190](https://github.com/eventoL/eventoL/issues/190) - Cambios en la api para uso de permisos y reportes
  - [#180](https://github.com/eventoL/eventoL/issues/180) - Activities y schedule con cosas generadas desde el admin
  - [#180](https://github.com/eventoL/eventoL/issues/180) - Letra del cronograma mas pequeña para actividades de poco tiempo
  - [#180](https://github.com/eventoL/eventoL/issues/180) - Links de actividades en el cronograma
  - [#180](https://github.com/eventoL/eventoL/issues/180) - Desde el admin se tiene que validar el horarios y aula cuando se modifica una actividad
  - [#180](https://github.com/eventoL/eventoL/issues/180) - Lista de actividades con actividades no confirmadas (hechas desde el admin)
  - [#187](https://github.com/eventoL/eventoL/issues/187) - Boton Home en la barra superior en vista de perfil
  - [#185](https://github.com/eventoL/eventoL/issues/185) - El campo de autocompletar attendees al cargar una instalacion no muestra nada
  - [#144](https://github.com/eventoL/eventoL/issues/144) - Vista de reportes
  - [#177](https://github.com/eventoL/eventoL/issues/177) - Schedule start_time and end_time
  - [#172](https://github.com/eventoL/eventoL/issues/172) - Tests para filters y api completa
  - [#173](https://github.com/eventoL/eventoL/issues/173) - Querys sin __iexact o errores de querys
  - [#174](https://github.com/eventoL/eventoL/issues/174) - Code Style Check + Links de Status en el master y en la documentación
  - [#168](https://github.com/eventoL/eventoL/issues/168) - El mail de confirmación de registro no llega traducido
  - [#167](https://github.com/eventoL/eventoL/issues/167) - En el formulario de login se superponen el label y el placeholder
  - [#169](https://github.com/eventoL/eventoL/issues/169) - Mejoras para deploy
    - Variables de entorno para el settings.py
    - Archivos para deploy en docker
    - Archivos para deploy con docker-compose
    - Arreglo de tests
  - [#166](https://github.com/eventoL/eventoL/issues/166) - Permisos para ver los datos de todos los eventos
  - [#161](https://github.com/eventoL/eventoL/issues/161) - Mostrar link de 'Ver Ticket'
  - [#154](https://github.com/eventoL/eventoL/issues/154) - Configuración de deploy mediante variables de entorno
  - [#83](https://github.com/eventoL/eventoL/issues/83) - URL inválida para Contacto de tipo Email y Lista de correo
  - [#141](https://github.com/eventoL/eventoL/issues/141) - Generar Ticket
  - [#150](https://github.com/eventoL/eventoL/issues/150) - Agregar más providers de oAuth
  - [#125](https://github.com/eventoL/eventoL/issues/125) - Roles de usuario
  - [#145](https://github.com/eventoL/eventoL/issues/145) - Revisar formulario para cargar una instalación
  - [#152](https://github.com/eventoL/eventoL/issues/152) - Timepicker para confirmación de charlas
  - [#146](https://github.com/eventoL/eventoL/issues/146) - Posibilidad de agregar más Organizers a un evento
  - [#122](https://github.com/eventoL/eventoL/issues/122) - Registro de usuario generico
  - [#140](https://github.com/eventoL/eventoL/issues/140) - Permitir editar evento
  
#### Fixed bugs:
  - [#226](https://github.com/eventoL/eventoL/issues/226) - Fix schedule bug
  - [#223](https://github.com/eventoL/eventoL/issues/223) - Error en el schedule por cambio de hora en el servidor
  - [#224](https://github.com/eventoL/eventoL/issues/224) - No se logra exportar todos los roles de usuario e instalaciones
  - [#222](https://github.com/eventoL/eventoL/issues/222) - Bug permission
  - [#220](https://github.com/eventoL/eventoL/issues/220) - Error en sorteo por orden de merge #216 y #215
  - [#214](https://github.com/eventoL/eventoL/issues/214) - Cuando se pide una charla de un evento que no existe, da error 500
  - [#207](https://github.com/eventoL/eventoL/issues/207) - AttributeError at /admin/manager/nonregisteredattendee/
  - [#208](https://github.com/eventoL/eventoL/issues/208) - Error 500 cuando se pide un evento que no existe
  - [#198](https://github.com/eventoL/eventoL/issues/198) - Schedule calcula mal es espacio a ocupar por una charla
  - [#197](https://github.com/eventoL/eventoL/issues/197) - room_available no excluye la charla en si mismo
  - [#189](https://github.com/eventoL/eventoL/issues/189) - Error 500 al querer ver un talk detail
  - [#183](https://github.com/eventoL/eventoL/issues/183) - Poca visibilidad en el registro por mail
  - [#181](https://github.com/eventoL/eventoL/issues/181) - El botón de proponer actividad debería decir "Siguiente" en vez de "Enviar"
  - [#182](https://github.com/eventoL/eventoL/issues/182) - Error 500 con login con github
  - [#170](https://github.com/eventoL/eventoL/issues/170) - Error 500 al crear un evento
  - [#163](https://github.com/eventoL/eventoL/issues/163) - Que el mapa del index de un evento no zoomee con el scroll
  - [#164](https://github.com/eventoL/eventoL/issues/164) - Para un organizador el navbar tiene muchos botones
  - [#159](https://github.com/eventoL/eventoL/issues/159) - No se muestran los labes de los fileinputs
  - [#81](https://github.com/eventoL/eventoL/issues/81) - No se puede editar un lugar que acabamos de crear
  `,
  'v1.0.0': `
#### Issues:

  - [#147](https://github.com/eventoL/eventoL/issues/147) - Actualizar manual de usuario
  - [#247](https://github.com/eventoL/eventoL/issues/247) - Multiples días para asistencia
  - [#58](https://github.com/eventoL/eventoL/issues/58) - Fechas de Evento
    - La sede con múltiples días para el evento
    - El formulario de charlas con datepickers limitados a los días posibles
  - [#244](https://github.com/eventoL/eventoL/issues/244) - Actualizar initial data para deploy
  - [#158](https://github.com/eventoL/eventoL/issues/158) - Informar los requisitos mínimos del password
  - [#246](https://github.com/eventoL/eventoL/issues/246) - Eventuser labels
  - [#231](https://github.com/eventoL/eventoL/issues/231) - Poner un nombre más amigable en los labels referidos a un Eventuser
  - [#245](https://github.com/eventoL/eventoL/issues/245) - #243 - Navbar refactor
  - [#242](https://github.com/eventoL/eventoL/issues/242) - #233 - Upgraded django-autocomplete-light to version 3
  - [#241](https://github.com/eventoL/eventoL/issues/241) - Add debug_toolbar
  - [#240](https://github.com/eventoL/eventoL/issues/240) - Activities refactor
  - [#232](https://github.com/eventoL/eventoL/issues/232) - Simplificar el modelo y usabilidad de las Actividades
  - [#239](https://github.com/eventoL/eventoL/issues/239) - Changed templates
  - [#238](https://github.com/eventoL/eventoL/issues/238) - Attendee refucktor
  - [#229](https://github.com/eventoL/eventoL/issues/229) - Evaluar inscripción sin tener que registrarse como usuario
  - [#237](https://github.com/eventoL/eventoL/issues/237) - Double email entry field
  - [#235](https://github.com/eventoL/eventoL/issues/235) - Agregar captcha al formulario de attendee registration
  - [#234](https://github.com/eventoL/eventoL/issues/234) - Css fixes
  - [#202](https://github.com/eventoL/eventoL/issues/202) - Translated using Weblate (Spanish)
  
#### Fixed bugs:
  - [#256](https://github.com/eventoL/eventoL/issues/256) - Fixed and published reports views
  - [#252](https://github.com/eventoL/eventoL/issues/252) - No muestra algunos mapas en el home
  - [#251](https://github.com/eventoL/eventoL/issues/251) - No envía el ticket a un attendee
  - [#248](https://github.com/eventoL/eventoL/issues/248) - Al logearse con una cuenta social el mail solo es agregado en uno de los dos inputs de mail
  - [#230](https://github.com/eventoL/eventoL/issues/230) - Problema con fecha del evento en inglés
  `,
  'v2.0.0': `
#### Issues:
  - [#367](https://github.com/eventoL/eventoL/issues/367) - Agregar template para issues
  - [#339](https://github.com/eventoL/eventoL/issues/339) - Agregar actualización en tiempo real de la pantalla de reportes
  - [#341](https://github.com/eventoL/eventoL/issues/341) - El reporte nacional muestra mal la cantidad de asistentes (problema con asistentes con eventuser y asistentes sin eventuser)
  - [#340](https://github.com/eventoL/eventoL/issues/340) - Los eventos no se cierran en la fecha correcta
  - [#338](https://github.com/eventoL/eventoL/issues/338) - Agregar boton de export al reporte nacional
  - [#337](https://github.com/eventoL/eventoL/issues/337) - Agregar la cantidad de caracteres al titulo de las actividades
  - [#336](https://github.com/eventoL/eventoL/issues/336) - Crear tabla de estadísticas nacionales
  - [#335](https://github.com/eventoL/eventoL/issues/335) - Actualizar las traducciones de javascript
  - [#334](https://github.com/eventoL/eventoL/issues/334) - Eliminar las ubicaciones en los archivos de traducción
  - [#333](https://github.com/eventoL/eventoL/issues/333) - Agregar ABM de salas
  - [#328](https://github.com/eventoL/eventoL/issues/328) - Agregar un comentario al rechazar una charla
  - [#331](https://github.com/eventoL/eventoL/issues/331) - Reorganizar la barra de arriba para que no quede tan larga (usar mas dropdowns)
  - [#326](https://github.com/eventoL/eventoL/issues/326) - Mejora de usabilidad en Registrarme
  - [#327](https://github.com/eventoL/eventoL/issues/327) - La hora del formulario de confirmar charla es AM/PM pero no lo toma el formulario correctamente
  - [#276](https://github.com/eventoL/eventoL/issues/276) - Crear api de reportes dinamicos con filtros
  - [#325](https://github.com/eventoL/eventoL/issues/325) - Remplazar fa-puzzle-piece en los iconos de redes sociales
  - [#323](https://github.com/eventoL/eventoL/issues/323) - Agregar un campo de modo de asistencia para los asistentes
  - [#322](https://github.com/eventoL/eventoL/issues/322) - Configurar el intervalo de el cronograma a 10 minutos
  - [#321](https://github.com/eventoL/eventoL/issues/321) - Configurar el intervalo del timepicker de las charlas a 5 minutos
  - [#320](https://github.com/eventoL/eventoL/issues/320) - Agregar iconos de flisol en lugar de los de eventol (temporal)
  - [#316](https://github.com/eventoL/eventoL/issues/316) - Agregar menú de selección de idioma
  - [#318](https://github.com/eventoL/eventoL/issues/318) - Agregar Tipo de actividad en Proponer una actividad
  - [#319](https://github.com/eventoL/eventoL/issues/319) - Agregar mensaje de error cuando no se pudo enviar el mail
  - [#302](https://github.com/eventoL/eventoL/issues/302) - Mandar mail al creador de la charla cuando se cambie de estado
  - [#315](https://github.com/eventoL/eventoL/issues/315) - Se muestran la lista de mis eventos para usuarios no logeados
  - [#311](https://github.com/eventoL/eventoL/issues/311) - Agregar pagina con todos los eventos con el mismo event slug
  - [#310](https://github.com/eventoL/eventoL/issues/310) - Hacer pagina para ver eventos del mismo slug
  - [#303](https://github.com/eventoL/eventoL/issues/303) - Hacer un buscador para eventos pasados
  - [#305](https://github.com/eventoL/eventoL/issues/305) - Hacer vista para confirmación de charlas (solo para organizadores del evento)
  - [#306](https://github.com/eventoL/eventoL/issues/306) - Mostrar estado de la propuesta en la pagina de las propuestas
  - [#304](https://github.com/eventoL/eventoL/issues/304) - Mostrar solo las charlas confirmadas (aceptadas) en el home del evento
  - [#298](https://github.com/eventoL/eventoL/issues/298) - Cambiar google recaptcha por otro propio mas simple
  - [#301](https://github.com/eventoL/eventoL/issues/301) - Crear vista que escanee permanentemente QRs
  - [#258](https://github.com/eventoL/eventoL/issues/258) - Agregar formulario y permisos para que los instaladores puedan cargar asistentes
  - [#286](https://github.com/eventoL/eventoL/issues/286) - Mostrar eventos en los que el usuario se encuentra registrado
  - [#273](https://github.com/eventoL/eventoL/issues/273) - Usar event_user para attendee
  - [#290](https://github.com/eventoL/eventoL/issues/290) - UX: buscador
  - [#277](https://github.com/eventoL/eventoL/issues/277) - Agregar formulario para carga de imagen para el evento
  - [#261](https://github.com/eventoL/eventoL/issues/261) - Agregar link de la documentación y del repo en la pagina
  - [#280](https://github.com/eventoL/eventoL/issues/280) - Add user and password to kibana
  - [#278](https://github.com/eventoL/eventoL/issues/278) - Add ELK stack (elasticsearch, logstash and kibana)
  - [#271](https://github.com/eventoL/eventoL/issues/271) - Agregar fechas a todos los modelos que tengan reporte
  - [#257](https://github.com/eventoL/eventoL/issues/257) - Pull request - Updates and improvements:
    - Update to Python 3.5
    - Update to Django 1.11
    - Change mkdocs to docsify
    - Create dockerhub image, coveralls repor, travis build, ...
    - Add ReactJs for use in frontend
    - Update deploy to docker-compose
    - Change django settings
      - Use django-configuration package for create environments (Dev, Staging and Prod)
      - Change default database to sqlite
      - Change default email backend
    - Update python dependencies
    - Change folders tree
    - Update EventoL icons and favicon icon
    - Fix some bugs
  
#### Fixed bugs:
  - [#314](https://github.com/eventoL/eventoL/issues/314) - Eventol 2.0 some fixes
    - [#313](https://github.com/eventoL/eventoL/issues/313) - Arreglar maps para evento en multiples listas
    - [#255](https://github.com/eventoL/eventoL/issues/255) - Link a email en evento se valida carga como foo@bar.tld pero se genera mail link
    - Add abstract field in create event form
    - Remove some list in eventslug home page (show only upcoming and finished events)
  - [#295](https://github.com/eventoL/eventoL/issues/295) - Mixed content
  - [#292](https://github.com/eventoL/eventoL/issues/292) - Aucomplete esta dando error 500 en la busqueda de datos.
  - [#296](https://github.com/eventoL/eventoL/issues/296) - Font files 404
  - [#259](https://github.com/eventoL/eventoL/issues/259) - i18n en todo el frontend (tanto la parte react como la de django)
  `,
  'v2.0.1': `
#### Issues:
  - [#332](https://github.com/eventoL/eventoL/issues/332) - Limitar el admin para evitar su uso en casos incorrectos
  - [#263](https://github.com/eventoL/eventoL/issues/263) - Verificar responsive en todas las pantallas
  - [#275](https://github.com/eventoL/eventoL/issues/275) - Verificar permisos de cada tipo usuario para realizar tareas y para ver en el admin
  - [#345](https://github.com/eventoL/eventoL/issues/345) - Agregar coverage a los tests de django
  - [#344](https://github.com/eventoL/eventoL/issues/344) - Agregar CNAME como opción para los eventos
  - [#289](https://github.com/eventoL/eventoL/issues/289) - Tunning de características al crear un evento
  - [#343](https://github.com/eventoL/eventoL/issues/343) - Agregar eventol al nuevo ci/cd de gitlab
  - [#362](https://github.com/eventoL/eventoL/issues/362) - Limpiar lints de react
  - [#363](https://github.com/eventoL/eventoL/issues/363) - Limpiar lints de python
  - [#367](https://github.com/eventoL/eventoL/issues/367) - Agregar template para issues
  - [#365](https://github.com/eventoL/eventoL/issues/365) - Eliminar la wiki de github para solo dejar la pagina de documentación
  - [#364](https://github.com/eventoL/eventoL/issues/364) - Agregar status desde los pipelines de gitlab
  - [#347](https://github.com/eventoL/eventoL/issues/347) - Actualizar tags del repositorio
  - [#353](https://github.com/eventoL/eventoL/issues/353) - Reponsive en la pagina de documentación no funciona correctamente
  - [#366](https://github.com/eventoL/eventoL/issues/366) - Crear guia para contribuir al proyecto
  - [#370](https://github.com/eventoL/eventoL/issues/370) - Cuando el evento no use instaladores o colaboradores no tiene que poder registrarse alguien como este rol para ese evento
  - [#371](https://github.com/eventoL/eventoL/issues/371) - El modelo Attendee en el admin da un error 500 en produccion
  - [#372](https://github.com/eventoL/eventoL/issues/372) - El modelo Contact en el admin da un error 500 en produccion
  - [#373](https://github.com/eventoL/eventoL/issues/373) - El modelo Installation en el admin da un error 500 en produccion
  - [#374](https://github.com/eventoL/eventoL/issues/374) - Tamaño mínimo en el cronograma para verlo en el celular
  - [#300](https://github.com/eventoL/eventoL/issues/300) - Convertir Dockerfile de eventoL a alpine
  - [#375](https://github.com/eventoL/eventoL/issues/375) - Agregar badges de microbadger.com con datos de las imagenes de docker en docker hub
  `,
  'v2.1.0': `
#### Issues:
  - [#482](https://github.com/eventoL/eventoL/issues/482) - Remover dependencias de ELK del codigo de eventoL
  - [#481](https://github.com/eventoL/eventoL/issues/481) - Actualizar las dependencias de python/django y limpiar los archivos de requirements
  - [#429](https://github.com/eventoL/eventoL/issues/429) - Actualizar las dependencias para testing en react y actualizar los tests actuales 
  - [#422](https://github.com/eventoL/eventoL/issues/422) - Actualizar django por problemas de seguridad de la version 1.11.6 security
  - [#416](https://github.com/eventoL/eventoL/issues/416) - Agregar rol de Reviewer para revisar las propuetas de charlas 
  - [#413](https://github.com/eventoL/eventoL/issues/413) - Diferenciar bien los textos de Registrarse al sitio y anotarse a un evento pyar eventos
  - [#412](https://github.com/eventoL/eventoL/issues/412) - Actualizar las reglas de eslint
  - [#411](https://github.com/eventoL/eventoL/issues/411) - Actualizar dependencias de js
  - [#410](https://github.com/eventoL/eventoL/issues/410) - Agregar un linter para scss
  - [#407](https://github.com/eventoL/eventoL/issues/407) - Ver mas detalles de la actividad en la pagina de actividades
  - [#398](https://github.com/eventoL/eventoL/issues/398) - Campos configurables para la registracion del evento
  - [#395](https://github.com/eventoL/eventoL/issues/395) - Mostrar los logos y fondo del event tag en la pagina del tag 
  - [#386](https://github.com/eventoL/eventoL/issues/386) - La vista "activities" de un evento debería ser accesible solo para usuarios "colaboradores"
  - [#379](https://github.com/eventoL/eventoL/issues/379) - Posibilidad de forzar la aceptación del código de conducta durante la registración
  - [#378](https://github.com/eventoL/eventoL/issues/378) - Crear una landing page para el evento
  - [#375](https://github.com/eventoL/eventoL/issues/375) - Agregar badges de microbadger.com con datos de las imagenes de docker en docker hub
  - [#370](https://github.com/eventoL/eventoL/issues/370) - Cuando el evento no use instaladores o colaboradores no tiene que poder registrarse alguien como este rol para ese evento bug
  - [#366](https://github.com/eventoL/eventoL/issues/366) - Crear guia para contribuir al proyecto
  - [#365](https://github.com/eventoL/eventoL/issues/365) - Eliminar la wiki de github para solo dejar la pagina de documentación
  - [#364](https://github.com/eventoL/eventoL/issues/364) - Agregar status desde los pipelines de gitlab
  - [#363](https://github.com/eventoL/eventoL/issues/363) - Limpiar lints de python
  - [#362](https://github.com/eventoL/eventoL/issues/362) - Limpiar lints de react
  - [#359](https://github.com/eventoL/eventoL/issues/359) - Crear organizaciones/comunidades/metaeventos
  - [#356](https://github.com/eventoL/eventoL/issues/356) - Crear abm de tipo de actividades por evento 
  - [#347](https://github.com/eventoL/eventoL/issues/347) - Actualizar tags del repositorio
  - [#345](https://github.com/eventoL/eventoL/issues/345) - Agregar coverage a los tests de django 
  - [#344](https://github.com/eventoL/eventoL/issues/344) - Agregar CNAME como opción para los eventos
  - [#343](https://github.com/eventoL/eventoL/issues/343) - Agregar eventol al nuevo ci/cd de gitlab 
  - [#330](https://github.com/eventoL/eventoL/issues/330) - Vincular eventUser con las charlas 
  - [#329](https://github.com/eventoL/eventoL/issues/329) - Agregar un formulario para editar charlas
  - [#300](https://github.com/eventoL/eventoL/issues/300) - Convertir Dockerfile de eventoL a alpine
  - [#289](https://github.com/eventoL/eventoL/issues/289) - Tunning de características al crear un evento
  - [#495](https://github.com/eventoL/eventoL/issues/495) - Add configuration for hound bot
  
#### Fixed bugs:
  - [#463](https://github.com/eventoL/eventoL/issues/463) - Arreglar el warning de la consola: validateDOMNesting(...): <a> cannot appear as a descendant of <a>
  - [#431](https://github.com/eventoL/eventoL/issues/431) - Borrar las componentes Narrow y Wide generalizando en una componente
  - [#465](https://github.com/eventoL/eventoL/issues/465) - La cantidad de asistentes en el evento es incorrecta
  - [#425](https://github.com/eventoL/eventoL/issues/425) - Agregar postgres al entorno de testing
  - [#406](https://github.com/eventoL/eventoL/issues/406) - El admin de actividades no permite ver un actividad
  - [#405](https://github.com/eventoL/eventoL/issues/405) - Documentación desactualizada cambiar idioma documentation
  - [#404](https://github.com/eventoL/eventoL/issues/404) - Documentación desactualizada instalación sin Docker documentation
  - [#401](https://github.com/eventoL/eventoL/issues/401) - El logo de eventolSetting no se muestra en el index del evento
  - [#397](https://github.com/eventoL/eventoL/issues/397) - Las vistas para votaciones no funcionan correctamente
  - [#383](https://github.com/eventoL/eventoL/issues/383) - Formulario de creación de eventos no permite agregar tags
  - [#374](https://github.com/eventoL/eventoL/issues/374) - Tamaño mínimo en el cronograma para verlo en el celular
  - [#373](https://github.com/eventoL/eventoL/issues/373) - El modelo Installation en el admin da un error 500 en produccion
  - [#372](https://github.com/eventoL/eventoL/issues/372) - El modelo Contact en el admin da un error 500 en produccion
  - [#371](https://github.com/eventoL/eventoL/issues/371) - El modelo Attendee en el admin da un error 500 en produccion
  - [#353](https://github.com/eventoL/eventoL/issues/353) - Reponsive en la pagina de documentación no funciona correctamente
  - [#332](https://github.com/eventoL/eventoL/issues/332) - Limitar el admin para evitar su uso en casos incorrectos
  `,
};

export const TIMELINE_DATA = [
  {
    date: '18/03/2014',
    title: 'Initial commit',
    text:
      'First commit: [in github](https://github.com/eventoL/eventoL/commit/b8e2efb66bcebf2d44462f5b32c86256e5bc8a04)',
    align: 'left',
  },
  {
    date: '27/08/2015',
    title: 'Eventol v0.0.0',
    text:
      'Release 2015: [in github](https://github.com/eventoL/eventoL/releases/tag/v0.0.0)',
    detail: CHANGELOGS['v0.0.0'],
    release: true,
  },
  {
    date: '25/02/2017',
    title: 'Eventol v0.1.0',
    text:
      'Release 2016: [in github](https://github.com/eventoL/eventoL/releases/tag/v0.1.0)',
    align: 'left',
    detail: CHANGELOGS['v0.1.0'],
    release: true,
  },
  {
    date: '23/04/2017',
    title: 'Eventol v1.0.0',
    text:
      'Release 2017: [in github](https://github.com/eventoL/eventoL/releases/tag/v1.0.0)',
    detail: CHANGELOGS['v1.0.0'],
    release: true,
  },
  {
    date: '21/02/2018',
    title: 'New EventoL public instance',
    text:
      'Flisol instance [https://eventol.flisol.org.ar](https://eventol.flisol.org.ar)',
    align: 'left',
    active: true,
  },
  {
    date: '05/05/2018',
    title: 'EventoL v2.0.0',
    text:
      'First release of 2018: [in github](https://github.com/eventoL/eventoL/releases/tag/v2.0.0)',
    detail: CHANGELOGS['v2.0.0'],
    release: true,
  },
  {
    date: '08/05/2018',
    title: 'EventoL v2.0.1',
    text:
      'Second release of 2018: [in github](https://github.com/eventoL/eventoL/releases/tag/v2.0.1)',
    align: 'left',
    detail: CHANGELOGS['v2.0.1'],
    release: true,
  },
  {
    date: '12/08/2018',
    title: 'New EventoL public instance',
    text:
      'PyAr instance [https://eventos.python.org.ar](https://eventos.python.org.ar)',
    active: true,
  },
  {
    date: '03/02/2019',
    title: 'EventoL v2.1.0',
    text:
      'Third release of 2018: [in github](https://github.com/eventoL/eventoL/releases/tag/v2.1.0)',
    align: 'left',
    detail: CHANGELOGS['v2.1.0'],
    release: true,
  },
  {
    date: '06/02/2019',
    title: 'Start new translations',
    text: 'Languages: Dutch, Swedish, Danish and Norwegian Bokmål',
  },
  {
    date: '14/02/2019',
    title: 'Start new translations',
    text: 'Languages: Chinese',
    align: 'left',
  },
];
