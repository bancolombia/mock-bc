# `mockaug-service`

Es una utilidad que te permitirá mockear servicios mediante siemples ficheros `JSON`

## `Requisitos`

Debes tener `nodejs y npm` instalados en tu ordenador

Sumado a eso, debes instalar el packete `PM2` de manera global en tu ordenador. Este paquete ayuda a ejecutar procesos en segundo plano.
`npm install pm2 -g`

Por último, debes clonar este repositorio en tu ordenador.

## `Configuración`

En la raíz del repositorio encontrarás un fichero llamado `.env` en donde puedes definir el puerto en el que va a ejecutarse la utilidad. 
Esta variable tiene `3005` como valor por defecto.

## `Instalación de dependencias`

Debes instalar las dependencias de la utilidad con el siguiente comando en la raiz del repositorio
`npm install`

## `Ejecución de la herramienta`

Lo siguiente es ejecutar el servicio con el siguiente comando en la raíz del repositorio
`npm run start`

Cabe mencionar, que el comando de ejecutar el servicio, solo es necesario ejecutarlo una sola vez, ya que mediante la utilidad PM2 el servicio quedará 
ejecutandose en segundo plano incluso si se reinicia el ordenador.

## `Creación de mocks`

Para crear un mock, debes crear un fichero `JSON` en la carpeta `files`. Dicho archivo debe tener la siguiente estructura:

```json
{
    "status": 201,
    "delay": 2000,
    "response": [
        {
            "id": 1,
            "customer": "Andrés Lopez",
            "created": "12/12/2021 09:09:01",
            "method": "nequi"
        },
        {
            "id": 2,
            "customer": "Daniela Paz",
            "created": "13/12/2022 02:02:23",
            "method": "qr"
        }
    ]
}
```

El fichero contiene tres claves: `status, delay y response`. 

La clave `status` debe ser poblada con el (código de respuesta) que se desea recibir cuando se consuma el servicio
la clave `delay` debe ser poblada con un valor en milisegundos que podrá usarse para simular que el servidor está tardando en procesar una tarea
la clave `response` es el body de la respuesta que se quiere simular

## `Consumo http`

Luego de la creación del fichero `JSON` en la carpeta `files`, se encontrará disponible el consumo de ese mock en `http://localhost:PORT/nombreDelMockSinExtensión`, ejemplo: `http://localhost:3005/getPayments`. Cabe agregar, que todos los mocks deben consumirse mediante el metodo `GET`