import styled from 'styled-components';

const ItemName = styled.p`
  font-size:12px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const LiStyled = styled.li`
  align-items: center;
  display: grid;
  grid-template-columns: 5% 10% 45% 13% 13%;
  background-color: white;
  border: 1px groove white;
  box-shadow: 0  5px 10px rgba(194 , 192, 192, 0.9);
  border-radius: 10px;
  list-style: none;
  justify-content: space-between;
  margin: 10px 10px 20px 0;
  padding: 20px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  user-select: none;
  width: 46vw;

  img{
    width: 60px;
    margin: 0;
    padding: 0;
  }

  :hover{
    transform: scale(.99);
    cursor: pointer;
  }
`;

const LiStyledReview = styled.li`
  align-items: center;
  display: grid;
  grid-template-columns: 20% 40% 15% 25%;
  background-color: white;
  border: 1px groove white;
  box-shadow: 0  5px 10px rgba(194 , 192, 192, 0.9);
  border-radius: 10px;
  list-style: none;
  justify-content: space-between;
  margin: 10px 10px 20px 0;
  padding: 20px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  user-select: none;
  width: 25vw;

  img{
    width: 60px;
    margin: 0;
    padding: 0;
  }

  :hover{
    transform: scale(.99);
    cursor: pointer;
  }
`;

const BtnFinish = styled.input`
  position: sticky;
  bottom: 10px;
  left: 40vw;
  border-radius: 10px;
  background-color:rgb(46,46,46);
  color: white;
  width: 15vw;
  height: 8vh;
  text-transform: uppercase;
  font-weight: 700;
  box-shadow: 0 0 0 0 rgba(red, .5);
  transition: pulse 1.5s infinite;

  :hover{
    background-color:whitesmoke;
    color: rgb(46, 46, 46) ;
  }

`;

export { ItemName, LiStyled, BtnFinish, LiStyledReview };
