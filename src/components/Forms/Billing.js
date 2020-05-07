"use strict";
import React from "react";
import ContentWrapper from "../Layout/ContentWrapper";
import { Card, Table } from "reactstrap";
import "../../styles/MyStyles/custom.css";
import { Link } from "react-router-dom";
import reactCSS from "reactcss";

const Billing = () => {
  return (
    <ContentWrapper>
      <div className="form-card">
        <div className=" card-top">
          <h3>Billing</h3>
        </div>

        <div className=" card-top billing ">
          <h3>Products</h3>
        </div>

        <div className="billing-content">
          <div className="upload-logo billing-box">
            <div className="content-text">
              <h4>Visitor Basic</h4>
            </div>
            <div className="content-button">
              <button class="btn btn-secondary btn-lg " type="button">
                <Link to="/#"></Link> Manage subscription
              </button>
            </div>
          </div>
          <div className="upload-logo billing-box">
            <div className="content-text">
              <h4>Deliveries</h4>
              <h5>The simple solution of office deliveries.</h5>
            </div>
            <div className="content-button learn-more">
              <button class="btn btn-secondary btn-lg invite-btn" type="button">
                <Link to="/#"></Link> Learn more
              </button>
            </div>
          </div>

          <div className=" card-top billing billing-box2">
            <h3>Payment method</h3>
          </div>
          <div className="upload-logo billing-box">
            <div className="content-text">
              <h4>No card on file</h4>
              <h5>Add a credit card to continue using Workwise.</h5>
            </div>
            <div className="content-button learn-more">
              <button class="btn btn-secondary btn-lg invite-btn" type="button">
                <Link to="/#"></Link> Add
              </button>
            </div>
          </div>

          <div className=" card-top billing billing-box2 ">
            <h3>Billing history</h3>
          </div>

          <div className="billing-box2">
            <Card>
              <Table responsive>
                <thead>
                  <tr>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                    <th>RECEIPT</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mar 11, 2020</td>
                    <td>₦35,000</td>
                    <td>WW10321</td>
                    <td>Pending</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Billing;
