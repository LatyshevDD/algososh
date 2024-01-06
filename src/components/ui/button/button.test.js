import { Button } from "./button";
import React from "react";
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';



describe('Button test', () => {
  it('Кнопка без текста', () => {
    const button = renderer
      .create(<Button />)
      .toJSON();
      expect(button).toMatchSnapshot();
  });

  it('Кнопка с текстом', () => {
    const button = renderer
      .create(<Button text="Текст"/>)
      .toJSON();
      expect(button).toMatchSnapshot();
  });

  it('Заблокированная кнопка', () => {
    const button = renderer
      .create(<Button disabled />)
      .toJSON();
      expect(button).toMatchSnapshot();
  });

  it('Кнопка с индикатором загрузки', () => {
    const button = renderer
      .create(<Button isLoader={true} />)
      .toJSON();
      expect(button).toMatchSnapshot();
  });

  it('Проверка корректности вызова колбека при клике на кнопку', () => {
    window.alert = jest.fn();

    render(<Button data-testid="button" onClick={alert('Произошел клин по кнопке')}/>)

    const button = screen.getByTestId("button");

    fireEvent.click(button);
        
    expect(window.alert).toHaveBeenCalledWith('Произошел клин по кнопке');
  }); 

});