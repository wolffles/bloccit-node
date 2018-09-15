import React from 'react';
import { Container, Jumbotron, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';


const Home = (props) => {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Bloccit</h1>
          <p className="lead">An application for users to share information.</p>
          <hr className="my-2" />
          <p>some subtext here</p>
          <p className="lead">
            <Button color="primary">Login</Button>
          </p>
        </Jumbotron>
        <Container>
            <Card className="col col-lg-4" style={{float:"left"}}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Post</CardTitle>
                <CardSubtitle>on the forum</CardSubtitle>
                <CardText>Share your thoughts about subjects that are important to you.</CardText>
                <Button color="success">Go Now</Button>
                </CardBody>
            </Card>
            <Card className="col col-lg-4" style={{float:"left"}}>
                <CardImg top width="130%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Comment</CardTitle>
                <CardSubtitle>on posts</CardSubtitle>
                <CardText>Your opinion counts! Make yourself heard.</CardText>
                {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
            <Card className="col col-lg-4" style={{float:"left"}}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                <CardTitle>Stay Informed</CardTitle>
                <CardSubtitle>Stay relevant</CardSubtitle>
                <CardText>See the most active topics as well as trending subjects!.</CardText>
                {/* <Button>Button</Button> */}
                </CardBody>
            </Card>
        </Container>
      </div>
    );
  };

export default Home;
