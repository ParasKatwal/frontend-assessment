import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContentImg from 'assets/img/content.png'

function ContentCard({content}) {
  return (
    <Card className="content-card text-center p-4 h-auto">
      <Card.Img variant="top" src={ContentImg} />
      <Card.Body>
        <Card.Text>
          <div
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />
        </Card.Text>
        <Button variant="outline-dark" size="lg">
          Read More
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ContentCard