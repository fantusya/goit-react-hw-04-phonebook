import styled from 'styled-components';

export const ContactListTable = styled.table`
  text-align: center;

  border-collapse: separate;
  border-spacing: ${p => p.theme.space[1]}px;
`;

export const ContactListThead = styled.thead`
  background-color: ${p => p.theme.colors.tableHead};

  th {
    padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
    width: 320px;
  }
`;

export const ContactListTbody = styled.tbody`
  td {
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;

    font-size: ${p => p.theme.fontSizes.m};
    font-family: ${p => p.theme.fonts.body};
    line-height: ${p => p.theme.lineHeights.body};

    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.tableBody};
  }

  td:nth-of-type(3n + 3) {
    background-color: ${p => p.theme.colors.transparent};
  }
`;

export const DeleteBtn = styled.button`
  background-color: ${p => p.theme.colors.transparent};

  outline: none;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.transparent};

  cursor: pointer;

  &:hover {
    animation: shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  }

  @keyframes shake-bottom {
    0%,
    100% {
      transform: rotate(0deg);
      transform-origin: 50% 100%;
    }
    10% {
      transform: rotate(2deg);
    }
    20%,
    40%,
    60% {
      transform: rotate(-4deg);
    }
    30%,
    50%,
    70% {
      transform: rotate(4deg);
    }
    80% {
      transform: rotate(-2deg);
    }
    90% {
      transform: rotate(2deg);
    }
  }
`;
