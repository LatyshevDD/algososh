import { Circle } from "./circle";
import React from "react";
import renderer from 'react-test-renderer';
// import { render, screen, fireEvent, getByTestId } from '@testing-library/react';



describe('Circle test', () => {
  it('Круг без буквы', () => {
    const circle = renderer
      .create(<Circle />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c буквами', () => {
    const circle = renderer
      .create(<Circle letter='Тест' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c head', () => {
    const circle = renderer
      .create(<Circle head='Тест' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c реакт элементом в head', () => {
    const circle = renderer
      .create(<Circle head={<Circle />} />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c tail', () => {
    const circle = renderer
      .create(<Circle tail='Тест' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c реакт элементом в tail', () => {
    const circle = renderer
      .create(<Circle tail={<Circle />} />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг c index', () => {
    const circle = renderer
      .create(<Circle index={1} />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг с пропом isSmall ===  true', () => {
    const circle = renderer
      .create(<Circle isSmall={true} />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг в состоянии default', () => {
    const circle = renderer
      .create(<Circle state='default' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг в состоянии changing', () => {
    const circle = renderer
      .create(<Circle state='changing' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

  it('Круг в состоянии modified', () => {
    const circle = renderer
      .create(<Circle state='modified' />)
      .toJSON();
      expect(circle).toMatchSnapshot();
  });

});