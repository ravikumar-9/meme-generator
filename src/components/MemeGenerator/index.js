// Write your code here

import {Component} from 'react'

import {
  BgContainer,
  AppContainer,
  FormAndMemeContainer,
  FormContainer,
  Heading,
  InputElement,
  LabelElement,
  SelectElement,
  OptionElement,
  GenerateButton,
  MemeContainer,
  TextParagraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

console.log(fontSizesOptionsList)

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    activeFontSizeOption: fontSizesOptionsList[0].optionId,
    topTextInput: '',
    bottomTextInput: '',
    bgImageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveFontSize = event => {
    this.setState({activeFontSizeOption: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOption,
    } = this.state
    this.setState({
      bgImageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: activeFontSizeOption,
    })
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOption,
      bgImageUrl,
      topText,
      bottomText,
      fontSize,
    } = this.state

    console.log(activeFontSizeOption)

    return (
      <BgContainer>
        <AppContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Image URL"
                id="imageUrl"
                value={imageUrlInput}
                onChange={this.onChangeImageUrl}
              />
              <LabelElement htmlFor="topText">Top Text</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Top Text"
                id="topText"
                value={topTextInput}
                onChange={this.onChangeTopText}
              />
              <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter the Bottom Text"
                id="bottomText"
                value={bottomTextInput}
                onChange={this.onChangeBottomText}
              />
              <LabelElement htmlFor="fontSize">Font Size</LabelElement>
              <SelectElement
                value={activeFontSizeOption}
                onChange={this.onChangeActiveFontSize}
                id="fontSize"
              >
                {fontSizesOptionsList.map(eachOption => (
                  <OptionElement
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </OptionElement>
                ))}
              </SelectElement>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
            <MemeContainer bgImage={bgImageUrl} data-testid="meme">
              <TextParagraph textSize={fontSize}>{topText}</TextParagraph>
              <TextParagraph textSize={fontSize}>{bottomText}</TextParagraph>
            </MemeContainer>
          </FormAndMemeContainer>
        </AppContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
