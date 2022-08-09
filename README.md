## ¿Porque hacer testing?

1- para encontrar errores antes de lanzar a la produccion 
</br>
2- para agregar nuuevas funciones y asegurarse que funcionen y ver como se integran con otras.

<h2>Tipos de pruebas</h2>
<ul>
<li>End To End: se comporta como usuario, da clicks y llena formularios</li>
<li>Integracion: Revisa que varias partes de la aplicion funcione bien juntas</li>
<li>Unitarias: Que parte por su sola funcione bien</li>
<li>Static: Se identifican errores mientras los vas escribiendo</li>
</ul>

<h2>Formas de hacer Testing en React</h2>

<p>Le puedes hacer testing a un componente o a un árbol de componentes.

Puedes revisar que un componente funciona bien, si es un formulario que almacena los datos correctamente en el state.
Pero después, si esos datos se comunican por diferentes componentes, lo más seguro es que quieras hacer una prueba a un árbol de componentes para revisar que los props se pasen correctamente entre ellos y que se comuniquen bien.

También le puedes hacer un testing a la aplicación completa y ver cómo se comporta, esto se conoce como END to END.
</p>
<h3>Herramientas Recomendadas para Testing</h3>
<ul>
<li>Jest</li>
<li>React Testing Library(incluido en CRA)</li>
<li>Cypress(END to END)</li>
</ul>

<h2>¿Dónde se colocan los archivos para el test?</h2>

<p>Al componente que se le quiera hacer la prueba, haces otro archivo llamado con el nombre del componente seguido de test, ejemplo si queremos hacer test a App.js, creamos el archivo App.test.js o App.spec.js</p>
<p>Tambien podemos crear una carpeta para incluir ahí todos los tests, __tests__ todo lo que esté dentro de esta carpera React lo va a reconocer como componentes de prueba. </p>

<h2>¿Cómo ejecutar un test?</h2>
<p>Detro del archivo que creamos ponemos 

```
test('lo que hace el test', ()=>{
    'callback que ejecuta lo que querramos'
    console.log('Hola mundo')
})
```

Tambien se puede usar  ```it```


```
it('lo que hace el test', ()=>{
    'callback que ejecuta lo que querramos'
    console.log('Hola mundo')
})
```

</p>

<p>Para averiguar si un texto o cadena de texto exista en el documento se puede
hacer:

```
const { getByText } = render(<Formulario />);
expect( getByText('Crear Cita') ).toBeInTheDocument()

```
Donde ```expect``` es la funcion que recibe lo que esperas que haga el test.
la funcion ```toBeInTheDocument``` verifica si eso que recibe el ```expect``` exista en ese documento.

Hay otra manera mas nueva de hacer lo mismo, en lugar de usar ```getByText``` usamos ```screen ``` que lo importamos de ```@testing-library/react```, y el codigo quedaria asi:

```
render(<Formulario />);
expect( screen.getByText('Crear Cita') ).toBeInTheDocument()

```
</p>

Si tenemos un componente montado y hacemos otro test, podemos limpiarlo para que no cargue la memoria, eso se hace usando una funcion llamada ```cleanup``` que la importamos de ```@testing-library/react``` y lo hacemos colocando esta funcion ```afterEach(cleanup);```, entonces cada vez que temina un test se limpia el componente.. Esto en las ultimas versiones ya no es necesario.
