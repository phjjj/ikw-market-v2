import { NavLink } from "react-router-dom";
import styled from "styled-components";

type ItemType = {
  body: string;
  to: string;
};

function Item({ body, to }: ItemType) {
  return (
    <Li>
      <NavLink to={to}>{body}</NavLink>
    </Li>
  );
}

const Li = styled.li`
  margin-right: 2.8rem;
`;

export default Item;
