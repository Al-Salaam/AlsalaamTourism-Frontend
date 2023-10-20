import {  MailFilled } from "@ant-design/icons"
import ActionMessage from ".."


const ThanksMessage = () => {
  return (
    <>
    <ActionMessage
    icon={ <MailFilled style={{ fontSize: "50px", color: "#3B505A" }} />} 
    title='Thank you for your inquiry' 
    subTitle='We will get back to you with the best quotation within 48 Hours'/>
    </>
    
  )
}

export default ThanksMessage