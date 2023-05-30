import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 7.5rem;
  padding-bottom: 7.5rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableContainer = styled.div`
  margin: 1rem;
`;

export const Head = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px 0 10px 0;
  margin: 0 2rem 0 2rem;
`;

export const Body = styled.div`
  display: flex;
  gap: 30px;
  padding: 10px 0 10px 0;
  margin: 0 2rem 0 2rem;
`;

export const Row = styled.ul`
  border-radius: 6px;
  display: flex;
  align-items: center;
  list-style: none;
  background-color: rgba(84, 192, 169, 0.5);
  height: 4rem;
  gap: 22rem;
  justify-content: center;
`;

export const Col = styled.li`
  justify-content: center;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 14rem;
  font-size: 1.25rem;
  padding: 0 0.5rem 0 0.5rem;

  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

export const Delete = styled.button`
  border: 0;
  border-radius: 0.6rem;
  height: 4rem;
  min-width: 4rem;
  background: rgba(84, 192, 169, 0.5);
  padding-top: 0.4rem;
  cursor: pointer;
  &:hover {
    background: rgba(84, 192, 169, 0.3);
  }

  img {
    border-radius: 6px;
  }
`;

export const Edit = styled.button`
  border: 0;
  border-radius: 0.6rem;
  height: 4rem;
  min-width: 4rem;
  background: rgba(84, 192, 169, 0.5);
  padding-top: 0.4rem;
  cursor: pointer;
  &:hover {
    background: rgba(84, 192, 169, 0.3);
  }

  img {
    border-radius: 6px;
  }
`;

export const AddUser = styled.button`
  background: rgba(219, 222, 222);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  border: 0;
  padding: 0.75rem 3rem 0.75rem 3rem;
  border-radius: 1rem;
  gap: 2rem;
  cursor: pointer;
  margin: 3rem 0 0 2rem;

  p {
    font-size: 1.35rem;
    font-weight: 500;
  }
`;
