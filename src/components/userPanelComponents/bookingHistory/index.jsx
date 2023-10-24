import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getBookingDetailsForUsers } from '../../../redux/actions/bookingAction';
import { Loader } from '../../common/loader';

export default function DenseTable() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const dispatch = useDispatch();
  const { loading, bookings } = useSelector((state) => state.booking);
  
  useEffect(() => {
    dispatch(getBookingDetailsForUsers());
  }, []);

  const handleCategoryChange = (value) => {
    setFilterCategory(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value) => {
    setFilterStatus(value);
    setCurrentPage(1);
  };

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const filteredRows = bookings && bookings.filter((row) => {
    const isCategoryMatch = filterCategory === 'All' || row.activity.itemType === filterCategory;
    const isStatusMatch = filterStatus === 'All' || row.paymentStatus === filterStatus; // Corrected this line
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

            <Row style={{ display: 'flex', justifyContent: 'flex-end', gap: "10px" }} gutter={30}>
              <Col>
                <Select
                  style={{ width: '200px', height: '40px', borderRadius: '10px' }}
                  onChange={handleCategoryChange}
                  value={filterCategory}
                  placeholder="Category"
                >
                  <Option value="All">All</Option>
                  <Option value="activity">Activity</Option>
                  <Option value="tour">Tour</Option>
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
                  <Option value="completed">Completed</Option>
                  <Option value="pending">Cancelled</Option>
                </Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
                <TableCell>Booking ID#</TableCell>
                <TableCell align="middle" sx={{ padding: 2 }}>Date</TableCell>
                <TableCell align="middle">Activity Name</TableCell>
                <TableCell align="middle">User</TableCell>
                <TableCell align="middle">Categories</TableCell>
                <TableCell align="middle">Adults</TableCell>
                <TableCell align="middle">Children</TableCell>
                <TableCell align="middle">Infants</TableCell>
                <TableCell align="middle">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? <Loader /> : (
                <>
                  {currentRows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell scope="row">
                        {row._id}
                      </TableCell>
                      <TableCell align="middle">{formatDate(row.date)}</TableCell>
                      <TableCell align="middle">{row.activity.name}</TableCell>
                      <TableCell align="middle">{row.user.name}</TableCell>
                      <TableCell align="middle" sx={{ padding: 4 }}>{row.activity.itemType}</TableCell>
                      <TableCell align="middle">{row.adults}</TableCell>
                      <TableCell align="middle" sx={{ color: "blue" }}>{row.children}</TableCell>
                      <TableCell align="middle">{row.infants}</TableCell>
                      <TableCell align="middle">
                        <Chip label={row.paymentStatus} style={{ color: row.paymentStatus === "completed" ? "green" : "white",
                          backgroundColor: row.paymentStatus === "completed" ? "#D5FFCC" : "#FFD700" }} />
                      </TableCell>
                    </TableRow>
              ))}
                </>
              )}
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
