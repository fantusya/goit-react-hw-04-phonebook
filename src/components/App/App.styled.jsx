import styled from 'styled-components';

export const PageTitle = styled.h1`
  padding-left: ${p => p.theme.space[5]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.accent};
`;

export const ContactsTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.accent};
`;
