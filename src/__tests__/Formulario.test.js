import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Formulario from '../components/Formulario.js';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const crearCita = jest.fn();

afterEach(cleanup);

test('<Formulario /> Cargar el formulario y cargar que todo sea correcto',()=>{
// const wrapper = render(<Formulario />);
    // wrapper.debug();

    render(
        <Formulario
            crearCita={crearCita}
        />
        );

   //heading
   const titulo = screen.getByTestId('titulo')
   expect( screen.getByText('Crear Cita') ).toBeInTheDocument();
   expect( titulo.tagName ).toBe('H2');
   expect( titulo.textContent ).toBe('Crear Cita');

   //boton
   const boton = screen.getByTestId('btn-submit')
    expect( boton.tagName).toBe('BUTTON');
    expect( boton.textContent).toBe('Agregar Cita')

})

test('<Formulario /> Validar el formulario', ()=>{
    
    render(
        <Formulario
            crearCita={crearCita}
        />
        );
    
        //dar click al submit
        const botonSubmit = screen.getByTestId('btn-submit')
        userEvent.click(botonSubmit);

        //revisar por alerta
        const alerta = screen.getByTestId('alerta');
        expect(alerta).toBeInTheDocument();
        expect(alerta.textContent ).toBe('Todos los campos son obligatorios');
        expect(alerta.tagName ).toBe('P');
});

test('<Formulario /> Llenar campos en el formulario', ()=>{
    
    render(
        <Formulario
            crearCita={crearCita}
        />
        );
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
     
   //crear cita y comprobar que la funcion se haya llamado

   expect(crearCita).toHaveBeenCalled();
   expect(crearCita).toHaveBeenCalledTimes(1);     

});
