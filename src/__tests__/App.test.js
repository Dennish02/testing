import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';


test('<App/> la aplicacion funciona', ()=>{
    //se usa para ver si se monta bien el componente
    // const wrapper = render(<App/>)
    // console.log(wrapper);
    render(<App/>);

    expect(screen.getByText('Administrador de Pacientes')).toBeInTheDocument();

    expect(screen.getByTestId('nombre-app').textContent).toBe('Administrador de Pacientes');
    expect(screen.getByTestId('nombre-app').tagName).toBe('H1');

    expect(screen.getByText('No hay citas')).toBeInTheDocument();
    expect(screen.getByText('Crear Cita')).toBeInTheDocument();
});
test('<App/> Validar titulo dinamico', ()=>{
  
    render(<App/>);

    userEvent.type(screen.getByTestId('mascota'),'Hook');
    userEvent.type(screen.getByTestId('propietario'),'Dennis');   
    userEvent.type(screen.getByTestId('fecha'),'2022-10-09'); 
    userEvent.type(screen.getByTestId('hora'),'10:30'); 
    userEvent.type(screen.getByTestId('sintomas'),'Mareos'); 
    // fireEvent.change(screen.getByTestId('mascota'), {
    //     target: { value: 'Hook' }
    // })//recibe dos valores, unnio es donde y lo otro es que
  
    //dar click al submit
    const botonSubmit = screen.getByTestId('btn-submit')
    userEvent.click(botonSubmit);

     //revisar por alerta
     const alerta = screen.queryByTestId('alerta');//queryByTestId busca por elements que pueden existir o no
     expect(alerta).not.toBeInTheDocument();
     
 
    //validar tutulo dionamico

    expect(screen.getByTestId('titulo-dinamico').textContent).toBe('Administra tus Citas')

    expect(screen.getByTestId('titulo-dinamico').textContent).not.toBe('No hay citas')
});


test('<App/> Verificar citas en el DOM', async ()=>{
  
    render(<App/>);

    const citas = await screen.findAllByTestId('cita')
    // expect(citas).toMatchSnapshot();//escribe un archivo nuevo para verificar su contenido


    expect(screen.getByTestId('btn-eliminar').tagName).toBe('BUTTON')
    expect(screen.getByTestId('btn-eliminar')).toBeInTheDocument()

    // veridicar una cita

    expect(screen.getByText('Hook')).toBeInTheDocument();
});

test('<App/> Elimianr la cita', ()=>{
  
    render(<App />);

    const btnElimianr = screen.getByTestId('btn-eliminar')
    expect(btnElimianr.tagName).toBe('BUTTON')
    expect(btnElimianr).toBeInTheDocument()
    //    simular el click
    userEvent.click(btnElimianr);

    //el boton no debe estar
    expect(btnElimianr).not.toBeInTheDocument();

     // veridicar una cita no est?? en el documento

     expect(screen.queryByText('Hook')).not.toBeInTheDocument();
});