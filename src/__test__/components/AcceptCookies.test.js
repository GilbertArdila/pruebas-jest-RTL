import {render,screen,fireEvent} from '@testing-library/react';
import {AcceptCookies} from '../../components/AcceptCookies';
import {toBeInTheDocument} from '@testing-library/jest-dom'


describe('<AcceptCookies/>', () => {
  let checkBox;
  let article;
  beforeEach(() => {
    render(<AcceptCookies/>);
    checkBox = screen.getByLabelText('Acepta cookies');
    article = screen.getByRole('article', {name: 'Confirmacion cookies'});
  });

  test('should render a disactive component', () => {
      expect(checkBox).toBeInTheDocument();
      expect(checkBox).not.toBeChecked();
  });

  test('should change the checkBox test onClick', () => {
     fireEvent.click(checkBox);
     expect(checkBox).toBeChecked();
     expect(article.textContent).toBe('Cookies aceptadas');
  });
});