import {render,screen,fireEvent} from '@testing-library/react';
import {TextBox} from '../../components/TextBox';
import {toBeInTheDocument} from '@testing-library/jest-dom'

describe('<TextBox/>', () => {
    let article;
    let button;
    beforeEach(() => {
          render(<TextBox/>);
     article = screen.getByRole('article', {name: 'Párrafo principal'});
     button = screen.getByRole('button', {name: 'Cambia el color'});
    });

   test('should render a text', () => {
  
    expect(article).toBeInTheDocument();
   });

   test('should have a background color', () => {
  
    expect(article).toHaveStyle({
        backgroundColor: 'indigo'
    });
   });

   test('should change the backgrounColor', () => {
    fireEvent.click(button);
    expect(article).toHaveStyle({
        backgroundColor: 'tomato'
    });
   })
});