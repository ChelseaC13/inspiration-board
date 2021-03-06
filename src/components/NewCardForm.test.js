import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewCardForm from './NewCardForm.js';


describe('NewCardForm', () => {
  test('that it matches the existing snapshot', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
        onSubmitCallback={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});