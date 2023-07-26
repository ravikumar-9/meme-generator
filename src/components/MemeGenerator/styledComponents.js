import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AppContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`

export const FormAndMemeContainer = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`

export const FormContainer = styled.form`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`

export const Heading = styled.h1`
  font-weight: bold;
  font-size: 34px;
  align-self: flex-start;
`
export const InputElement = styled.input`
  width: 90%;
  height: 34px;
  margin-bottom: 4px;
`

export const LabelElement = styled.label`
  font-weight: bold;
  font-size: 15px;
  color: #000000;
  padding: 3px;
`

export const SelectElement = styled.select`
  width: 90%;
  height: 34px;
  margin-bottom: 4px;
`

export const OptionElement = styled.option`
  font-weight: bold;
  font-size: 12px;
`

export const GenerateButton = styled.button`
  height: 30px;
  width: max-content;
  border: none;
  background-color: #0b69ff;
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
`

export const MemeContainer = styled.div`
  height: 240px;
  width: 48%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TextParagraph = styled.p`
  font-size: ${props => props.textSize}px;
  font-weight: bold;
  color: #ffffff;
  font-family: 'roboto';
`
