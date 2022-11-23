import { titleCase } from "../../components/User";
import {testAge} from '../../components/User';
import {descriptionTest} from '../../components/User';
import {mailTest} from '../../components/User';

describe('User component testing', () => {
    describe('titleCase test', () => {
         test('should return a string', () => { 
            const result =titleCase('un string')
            expect(typeof result).toBe('string');
          });

          test('shoul return a transform string', () => {
            expect(titleCase('hola mundo')).toBe('Hola Mundo');
          });

          test('Shoul return an empty string', () => {
            expect(titleCase('')).toBe('');
          });
    });

    describe('testAge test', () => {

        test('Must return a boolean', () => {
           expect(typeof testAge(19)).toBe('boolean');
        });

        test('is adult return true', () => {
            expect( testAge(34)).toBeTruthy();
         });

         test('is 18 return true', () => {
            expect(testAge(18)).toBeTruthy();
         });

         test('is younger than 18 return false', () => {
            expect(testAge(17)).toBeFalsy();
         });

         test('is negative return null', () => {
            expect(testAge(-7)).toBeNull();
         });
    });

    describe('Description test', () => {

      
        test('should return an empty string', () => {
            expect(descriptionTest('')).toBe('');
        });

        test('should split a string', () => {
            expect(descriptionTest('este es un parrafo. Aqui empieza otro')).toStrictEqual(["este es un parrafo"," Aqui empieza otro"]);
        });
    });

    describe('mailTest', () => {
        test('should be a valid mail adress', () => {
            expect(mailTest('carlos-balaguer.correo@gmail.com')).toBeTruthy()
        });
        
    });
});



// const text = 'Hola mundo';
// const fruits = ['manazana','melon','banana'];

// test('should contain a text', () => { 
//     expect(text).toMatch(/mundo/i); 
//  });

//  test('shoudl countain a fruit', () => {
//     expect(fruits).toContain('banana')
//  })

//  test('expect a bigger value', () => {
//     expect(10).toBeGreaterThan(9)
//  });

//  test('expect a boolean', () => {
//     expect(true).toBeTruthy()
//  });

//  test('expect a boolean', () => {
//     expect(false).toBeFalsy()
//  });