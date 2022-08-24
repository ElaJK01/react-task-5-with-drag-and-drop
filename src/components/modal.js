import React from "react";
import styled from "styled-components";

const ModalRoot = styled.div`
  position: fixed;
  border-color: lightsteelblue;
  border-style: solid;
  width: 500px;
  height: fit-content;
  top: 50%;
  left: 50%;
  right: 50%;

  margin: -100px 0 0 -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: grey;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.8);
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 80%;
    height: fit-content;
    font-size: 10px;
  }
`;

const ModalButton = styled.button`
  color: grey;
  margin: 5px;
  padding: 2px;
  background: whitesmoke;
  border-style: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 30%;
  color: gray;
  font-size: 10px;
  text-align: center;
  :hover {
    background: white;
    color: black;
  }
`;

const ModalContent = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;

const Modal = ({ message, handleCloseModal }) => (
  <ModalRoot>
    <ModalContent>{message}</ModalContent>
    <ModalButton onClick={handleCloseModal}>close</ModalButton>
  </ModalRoot>
);

export default Modal;
