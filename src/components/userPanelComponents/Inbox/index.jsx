import { useState } from 'react'; 
import { Col, Input, Pagination, Row, } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

const Inbox = () => {
  const initialData = [
    { title: "Mr.", firstName: "John", lastName: "Doe", email: "johndoe@example.com", nationality: "USA", phoneNumber: "+1 (555) 123-4567", specialRequirements: "None", status: "Completed" },
    { title: "Ms.", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", nationality: "Canada", phoneNumber: "+1 (123) 456-7890", specialRequirements: "Vegetarian", status: "Pending" },
    { title: "Dr.", firstName: "David", lastName: "Johnson", email: "davidjohnson@example.com", nationality: "UK", phoneNumber: "+44 20 1234 5678", specialRequirements: "Wheelchair access", status: "Cancelled" },
    { title: "Mr.", firstName: "John", lastName: "Doe", email: "johndoe@example.com", nationality: "USA", phoneNumber: "+1 (555) 123-4567", specialRequirements: "None", status: "Completed" },
    { title: "Ms.", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", nationality: "Canada", phoneNumber: "+1 (123) 456-7890", specialRequirements: "Vegetarian", status: "Pending" },
    { title: "Dr.", firstName: "David", lastName: "Johnson", email: "davidjohnson@example.com", nationality: "UK", phoneNumber: "+44 20 1234 5678", specialRequirements: "Wheelchair access", status: "Cancelled" },
    { title: "Mr.", firstName: "John", lastName: "Doe", email: "johndoe@example.com", nationality: "USA", phoneNumber: "+1 (555) 123-4567", specialRequirements: "None", status: "Completed" },
    { title: "Ms.", firstName: "Jane", lastName: "Smith", email: "janesmith@example.com", nationality: "Canada", phoneNumber: "+1 (123) 456-7890", specialRequirements: "Vegetarian", status: "Pending" },
    { title: "Dr.", firstName: "David", lastName: "Johnson", email: "davidjohnson@example.com", nationality: "UK", phoneNumber: "+44 20 1234 5678", specialRequirements: "Wheelchair access", status: "Cancelled" },
    
  ];

  const [data, setData] = useState(initialData);
  const pageSize = 4; // Number of rows per page

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchValue) => {
    const filteredData = initialData.filter((row) => {
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
  const displayedData = data.slice(startIndex, endIndex);

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
              <TableCell>Title</TableCell>
              <TableCell align="middle" sx={{ padding: 2 }}>First Name</TableCell>
              <TableCell align="middle">Last Name</TableCell>
              <TableCell align="middle">Email</TableCell>
              <TableCell align="middle">Nationality</TableCell>
              <TableCell align="middle">Phone Number</TableCell>
              <TableCell align="middle">Special Requirements</TableCell>
              <TableCell align="middle">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ padding: 2 }}>{row.title}</TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.nationality}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.specialRequirements}</TableCell>
                <TableCell align="middle">
                  <Chip
                    label={row.status}
                    style={{
                      color: row.status === "Completed" ? "green" : row.status === "Cancelled" ? "red" : "gray",
                      backgroundColor: row.status === "Completed" ? "#D5FFCC" : row.status === "Cancelled" ? "#FFCCCC" : "#F8F8FF",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
        <div>
          Showing {startIndex + 1} to {endIndex} of {data.length} entries.
        </div>
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          showSizeChanger={false}
          onChange={onPageChange}
        />
      </div>
    </>
  );
}

export default Inbox;
