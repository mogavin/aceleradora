import { render, screen } from '@testing-library/react';
import ListaMusicas from './components/ListaMusicas';
import musicas from './data/musicas'

test('pagina musicas deve renderizar a lista', () => {
  render(<ListaMusicas musicas={musicas} />);
  
  const autor  = screen.getByText(/Forgottenage/i);
  const nome  = screen.getByText(/End of the World/i);
  const generos  = screen.getAllByText(/Phonk/i);

  expect(autor).toBeInTheDocument();
  expect(nome).toBeInTheDocument();
  expect(generos[0]).toBeInTheDocument();
});
