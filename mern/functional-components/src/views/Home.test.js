import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('renders learn react link', () => {
  test('Title exists', () => {
    render(<Home />);
    const title = screen.getByText('¿Qué estás pensando?');
    expect(title).toBeInTheDocument();
  })
  test('Form works correctly', async () => {
    const { debug } = render(<Home />);
    const inputComment = await screen.findByRole('textbox');
    expect(inputComment).toBeInTheDocument();
    debug()
    fireEvent.change(inputComment, { target: { value: 'testText' } });
    expect(inputComment.value).toBe('hola');

  })


});