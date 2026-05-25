# Delitos Informáticos Aplicables – Caso Equifax

## Introducción

El incidente de seguridad de Equifax, ocurrido originalmente en Estados Unidos, será analizado en esta sección bajo el marco de la **Ley N.º 21.459 sobre Delitos Informáticos** de Chile.

El objetivo es identificar las conductas realizadas por los atacantes y determinar qué figuras delictivas podrían configurarse si los hechos hubiesen ocurrido bajo jurisdicción chilena.

---

## 1. Acceso Ilícito a Sistemas Informáticos

### Conducta observada

Los atacantes explotaron la vulnerabilidad **CVE-2017-5638** presente en el framework Apache Struts, permitiendo el acceso remoto no autorizado a los sistemas internos de Equifax.

Una vez obtenido el acceso inicial, lograron ingresar a servidores críticos y acceder a información almacenada en bases de datos corporativas.

### Encuadre jurídico (Ley 21.459)

Esta conducta puede asociarse al delito de **Acceso Ilícito** establecido en el **Artículo 1°** de la Ley 21.459.

La normativa sanciona a quienes ingresen o permanezcan dentro de un sistema informático vulnerando medidas tecnológicas de protección o utilizando mecanismos no autorizados.

### Evidencia técnica

- Explotación remota de vulnerabilidad Apache Struts.
- Acceso no autorizado a infraestructura corporativa.
- Obtención de privilegios sobre sistemas internos.

---

## 2. Obtención Indebida y Exfiltración de Datos

### Conducta observada

Después de consolidar el acceso, los atacantes realizaron consultas y extracción masiva de información contenida en las bases de datos de Equifax.

La exfiltración permaneció activa durante varios meses sin ser detectada por los mecanismos internos de seguridad.

### Encuadre jurídico (Ley 21.459)

La conducta puede relacionarse con la **obtención indebida de datos**, ya que existió copia, extracción y transferencia no autorizada de información almacenada digitalmente.

La exfiltración de información financiera y personal representa una afectación directa a la confidencialidad y protección de los datos.

### Información comprometida

- Nombres completos.
- Fechas de nacimiento.
- Direcciones residenciales.
- Números de identificación.
- Información financiera y crediticia.

---

## 3. Vulneración de la Confidencialidad de la Información

### Conducta observada

El ataque provocó una pérdida masiva de confidencialidad sobre los registros almacenados por Equifax.

Aunque no se evidenció destrucción o alteración importante de la información, la exposición de millones de registros produjo pérdida de control sobre activos críticos.

### Encuadre jurídico

La Ley 21.459 protege bienes jurídicos asociados a la confidencialidad, integridad y disponibilidad de los sistemas informáticos.

La extracción masiva de información mediante acceso no autorizado constituye una afectación relevante a dichos principios.

---

## Matriz de Tipificación Jurídica

| Acción Técnica del Atacante | Posible Tipificación (Ley 21.459) | Efecto Operacional |
|---|---|---|
| Explotación de Apache Struts | Acceso Ilícito (Art. 1) | Ingreso no autorizado al sistema |
| Acceso a servidores internos | Acceso ilícito a infraestructura protegida | Compromiso de bases de datos |
| Extracción masiva de registros | Obtención indebida de datos | Exposición de información sensible |
| Permanencia prolongada en sistemas | Vulneración continua de confidencialidad | Riesgo para titulares de datos |

---

## Conclusión

El caso Equifax evidencia cómo una vulnerabilidad técnica puede derivar en múltiples conductas asociadas a delitos informáticos.

Si el incidente hubiese ocurrido en Chile, las acciones observadas permitirían analizar figuras relacionadas con acceso ilícito, obtención indebida de información y vulneración de la confidencialidad de los datos.

El caso constituye un ejemplo relevante para estudiar la aplicación práctica de la Ley 21.459 en escenarios de brechas masivas de información.