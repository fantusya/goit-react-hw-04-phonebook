import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[6]}px;

  padding: ${p => p.theme.space[6]}px ${p => p.theme.space[5]}px;

  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

  color: ${p => p.theme.colors.accent};
  background-image: radial-gradient(
    circle 674px at 18.3% 77%,
    rgba(139, 186, 244, 1) 3.4%,
    rgba(15, 51, 92, 1) 56.6%
  );
`;

export const FormLabelContainer = styled.label`
  position: relative;
  padding-top: ${p => p.theme.space[4]}px;
`;

export const Field = styled(FormikField)`
  padding: ${p => p.theme.space[3]}px;
  min-width: 300px;

  font-size: ${p => p.theme.fontSizes.m};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.text};

  &::placeholder {
    opacity: 0;
    transition: opacity ${p => p.theme.transition.main};
  }

  &:focus::placeholder {
    opacity: 1;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.colors.silver};
  }
`;

export const FormLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 22px);

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};

  color: ${p => p.theme.colors.text};

  transition: transform ${p => p.theme.transition.main};

  ${Field}:focus+&,
  ${Field}:not(:placeholder-shown)+& {
    display: block;
    padding: 6px;

    border-radius: ${p => p.theme.radii.normal};
    outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};

    color: ${p => p.theme.colors.white};
    background: #7f7fd5;
    background: linear-gradient(to bottom, #91eae4, #86a8e7, #7f7fd5);

    transform: translate(0px, -30px);
  }
`;

export const AddContactBtn = styled.button`
  display: block;
  width: 190px;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;

  text-transform: uppercase;

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 0 20px ${p => p.theme.colors.accent};

  color: ${p => p.theme.colors.white};
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  background-size: 200% auto;

  cursor: pointer;

  transition: ${p => p.theme.transition.main};

  &:hover {
    background-position: right center;
    color: ${p => p.theme.colors.white};
    text-decoration: none;
  }
`;

export const ErrorMessageCustom = styled.span`
  display: block;

  position: absolute;
  bottom: -25px;
  left: 10px;

  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};

  color: ${p => p.theme.colors.red};
`;
