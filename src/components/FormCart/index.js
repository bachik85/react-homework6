import React from 'react';
import {Formik, Form, Field} from 'formik';
import styled from 'styled-components';
import {connect} from 'react-redux';

import {FormErrorsTab} from './formErrors';
import {validationSchema} from './validations';
import {deleteCart} from '../../store/productListReduser';
import {selectFormValues, setFormValues} from '../../store/formValues';

const mapStateToProps = state => ({
  formValues: selectFormValues(state)
})

export const FormCart = connect(mapStateToProps, {
  deleteCart,
  setFormValues
})(({formValues, setFormValues, deleteCart}) => {

  const initialValues = formValues

  const onSubmit = (values, actions) => {
    console.log('USER:', values);
    actions.resetForm();
    setFormValues({
      firstname: "",
      lastname: "",
      age: "",
      deliveryAddress: "",
      phoneNumber: ""
    });
    deleteCart();
  }


  return (
    <>
      <MyHeaderForm>Заполните пожалуйста форму</MyHeaderForm>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({values, errors, handleBlur}) => (
          <MyForm onBlur={e => {
            handleBlur(e);
            setFormValues(values);
          }}>
            <MyField name='firstname'
                     type='text'
                     placeholder='Имя'/>
            <MyField name='lastname'
                     type='text'
                     placeholder='Фамилия'/>
            <MyField name='age'
                     type='text'
                     placeholder='Возраст'/>
            <MyField name='deliveryAddress'
                     type='text'
                     placeholder='Адрес доставки'/>
            <MyField name='phoneNumber'
                     type='text'
                     placeholder='Номер телефона'/>
            <MyBtn type='submit'>ОТПРАВИТЬ</MyBtn>

            <FormErrorsTab errors={errors}/>
          </MyForm>
        )}
      </Formik>
    </>
  )
})

const MyForm = styled(Form)`
    width: 30%;
    margin: 10px auto;
    padding: 6px;
    display: flex;
    flex-direction: column;
    border: 2px solid white;
    border-radius: 4px;
    background: chocolate;
`
export const MyHeaderForm = styled.h2`
    text-align: center;
    font-family: sans-serif;
    margin: 10px;
    color: white;
`
export const MyField = styled(Field)`
    display: block;
    width: 97.4%;
    height: 25px;
    margin-top: 5px;
`
export const MyBtn = styled.button`
    display: block;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    font-size: 18px;
`
