import React from 'react';
import Input from 'react-enhanced-form';
 
const Form = () => { 

    const stylized = {
        height: 40,
        backgroundColor: '#fafafa',
        borderRadius: 3,
        paddingLeft: 10,
        fontSize: 15,
    }

    const style = {
        default: {color: '#lightgrey', outline: 'none', width: 350, fontSize: 14, border: 'none', ...stylized},
        onFocus: {borderBottom: '1px solid red', ...stylized},
        onError: {borderBottom: '1px solid green', ...stylized},
    }

    const lessThan1000 = newValue => newValue < 1000
    const email = newValue => (newValue).isEmail()
  
    const handleSubmit = (e) => { 
        alert(e) 
    }
  
    const Label = ({ children }) => {
  
      const style = {
        // fontFamily: 'Sans-serif',
        fontWeight: 200,
        paddingLeft: 5,
        // color: 'black',
        fontSize: 16,
        color: '#666',
      }
  
      return <h3 style={style}>{children}</h3>
    }

  const check = newValue => newValue < 10;
  const format = value => `${value} $`;
 
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Label>{'Name'}</Label>
      <Input
        type='text'
        value='Full Name'
        // onChange={(data, error) => console.log('change', data, error)}
        // onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        required
      />
      <Label>{'Email'}</Label>
      <Input
        type='text'
        value='name@domain.com'
        // onChange={(data, error) => console.log('change', data, error)}
        // onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        // check={email}
        required
      />
      <Label>{'Message'}</Label>
      <Input
        type='textarea'
        value='Your Message'
        // onChange={(data, error) => console.log('change', data, error)}
        // onMount={(data,error) => console.log('mount', data, error)}
        style={style}
        required
      />
        <Input 
        type="submit" 
        value="Submit" />
    </form>
 )
}

export default Form;