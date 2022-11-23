import React from 'react'

export function titleCase(text) {
    if (text==='') return '';

    const array = text.split(' ');
    const result = [];
    for(let elem of array){
        result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase());
    };
    return result.join(' ');

};

export const testAge = (age) => {
    if(age < 0) return null;
   return (age >= 18 ? true :false)
};

export const descriptionTest = (description) => {
   
    if(description==='') return '';
    const response = description.split('.');
    return response;
   
    
}

export const mailTest = (mail) => {
    const regex_email=new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

    return(regex_email.test(mail))
}


const User = ({name,age,mail,description}) => {
  return (
    <div>User</div>
  )
}

export  {User}