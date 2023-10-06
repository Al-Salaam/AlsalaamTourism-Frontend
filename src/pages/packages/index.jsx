import React, { useState } from 'react';
import { Row, Col, Card, Input, Select, Button, Space, Image, Pagination, Typography } from 'antd';
import {
  SearchOutlined,
  HeartOutlined,
  HeartFilled,
  StarOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
const { Option } = Select;

const data = [
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 3.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 2.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights raoof',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 3.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights react',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 1.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1 front',
    category: 'Couple',
    rating: 3.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights raoof',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights react',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1 front',
    category: 'Couple',
    rating: 3.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 1.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 2.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 4.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights raoof',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 3.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights react',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1',
    category: 'Couple',
    rating: 1.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },
  {
    id: 1,
    title: 'packag 1 hello',
    description: 'Description for packag 1 front',
    category: 'Single',
    rating: 2.5,
    totalRating: 100,
    imageUrl: 'packag1.jpg',
    totalTime: '7 days 6 nights',
    favorite: false,
  },

];

const Ourpackags = () => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { Title } = Typography;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
  };

  const handleRatingChange = (value) => {
    setRatingFilter(value);
  };

  const toggleFavorite = (packagId) => {
    const updatedData = data.map((packagItem) => {
      if (packagItem.id === packagId) {
        return { ...packagItem, favorite: !packagItem.favorite };
      }
      return packagItem;
    });
    // Replace the data array with the updated data
    // Implement your logic to update state or API here
    console.log(updatedData);
  };

  // Calculate filteredData here, before using it
  const filteredData = data
    .filter((packag) =>
      categoryFilter === 'All' ? true : packag.category === categoryFilter
    )
    .filter((packag) => {
      const searchQuery = search.trim().toLowerCase();
      return (
        searchQuery === '' ||
        packag.title.toLowerCase().includes(searchQuery) ||
        packag.description.toLowerCase().includes(searchQuery) ||
        packag.totalTime.toLowerCase().includes(searchQuery)
        // Add more fields to search if necessary
      );
    })
    .sort((a, b) => (ratingFilter === 'asc' ? a.rating - b.rating : b.rating - a.rating));

  // Calculate currentData based on filteredData and currentPage
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  // styling

  const styles = {
    width: {

      width: "40%",
      outline: "none"
    },

    filterFlex: {

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",

    },
    borders: {
      border: "none"
    }
  }
  return (
    <div>
      <Row gutter={[16, 16]} justif="center"><Col span={24} align="middle"> <Title level={2}>Our Packages</Title> <Title level={5}>We offer some of the most competitive, pocket-friendly prices around, while also delivering without compromising on our quality standards.</Title></Col> </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Input
            placeholder="Search packags"
            prefix={<SearchOutlined />}
            value={search}
            onChange={handleSearchChange}
            style={styles.width}
          />
        </Col>


        <Col span={12} align="end" style={styles.filterFlex}>
         
          
          <Select
            defaultValue="Raoof"
            bordered={false}
            value={categoryFilter}
            style={{
              width: 120,
              borderBottom: "1px solid black",
              color: "black"
            }}
            onChange={handleCategoryChange}
            options={[
              {
                value: "All",
                label: "Categories"
              },
              {
                value: "Couple",
                label: "Couple"
              },
              {
                value: "Single",
                label: "Single"
              },
             
            ]}
          />
         
          
          <Select
            defaultValue="Order"
            bordered={false}
            value={ratingFilter}
            style={{
              width: 120,
              borderBottom: "1px solid black",
              color: "black"
            }}
            onChange={handleRatingChange}
            options={[
              {
                value: "asc",
                label: "Ascending"
              },
              {
                value: "desc",
                label: "Descending"
              },
             
             
            ]}
          />
        </Col>

      </Row>
      <div style={{ marginBottom: '16px', textAlign: 'center' }}>
        Displaying {startIndex + 1}-{Math.min(endIndex, filteredData.length)} of {filteredData.length} packages
      </div>
      <Row gutter={[16, 16]}>
        {currentData.map((packag) => (
          <Col key={packag.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              cover={
                <Image
                  alt={packag.title}
                  src={packag.imageUrl}
                  preview={{
                    mask: (
                      <div className="image-overlay">
                        <Space>
                          {packag.favorite ? (
                            <HeartFilled
                              onClick={() => toggleFavorite(packag.id)}
                              className="favorite-icon red"
                            />
                          ) : (
                            <HeartOutlined
                              onClick={() => toggleFavorite(packag.id)}
                              className="favorite-icon"
                            />
                          )}
                          <span>{packag.totalRating}</span>
                        </Space>
                      </div>
                    ),
                  }}
                />
              }
            >
              <Meta
                title={packag.title}
                description={packag.description}
              />
              <p>Total Time: {packag.totalTime}</p>
              <Space>
                <StarOutlined /> {packag.rating}
              </Space>
              <br />
              <Button type="primary">View Details</Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination
        current={currentPage}
        total={filteredData.length}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Ourpackags;
