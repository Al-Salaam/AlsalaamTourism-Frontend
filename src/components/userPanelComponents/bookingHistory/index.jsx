import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Chip } from '@mui/material';
import { Button, Col, Pagination, Row, Select } from 'antd';
import { Option } from 'rc-select';

function createData(id, bookingId, date, category, passenger, amount, paymentMode, status) {
  return { id, bookingId, date, category, passenger, amount, paymentMode, status };
}

const rows = [
  createData(1, 'Ahmed', '17/10/23', 'Activity', 25, '50 AED', 'Credit Card', 'Completed'),
  createData(2, 'John', '18/10/23', 'Tour', 30, '60 AED', 'PayPal', 'Cancelled'),
  createData(3, 'Sam', '19/10/23', 'Tour', 28, '55 AED', 'Credit Card', 'Completed'),
  // Add more data here...
];

export default function DenseTable() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleCategoryChange = (value) => {
    setFilterCategory(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  const filteredRows = rows.filter((row) => {
    const isCategoryMatch = filterCategory === 'All' || row.category === filterCategory;
    const isStatusMatch = filterStatus === 'All' || row.status === filterStatus;
    return isCategoryMatch && isStatusMatch;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredRows.length);
  const currentRows = filteredRows.slice(startIndex, endIndex);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Row xs={24} md={24} sm={24} lg={24} xl={24}>
          <Col xs={24} md={24} sm={24} lg={12} xl={12} style={{ marginBottom: "40px" }}>
            <h1>Booking History</h1>
          </Col>
          <Col xs={24} md={24} sm={24} lg={12} xl={12}>
            <Row style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button size="large" style={{ background: '#018D97', color: 'white' }}>
                Download Invoice
              </Button>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'flex-end', gap: "10px" }} gutter={30}>
              <Col>
                <Select
                  style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                  onChange={handleCategoryChange}
                  value={filterCategory}
                  placeholder="Category"
                >
                  <Option value="All">All</Option>
                  <Option value="Activity">Activity</Option>
                  <Option value="Tour">Tour</Option>
                </Select>
              </Col>
              <Col>
                <Select
                  style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                  onChange={handleStatusChange}
                  value={filterStatus}
                  placeholder="Status"
                >
                  <Option value="All">All</Option>
                  <Option value="Completed">Completed</Option>
                  <Option value="Cancelled">Cancelled</Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                <TableCell>#</TableCell>
                <TableCell align="middle" sx={{ padding: 2 }}>Booking ID</TableCell>
                <TableCell align="middle">Date</TableCell>
                <TableCell align="middle">Categories</TableCell>
                <TableCell align="middle">Passengers</TableCell>
                <TableCell align="middle">Amount</TableCell>
                <TableCell align="middle">Payment Mode</TableCell>
                <TableCell align="middle">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell align="middle">{row.bookingId}</TableCell>
                  <TableCell align="middle">{row.date}</TableCell>
                  <TableCell align="middle" sx={{ padding: 4 }}>{row.category}</TableCell>
                  <TableCell align="middle">{row.passenger}</TableCell>
                  <TableCell align="middle" sx={{ color: "blue" }}>{row.amount}</TableCell>
                  <TableCell align="middle">{row.paymentMode}</TableCell>
                  <TableCell align="middle">
                    <Chip label={row.status} style={{ color: row.status === "Completed" ? "green" : "red",
                      backgroundColor: row.status === "Completed" ? "#D5FFCC" : "#FFCCCC" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
          <div>
            Showing {startIndex + 1} to {endIndex} of {filteredRows.length} entries.
          </div>
          <Pagination
            current={currentPage}
            total={filteredRows.length}
            pageSize={itemsPerPage}
            onChange={onPageChange}
            position={['bottomRight']}
          />
        </div>
      </Col>
    </Row>
  );
}
