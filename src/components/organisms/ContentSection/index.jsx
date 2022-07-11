import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMediaQuery } from 'react-responsive'

import ContentCard from 'components/molecules/ContentCard'
import ContentAccordion from 'components/molecules/ContentAccordion'
import { data } from 'constants/data'

function Index() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div className="mt-5">
      <Container>
        {
          isMobile ? <ContentAccordion /> 
          : (
              <Row>
                {
                  data.map((item) => (
                    <Col lg={4} md={12} key={item.id}>
                      <ContentCard content={item.content} />
                    </Col>
                  ))
                }
              </Row>
            )
        }
      </Container>
    </div>
  )
}

export default Index