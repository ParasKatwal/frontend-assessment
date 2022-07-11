import Accordion from 'react-bootstrap/Accordion';

import ContentCard from './ContentCard';
import { data } from 'constants/data';

function ContentAccordion() {
  return (
    <Accordion defaultActiveKey="1">
      {
        data.map((item) => (
          <Accordion.Item eventKey={item.id} key={item.id}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>
              <ContentCard content={item.content} />
            </Accordion.Body>
          </Accordion.Item>
        ))
      }
    </Accordion>
  )
}

export default ContentAccordion