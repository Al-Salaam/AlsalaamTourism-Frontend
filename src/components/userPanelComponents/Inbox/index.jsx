import {  Checkbox, Col, Input, Row, Select, Typography} from "antd"
import { SearchOutlined,ReloadOutlined,InboxOutlined,DeleteOutlined,StarFilled } from '@ant-design/icons';
const Inbox = () => {

    const iconStyle = {
        fontSize: '20px',
        color: '#696969',
        padding: '5px', // Add padding here
      };
      const rowStyle = {
        marginTop: '30px',
        borderBottom:"1px solid #D9D9D9",
        padding:"15px"
      };
    
      const columnStyle = {
        display: 'flex',
        alignItems: 'center',
      };
      const data = [
        {
          id: 1,
          isChecked: true,
          isStarred: false,
          name: 'Alsalaam',
          message: 'Successfully booked your Tour.......',
        },
        {
            id: 1,
            isChecked: true,
            isStarred: false,
            name: 'Alsalaam',
            message: 'Successfully booked your Tour.......',
          },
          {
            id: 1,
            isChecked: true,
            isStarred: false,
            name: 'Alsalaam',
            message: 'Successfully booked your Tour.......',
          },
        // Add more data objects here
      ];
  return (
   <>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
          <h1>Inbox</h1>
        </Col>
      </Row>
      <Row gutter={[16, 16]}xs={24} sm={24} md={24} lg={24} xl={24}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }}>
        <Input
      placeholder="Search..."
      style={{ width: "200px", height: "40px" }} 
      prefix={<SearchOutlined style={{ color: 'gray' }} />}
    /> 
        </Col>
      </Row>

      <Row  gutter={10} xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop:"20px"}}>
        <Col xs={24} sm={24} md={6} lg={4} xl={2} style={{ display: "flex", justifyContent: "flex-start", gap: "40px" }}>
        <Select
            name="cars"
            style={{ width: "100px", height: "40px", borderRadius: "10px" }}
            defaultValue="All"
          >
            <Select.Option value="All">All</Select.Option>
            <Select.Option value="Tour">Tour</Select.Option>
          </Select>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Row style={{ backgroundColor: 'white', borderRadius: '4px' }}>
      <Col style={{ border:  '1px solid #E0E0E0' }} xs={6} sm={4} md={4} lg={4} xl={2} >
        <ReloadOutlined style={iconStyle} />
      </Col >
      <Col  style={{ border:  '1px solid #E0E0E0' }} xs={6} sm={4} md={4} lg={4} xl={2} >
        <InboxOutlined style={iconStyle} />
      </Col>
      <Col style={{ border:  '1px solid #E0E0E0' }} xs={6} sm={4} md={4} lg={4} xl={2}  >
        <DeleteOutlined style={iconStyle}/>
      </Col>
    </Row>
        </Col>
      </Row>
      {data.map((item) => (
        <Row gutter={[10, 10]} xs={24} sm={24} md={24} lg={24} xl={24} style={rowStyle} align="middle" key={item.id}>
          <Col xs={3} sm={2} md={1} lg={1} xl={1} style={columnStyle}>
            <Typography>{item.id}</Typography>
          </Col>
          <Col xs={3} sm={2} md={1} lg={1} xl={1} style={columnStyle}>
            <Checkbox checked={item.isChecked} />
          </Col>
          <Col xs={3} sm={2} md={1} lg={2} xl={1} style={columnStyle}>
            <StarFilled style={{ color:'#69696947'}} />
          </Col>
          <Col xs={12} sm={3} md={6} lg={4} xl={6} style={columnStyle}>
            <Typography>{item.name}</Typography>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} style={columnStyle}>
            <Typography>{item.message}</Typography>
          </Col>
        </Row>
      ))}
   </>
  )
}

export default Inbox