import styled from 'styled-components';
// import buttonStyles from '../styles/button';
// import imgStyle from '../bootstrap/blog/js/bootstrap';


// const CenteredDiv = styled.div`
//   display: block;
//   margin: 0 auto;
// 	text-align: center;
//   border-bottom: 2px solid ${props => props.theme.primaryButtonLightColor};
// `;

const CenteredDiv = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;

  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
`;

export default CenteredDiv;


// credit to http://cssdeck.com/labs/beautiful-flat-buttons
// const PrimaryButton = styled.div`
// 	${buttonStyles}
// 	background: ${props => props.theme.primaryButtonColor};
// 	border-bottom: 2px solid ${props => props.theme.primaryButtonLightColor};
// 	-webkit-box-shadow: inset 0 -2px ${props => props.theme.primaryButtonLightColor};
// 	box-shadow: inset 0 -2px ${props => props.theme.primaryButtonLightColor};
// `;
//
// export default PrimaryButton;
