import React from 'react';
import { render, screen } from '@testing-library/react';
import Formulario from '../components/Formulario.js';
import '@testing-library/jest-dom/extend-expect';


test('<Formulario /> Cargar el formulario y cargar que todo sea correcto',()=>{
// const wrapper = render(<Formulario />);
    // wrapper.debug();

   render(<Formulario />);

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