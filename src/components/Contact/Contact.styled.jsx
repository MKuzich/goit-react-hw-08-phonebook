import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
`;

export const Text = styled.span`
  margin-right: ${p => p.theme.space[5]}px;
`;
