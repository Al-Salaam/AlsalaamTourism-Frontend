import { Button, Table, Tag, Col, Row, Select, Pagination } from "antd";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBookingDetailsForUsers } from "../../../redux/actions/bookingAction";


const { Option } = Select;

const dataSource = [
  { key: '1', bookingId: 'Ahmad ', date: 'malik89@gmail.com ', categories:'Activity', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card',   statuss: "Completed", action: "view" },
  { key: '1', bookingId: 'Ahmad Malik', date: 'malik89@gmail.com ', categories:'Tour', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card',  statuss: "Cancelled", action: "view" },
  { key: '1', bookingId: 'Ahmad Malik', date: 'malik89@gmail.com ', categories:'Activity', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card',  statuss: "Completed", action: "view" },
  { key: '1', bookingId: 'Ahmad Malik', date: 'malik89@gmail.com ', categories:'Tour', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card',  statuss: "Completed", action: "view" },
  { key: '1', bookingId: 'Ahmad Malik', date: 'malik89@gmail.com ', categories:'Activity', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card', statuss: "Completed", action: "view" },
  { key: '1', bookingId: 'Ahmad Malik', date: 'malik89@gmail.com ', categories:'Tour', passengers:'25', amount:'50.00 AED',    paymentMode:'Credit card', statuss: "Cancelled", action: "view" },
];

const itemsPerPage = 4;

const tagStyles = {
  borderRadius: '20px',
  padding: '7px 27px',
};

const actionTextStyle = {
  color: '#643DB4',
  verticalAlign: 'middle',
};

const columns = [
  { title: '#', dataIndex: 'key', key: 'key', align: 'center', width: 50 },
  { title: 'Booking Id', dataIndex: 'bookingId', key: 'bookingId', align: 'center', width: 120 },
  { title: 'Date', dataIndex: 'date', key: 'date', align: 'center', width: 100 },
  { title: 'Categories', dataIndex: 'categories', key: 'categories', align: 'center', width: 100 },
  { title: 'No. of Passengers', dataIndex: 'passengers', key: 'passengers', align: 'center', width: 130 },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', align: 'center', render: (text) => <span style={{ color: "#6774E3" }}>{text}</span>, width: 100 },
  { title: 'Payment Mode', dataIndex: 'paymentMode', key: 'paymentMode', align: 'center', width: 120 },
  {
    title: 'Status',
    dataIndex: 'statuss',
    key: 'statuss',
    align: 'center',
    render: (a) => <Tag color={a === "Completed" ? "green" : "red"} style={tagStyles}>{a}</Tag>,
    width: 120,
  },
  // {
  //   title: 'Action',
  //   dataIndex: 'action',
  //   key: 'action',
  //   align: 'center',
  //   render: (action) => (
  //     <Link to={`/`}>
  //       <span style={actionTextStyle}>{action} <ArrowRightOutlined /></span>
  //     </Link>
  //   ),
  //   width: 80,
  // },
];

const BookingHistory = () => {


  const dispatach = useDispatch()
  const {loading, data} = useSelector((state) => state.booking);
  useEffect(()=> {
    dispatach(getBookingDetailsForUsers())
 },[dispatach])

//  console.log(data?.bookings[0]?.activity.name,"");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterRole, setFilterRole] = useState('All');
  
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = dataSource
    .filter((item) =>
      (filterStatus === 'All' || item.statuss === filterStatus) &&
      (filterRole === 'All' || (filterRole === 'Tour' && item.categories === 'Tour') || (filterRole === 'Activity' && item.categories === 'Activity')) &&
      (item.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.statuss.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categories.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .slice(startIndex, endIndex);

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row xs={24} md={24} sm={24} lg={24} xl={24}>
          <Col xs={24} md={24} sm={24} lg={12} xl={12} style={{marginBottom:"40px"}}>
            <h1>Booking History</h1>
          </Col>
          <Col xs={24} md={24} sm={24} lg={12} xl={12}>
            <Row style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button size="large" style={{ background: '#018D97', color: 'white' }}>
                Download Invoice
              </Button>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'flex-end', gap: "10px" }} gutter={30}>
              <Select
                style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                onChange={(value) => setFilterRole(value)}
                value={filterRole}
                placeholder="Category"
              >
                <Option value="All">All</Option>
                <Option value="Activity">Activity</Option>
                <Option value="Tour">Tour</Option>
              </Select>
              <Select
                style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                onChange={(value) => setFilterStatus(value)}
                value={filterStatus}
                placeholder="Status"
              >
                <Option value="All">All</Option>
                <Option value="Completed">Completed</Option>
                <Option value="Cancelled">Cancelled</Option>
              </Select>
            </Row>
          </Col>
        </Row>

        <div style={{ overflowX: 'auto' }}>
          <Table dataSource={visibleData} columns={columns} responsive pagination={false} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div>
            Showing {startIndex + 1} to {Math.min(endIndex, dataSource.length)} of {dataSource.length} entries.
          </div>
          <Pagination
            current={currentPage}
            total={dataSource.length}
            pageSize={itemsPerPage}
            onChange={onPageChange}
            position={['bottomRight']}
          />
        </div>
      </Col>
    </Row>
  );
};

export default BookingHistory;
