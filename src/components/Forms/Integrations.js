import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Container, Card, CardHeader, CardBody } from "reactstrap";
import "../../styles/MyStyles/custom.css";

const Integrations = () => {
  return (
    <ContentWrapper>
      <Container fluid>
        <Card>
          <CardHeader className="table-card-header employee-header">
            <h1>Integrations</h1>
          </CardHeader>
          <CardBody>
            <div className="all-integrations">
              <a href="#">All Integrations</a>
            </div>
            <div className="integration-desc">
              <p>
                Workwise robust integrations directory makes it easy to
                integrate with your current workflow.<br></br>
                Learn more about <a href="#">integrations and GDPR</a>
              </p>
            </div>
            <div className="integration-content">
              <div className="integration-content-header">
                <h4>Directory</h4>
              </div>
              <div className="integration-content-container">
                <img src="/img/google.png"></img>
                <h4 className="h4">
                  <strong>Google Apps</strong>
                </h4>
                <p className="h5 em-tw-m-0">
                  Automatically sync Google Apps with Workwise.
                </p>
                <a href="#">
                  <button
                    className="btn btn-secondary btn-lg invite-btn sync-btn"
                    type="button"
                  >
                    Sync
                  </button>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </Container>
    </ContentWrapper>
  );
};

export default Integrations;
