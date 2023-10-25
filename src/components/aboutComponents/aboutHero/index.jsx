
import { Row, Col } from 'antd';
import PrimaryButton from "../../common/buttons/primary"
import { useMediaQuery } from 'react-responsive';



const AboutHero = ({ description, videoSource }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 1305px)', // Change this breakpoint as needed
  });
  const isTablet = useMediaQuery({
    query: '(max-width: 1421px)', // Change this breakpoint as needed
  });
  return (
    <Row  >
      {/* First Column for Description */}
      <Col  xs={24} sm={24} md={12} lg={12} xl={12}  style={{paddingBottom:isTablet ? "20px":"", color:"white", background: 'linear-gradient(180deg, #70ADBB 0%, #018D97 100%)', padding: isMobile ? "10% 7% 3% 8%" :"7% 7% 7% 2%"}}>
          <h1 style={{marginTop:isMobile ? "11%" :"1%"}}>About Alsalaam</h1>
          <p style={{margin:"2%",fontSize:isTablet ? "10px":"15px",marginBottom:isTablet ? "10px":"10px"}}>Al Salaam Tourism is a customer-oriented organization offering professional, world-class tourism solutions. We enjoy a stellar reputation of excellence in Dubai's tourism sector. We place the needs of our clients first and go the extra mile in ensuring our customer’s travel experience is laced with comfort and beautiful memories that endure for a lifetime.</p>
          <PrimaryButton title={"Explore Destination"} width="200px" />
      </Col>

      {/* Second Column for Video */}
      <Col xs={24} sm={24} md={12} lg={12} xl={12}>
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          {/* The '56.25%' padding-top value maintains a 16:9 aspect ratio */}
          <video
            src={videoSource}
            controls
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </Col>
    </Row>
  );
};

export default AboutHero;
