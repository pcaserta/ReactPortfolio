import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import ContactInfo from "./contactInfo";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Patrick Caserta</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
          </Cell>
          <Cell className="contact-list" col={6}>
            <h2>Contact Me</h2>
            <hr />

            {/* phone contact */}
            <ContactInfo
              logo="fa fa-phone-square"
              info="804-997-5633"
            ></ContactInfo>

            {/* email contact */}
            <ContactInfo
              logo="fa fa-envelope"
              info="patrick.caserta@live.longwood.edu"
            ></ContactInfo>

            {/* skype contact */}
            <ContactInfo
              logo="fa fa-skype"
              info="live:patrick.caserta"
            ></ContactInfo>

            {/* linkden contact */}
            <ContactInfo
              link="https://www.linkedin.com/in/patrick-caserta-46530312b/"
              logo="fa fa-linkedin-square"
              info="Linkden Profile (click link)"
            ></ContactInfo>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
