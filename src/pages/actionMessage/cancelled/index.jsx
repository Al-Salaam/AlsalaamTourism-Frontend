import  { CloseCircleFilled }  from "@ant-design/icons"
import ActionMessage from ".."

const CancelledMessage = () => {
  return (
    <>

 
    <ActionMessage
    icon={ <CloseCircleFilled style={{ fontSize: "45px", color: "#3B505A" }} />} 
    title='Booking Cancelled' 
    subTitle='Your booking has been cancelled and we will send you a confirmation email shortly.'/>
    </>
   
  )
}

export default CancelledMessage