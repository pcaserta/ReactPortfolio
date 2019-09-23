import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            {/* phone contact */}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    804-997-5633
                  </ListItemContent>
                </ListItem>
                {/* email contact */}
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    patrick.caserta@live.longwood.edu
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    live:patrick.caserta
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />{" "}
                    <a
                      href="https://www.linkedin.com/in/patrick-caserta-46530312b/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Linkden Profile
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
