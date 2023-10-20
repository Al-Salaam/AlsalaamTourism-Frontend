import ActionMessage from ".."
import { CheckCircleFilled } from "@ant-design/icons"
const SuccessfulMessage = () => {
  return (
    <>
    <ActionMessage
    icon={ <CheckCircleFilled style={{ fontSize: "60px", color: "#3B505A" }} />} 
    title='Payment Successful' 
    subTitle='Thank you for your payment; you will receive your E-Ticket Shortly'/>
    </>
  )
}

export default SuccessfulMessage