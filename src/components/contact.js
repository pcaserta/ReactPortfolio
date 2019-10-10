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
             <ContactInfo
              logo="fa fa-envelope"
              info="patrick.caserta@live.longwood.edu"
            ></ContactInfo>
             <ContactInfo
              logo="fa fa-skype"
              info="live:patrick.caserta"
            ></ContactInfo>
             <ContactInfo
              logo="fa fa-linkedin-square"
          
              info="Linkden Profile"
            ></ContactInfo>

            {/* <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    804-997-5633
                  </ListItemContent>
                </ListItem> */}
            {/* email contact */}
            {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ paddingRight: ".90em" }}
                    />
                    patrick.caserta@live.longwood.edu
                  </ListItemContent>
                </ListItem> */}
            {/* skype contact */}
            {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    live:patrick.caserta
                  </ListItemContent>
                </ListItem> */}
            {/* linkden contact */}
            {/* <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i
                      className="fa fa-linkedin-square"
                      aria-hidden="true"
                      style={{ paddingRight: "1.em" }}
                    />
                    <a
                      href="https://www.linkedin.com/in/patrick-caserta-46530312b/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Linkden Profile
                    </a>
                  </ListItemContent>
                </ListItem>
              </List> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
