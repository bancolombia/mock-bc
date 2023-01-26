<div style="text-align: center;">
    <img src="icon.png" width="70px"/>
</div>
<h1 style="color: #069CD4; margin-top: 0; text-align: center;">
    { mock: json }
</h1>
<span style="color: #069CD4; font-weight: bold;">mock-json</span> es una herramienta que te permite mockear servicios mediante sencillos ficheros <span style="background-color: #069CD4; color: white; border-radius: 4px; padding: 2px 6px;">JSON</span>

<h2>Requisitos</h2>

- Debes tener <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">nodejs y npm</span> instalados en tu ordenador.

- Debes tener instalado el packete <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">pm2</span> de manera global en tu ordenador. Esto se logra, ejecutando el comando <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">npm install pm2 -g</span> desde la terminal. Este paquete ayuda a ejecutar procesos en segundo plano.

- Por último, debes clonar este repositorio en tu ordenador.

<span style="font-style: italic;">Para los siguientes pasos, debes posicionarte dentro de la carpeta llamada <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">servicio</span>. Esta carpeta se encuentra en la raiz del repositorio.</span>

<h2>Configuración y arranque del servicio</h2>

- Dentro de esta carpeta existe un fichero llamado <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">.env</span> en donde puedes definir el puerto en el que va a ejecutarse la utilidad. Esta variable tiene <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">3005</span> como valor por defecto.

- El siguente paso es instalar las dependencias de la herramienta ejecutando el comando <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">npm install</span> desde la terminal.

- Por último, para arrancar el servicio debes ejecutar el comando <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">npm run start</span> desde la terminal.

<span style="font-style: italic;">"Cabe mencionar, que el comando de ejecutar el servicio, solo es necesario ejecutarlo una sola vez, ya que mediante la utilidad <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">pm2</span> el servicio quedará ejecutandose en segundo plano, incluso si se reinicia el ordenador."</span>

<h2>Creación de mocks</h2>

Para crear un mock, debes crear un fichero <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">JSON</span> en la carpeta <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">files</span>. Dicho archivo debe tener la siguiente estructura:

```json
{
    "status": 201,
    "delay": 2000,
    "response": [
        {
            "id": 1,
            "name": "AMARILO"
        },
        {
            "id": 2,
            "name": "ARQUITECTURA Y CONCRETO"
        }
    ]
}
```

El fichero contiene tres claves: <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">status, delay y response</span> 

- La clave <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">status</span> corresponde al (código de respuesta) que se desea recibir cuando se consuma el servicio.
- la clave <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">delay</span> corresponde a un valor en milisegundos que podrá usarse para simular que el servidor está tardando en procesar una tarea.
- la clave <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">response</span> corresponde al body de la respuesta que se quiere simular.

<h2>Consumo estandar</h2>

Luego de la creación del <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">mock</span> en la carpeta <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">files</span>, por ejemplo <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">getBuilders.json</span>, se encontrará disponible el consumo de ese mock en <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">localhost:{puerto}/nombreDelFicheroJSONSinExtension</span>, por ejemplo: <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">localhost:3005/getBuilders</span>. Cabe agregar, que el consumo de mocks debe realizarse con el metodo <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">GET</span> haciendo uso de cualquier cliente http como: postman, navegador, etc...

<h2>Workflow en una aplicación Angular</h2>

Una manera de consumir el servicio de <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">mocks</span> en tu aplicación desarrollada con Angular, podría hacerse de la siguiente manera:

- Ejecutando en la raiz de tu aplicación Angular el comando <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">npm install mock-json-bancolombia</span> desde la terminal.
- Usando el patrón decorador, en la carpeta <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">app</span> cree un fichero como el siguiente:
```typescript
import { MockJsonSettings, MockJsonDecorator } from 'mock-json-bancolombia';

export const MockJson = (mockName: string) => {
    const settings: MockJsonSettings = {
        servicePort: 3005, //puerto donde este corriendo el servicio
        active: true //preferiblemente por (environment)
    }
    return MockJsonDecorator(settings, mockName);
}
```
La clave <span style="background-color: #DFF7FF; color: #028BB9; border-radius: 4px; padding: 2px 6px; border: 1px solid #028BB9;">"active"</span> enciende o apaga el funcionamiento de la librería.

Por último, el decorador debe ubicarse encima del metodo que se quiere mockear, de la siguiente manera

```typescript
@Injectable({
  providedIn: 'root'
})
export class BuildersService {

  constructor(private http: HttpClient) { }

  @MockJson('getBuildersMock') // este parametro corresponde al nombre del mock, ejemplo getBuildersMock.json
  getBuildersByUser(): Observable<any> {
    return this.http.get(`${environment.endpoint}/constructorasUsuario/consultaConstructoras`);
  }

}
```

<h2>¿Como contribuir?</h2>

- Realizar fork
- Realizar el respectivo Pull Request
- Finalmente se validará el respectivo cambio y se aprobará.
