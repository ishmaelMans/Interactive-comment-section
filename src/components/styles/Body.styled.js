import styled from "styled-components";
const Main = styled.main`
  background-color: ${({ theme }) => theme.color.lightGray};
`;

const Container = styled.div`
  font-family: "Rubik";
  margin: 0 auto;
  width: 50%;
  min-height: 700px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  align-items: flex-start;
`;

const CommentSection = styled.section`
  display: flex;
  align-items: flex-start;
  min-height: 100px;
  padding: 20px;
  margin-bottom: 10px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  overflow: hidden;
  }
`;
const SubCommentContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  min-height: 100px;
  width: 80%;
  padding: 20px;
  margin-bottom: 10px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  overflow: hidden;
  }
`;
const SubComment = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  }
`;

const CommentContainer = styled.section`
  display: flex;
  align-item: center;
  flex-direction: column;
  width: 100%;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReplyRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;

  svg {
    margin-right: 5px;
  }

  &:hover {
    transition: 300ms;
    cursor: pointer;
    opacity: 0.6;
  }
`;

const Reply = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.color.moderateBlue};
  position: relative;
`;

const Button = styled.div`
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.color.VerylightGray};
  width: 25px;
  height: 90px;
  border-radius: 5px;

  svg path:hover {
    fill: ${({ theme }) => theme.color.darkBlue};
    cursor: pointer;
  }

  p {
    font-size: 13px;
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const Profile = styled.div`
  wifth: 100%;
  height: 30px;
  display: flex;
  justfy-content: center;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin-left: 150px;
  }

  img {
  display: block
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    margin-right: 10px;
  } 

  h4 {
    background-color: ${({ theme }) => theme.color.moderateBlue};
    margin-right: 10px;
    color: #fff;
    font-size: 14px;
    padding: 1px 2px;
    font-weight: 400;
  }

  p{
  color: ${({ theme }) => theme.color.grayishBlue};
  }
  `;

const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 7px;
  // width: 200px;
`;
const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  svg {
    padding-top: 3px;
  }

  p {
    padding-left: 8px;
    color: ${({ theme }) => theme.color.softRed};
  }
`;
const UpdateButton = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  svg {
    padding-top: 3px;
  }

  p {
    padding-left: 8px;
    color: ${({ theme }) => theme.color.moderateBlue};
  }
`;

const TextArea = styled.div`
  min-height: 10px;
  p {
    line-height: 1.5;
    color: ${({ theme }) => theme.color.grayishBlue};
  }
`;

const Response = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px 0;
  width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.color.white};

  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    margin-left: 15px;
  }
  textarea {
    font-family: "Rubik";
    width: 70%;
    min-height: 50px;
    padding: 10px 15px;
    border-radius: 10px;
    margin-right: 15px;
    outline: none;

    &::selection {
      background-color: yellow;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.moderateBlue};
    }
  }

  button {
    padding: 10px;
    margin-right: 20px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    background-color: ${({ theme }) => theme.color.moderateBlue};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      cursor: pointer;
    }
  }
`;
const SubResponse = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 20px 0;
  width: 85.5%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.color.white};

  img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
    margin-left: 15px;
  }
  textarea {
    font-family: "Rubik";
    width: 70%;
    min-height: 50px;
    padding: 10px 15px;
    border-radius: 10px;
    margin-right: 15px;
    outline: none;

    &::selection {
      background-color: yellow;
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.color.moderateBlue};
    }
  }

  button {
    padding: 10px;
    margin-right: 20px;
    width: 90px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    background-color: ${({ theme }) => theme.color.moderateBlue};
    color: ${({ theme }) => theme.color.white};

    &:hover {
      cursor: pointer;
    }
  }
`;

export {
  Main,
  Container,
  CommentSection,
  Top,
  Reply,
  Button,
  Profile,
  EditButton,
  DeleteButton,
  UpdateButton,
  CommentContainer,
  SubComment,
  SubResponse,
  SubCommentContainer,
  TextArea,
  Response,
  ReplyRight,
};
