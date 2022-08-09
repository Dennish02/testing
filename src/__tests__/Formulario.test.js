import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Formulario from '../components/Formulario.js';
import '@testing-library/jest-dom/extend-expect';

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
        fireEvent.click(botonSubmit);

        //revisar por alerta
        const alerta = screen.getByTestId('alerta');
        expect(alerta).toBeInTheDocument();
        expect(alerta.textContent ).toBe('Todos los campos son obligatorios');
        expect(alerta.tagName ).toBe('P');
})