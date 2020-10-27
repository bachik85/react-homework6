import React from 'react';
import styled, { css } from 'styled-components';


export const FormErrorsTab = ({ errors }) => {

  const errorsList = Object.keys(errors).map(key => (
    <div key={key}>{key}: {errors[key]}</div>
  ));

  const isVisible = !!errorsList.length;

  return (
    <ErrorMessage visible={isVisible}>
      {errorsList}
    </ErrorMessage>
  )
}

const ErrorMessage = styled.div`
    padding: 10px;
    background-color: red;
    color: white;
    text-align: center;
    margin-top: 15px;

    ${(props) => !props.visible && css`
        background-color: transparent;
    `}
`