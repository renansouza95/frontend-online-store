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

const Main = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  max-width:100vw;
  max-height:100vh;
  padding: 10px;
`;

const SectionForm = styled.section`
align-content: center;
border-bottom: 2px groove rgb(46, 46, 46);
border-radius: 10px;
box-shadow: 0 0 5px rgb(46, 46, 46);
display: flex;
flex-flow: row warp;
justify-content: center;
margin-bottom: 20px;
`;

const FormCheck = styled.form`
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionPayment = styled.section`
border-bottom: 2px groove rgb(46, 46, 46);
border-radius: 10px;
box-shadow: 0 0 5px rgb(46, 46, 46);
width: 80vw;
height: 20vh;
margin-bottom: 20px;
padding: 10px;
`;

const SectionReview = styled.section`
  border-bottom: 2px groove rgb(46, 46, 46);
  border-radius: 8px;
  box-shadow: 0 0 5px rgb(46, 46, 46);
  width: 80vw;
  height: 35vh;
  margin: 20px 0;
  overflow: auto;
`;

const ButtonBuy = styled.input`
  background-color: rgb(46, 46, 46);
  border-radius: 8px;
  color: whitesmoke;
  font-weight: 700;
  text-transform: uppercase;
  width: 15vw;
  height: 10vh;
  letter-spacing: 3px;
  :hover{
    color: rgb(46, 46, 46);
    background-color: whitesmoke;
  }
`;

const HeaderReview = styled.h3`
  position: sticky;
  top: 0;
  background: rgba(46, 46, 46, 0.98);
  color: whitesmoke;
  margin: 0;
  width: 100%;
  height: 40px;
  z-index: 1;
  padding: 5px 10px 15px 10px;
`;

const PurchaseTotal = styled.p`
  position: absolute;
  top: 115px;
  right: 170px;
  font-weight: 900;
  letter-spacing: 1px;
  user-select: none;
  z-index: 1;
  color: whitesmoke;
`;

const ContainerProduct = styled.div`
  display: flex;
  flex-flow: column warp;
  width: 70vw;
  height: 10vh;
`;

const Logo = styled.img`
  width: 40px;
  margin-top: -15px;
`;

const SearchInput = styled.input`
  width: 45vw;
  border: 1px solid #bbb;
  border-radius: 0.5rem;
  margin: 0 1rem;
  padding: 0.5rem 0.6rem;
  :focus {
  box-shadow: rgba(15, 23, 90, 0.09) 0 2px 5px;
  outline: none;
}
`;

const MainHeader = styled.h1`
  font-size: 42px;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export {
  ItemName,
  LiStyled,
  BtnFinish,
  LiStyledReview,
  Main,
  SectionForm,
  FormCheck,
  SectionPayment,
  SectionReview,
  ButtonBuy,
  HeaderReview,
  PurchaseTotal,
  ContainerProduct,
  Logo,
  SearchInput,
  MainHeader,
  LinkStyle,
};
