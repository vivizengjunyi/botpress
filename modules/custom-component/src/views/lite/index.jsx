import React from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";
// import * as Keyboard from '../../../../channel-web/src/views/lite/components/Keyboard'

import "react-datepicker/dist/react-datepicker.css";

// This component will display a drop down menu with a button, and will show something else when the conversation continues
export { DropdownMenu } from './components/DropdownMenu'

// Display a basic login form
export { LoginForm } from './components/LoginForm'

// This is an example on how to replace the webchat composer (the typing zone)
export { Composer } from './components/Composer'

export { DisappearingText, FeedbackButtons, UpperCase, ColorText } from './components/Advanced'

export class InjectedBelow extends React.Component {
  render() {
    // Return null if you just want to interact with the chat.
    return null

    // Or you can add special content like:
    // return (
    //   <div style={{ align: 'center' }}>
    //     <small>Injected below chat</small>
    //   </div>
    // )
  }
}

export class UpperCasedText extends React.Component {
  render() {
    return <div style={{ color: "blue" }}>{this.props.text && this.props.text.toUpperCase()}</div>
  }
}

export const CustomDatePicker = (props) => {
  const Keyboard = props.keyboard;
  const shouldDisplay = props.isLastGroup && props.isLastOfGroup
  const [startDate, setStartDate] = React.useState(new Date());
  const sendData = () => {
    props.onSendData({ type: 'text', text: moment(startDate).format('YYYY/MM/DD') })
  }
  console.log('Keyboard.Default.isReady():' + Keyboard.Default.isReady())
  if (props.displayInKeyboard && Keyboard.Default.isReady()) {
    return (
      <Keyboard.Prepend keyboard={<>
        <DatePicker
          selected={startDate}
          dateFormat="yyyy/MM/dd"
          onChange={(date) => {
            setStartDate(date)
          }} />
        <button onClick={sendData}>Save</button>
      </>} visible={shouldDisplay}>
        {props.text}
      </Keyboard.Prepend>
    )
  }
  return (
    <>
      {props.text}
    </>
  )
}

