import { useEffect, useState } from 'react'; 
import { Col, Input, Pagination, Row, } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getInquiryForUser } from '../../../redux/actions/inquiryAction';
import { Loader } from '../../common/loader';

const Inbox = () => {

  const dispatch = useDispatch();
  const {loading, inquiries} = useSelector((state) => state.inquiry);
  useEffect(()=> {
    dispatch(getInquiryForUser())
  },[dispatch])
  
  const pageSize = 4; // Number of rows per page

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchValue) => {
    const filteredData = inquiries.filter((row) => {
      const searchData = Object.values(row).join(' ').toLowerCase();
      return searchData.includes(searchValue.toLowerCase());
    });
    setData(filteredData);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = inquiries?.slice(startIndex, endIndex);
  console.log(displayedData)
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}>
          <h1>Inquiry</h1>
        </Col>
      </Row>

      <Row gutter={[16, 16]} xs={24} sm={24} md={24} lg={24} xl={24} style={{ marginBottom: "20px" }}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{ display: "flex", justifyContent: "flex-end", gap: "40px" }}>
          <Input
            placeholder="Search..."
            style={{ width: "200px", height: "40px" }}
            prefix={<SearchOutlined style={{ color: 'gray' }} />}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
      </Row>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#FAFAFA" }}>
              <TableCell>ID#</TableCell>
              <TableCell align="middle" sx={{ padding: 2 }}>Name</TableCell>
              <TableCell align="middle">Package</TableCell>
              <TableCell align="middle">Email</TableCell>
              <TableCell align="middle">Nationality</TableCell>
              <TableCell align="middle">Phone</TableCell>
              <TableCell align="middle">Requirements</TableCell>
              <TableCell align="middle">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {loading ? <Loader/> : (
            <>
        {displayedData?.length === 0 ? <h1>Opps! No data available</h1> : (
          <>
          {displayedData?.map((row, index) => (
              <TableRow key={row?._id}>
                <TableCell sx={{ padding: 2 }}>{row?._id}</TableCell>
                <TableCell align="center">{row?.title} {row?.firstname} {row?.lastname}</TableCell>
                <TableCell align="center">{row?.packages?.heading}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.nationality}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.specialRequirment}</TableCell>
                <TableCell align="middle">
                  <Chip
                    label={row.status}
                    style={{
                      color: row.status === "completed" ? "green" : row.status === "cancelled" ? "red" : "gray",
                      backgroundColor: row.status === "completed" ? "#D5FFCC" : row.status === "cancelled" ? "#FFCCCC" : "#F8F8FF",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
            
            </>
          )}
            
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <div>
          Showing {startIndex + 1} to {endIndex} of {inquiries?.length} entries.
        </div>
        <Pagination
          current={currentPage}
          total={inquiries?.length}
          pageSize={pageSize}
          showSizeChanger={false}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}

export default Inbox;
