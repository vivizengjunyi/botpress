import React from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";

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
    return <div style={{color:"blue"}}>{this.props.text && this.props.text.toUpperCase()}</div>
  }
}

export const CustomDatePicker = ({onSendData, text}) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const sendData = () => {
    onSendData({ type: 'text', text: moment(startDate).format('YYYY/MM/DD')})
  }
  return (
  <>
  {text}
  <DatePicker 
    selected={startDate} 
    dateFormat="yyyy/MM/dd"
    onChange={(date) => {
      setStartDate(date)
  }} />
  <button onClick={sendData}>Save</button>
  </>)
}

