import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendarMinus,
  faCommentAlt,
  faBell,
  faUserPlus,
  faCog,
  faFileAlt,
  faPlusCircle,
  faAngleDown,
  faAngleUp,
  faDownload,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <div id="app-wrapper">
      <div class="icon-bar">
        <a href="#active">
          <i id="active" class="fa fa-home">
            <FontAwesomeIcon icon={faHome} />
          </i>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />

        <a href="#active">
          <i class="fa fa-file-text">
            <FontAwesomeIcon icon={faFileAlt} />
          </i>
        </a>
        <a href="#active">
          <i class="fa fa-calendar-minus-o">
            <FontAwesomeIcon icon={faCalendarMinus} />
          </i>
        </a>
        <a href="#active">
          <i id="active" class="fas fa-comment-alt">
            <FontAwesomeIcon icon={faCommentAlt} />
          </i>
        </a>
        <a href="#active">
          <i class="fas fa-bell">
            <FontAwesomeIcon icon={faBell} />
          </i>
        </a>
        <br />
        <br />
        <br />
        <br />
        <a href="#active">
          <i class="fas fa-user-plus">
            <FontAwesomeIcon icon={faUserPlus} />
          </i>
        </a>
        <a href="#active">
          <i class="fas fa-cog">
            <FontAwesomeIcon icon={faCog} />
          </i>
        </a>
        <a href="#active">
          <img
            class="profile-image"
            src={require("../src/img/profiles/you.jpg")}
            alt="youpic"
          />
        </a>
      </div>
      <div id="chat-container">
        <div id="search-container">
          <input type="text" placeholder="Search here" />
        </div>
        <div id="conversation-list">
          <div className="conversation active">
            <img
              className="profile"
              src={require("../src/img/profiles/kelly.jpg")}
              alt="Kelly Johnson"
            />
            <div className="title-text">Kelly Johnson</div>
            <div className="created-date">32 mins ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/vanessa.jpg")}
              alt="Vanessa Chude"
            />
            <div className="title-text">Vanessa Chude</div>
            <div className="created-date">Hour ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/kourtney.jpg")}
              alt="kourtney Tim"
            />
            <div className="title-text">Kourtney Tim</div>
            <div className="created-date">4 hours ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/jake.jpg")}
              alt="Janke Yu"
            />
            <div className="title-text">Jake Yu</div>
            <div className="created-date">7 hours ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/tunde.jpg")}
              alt="Tunde Folaranmi"
            />
            <div className="title-text">Tunde Folaranmi</div>
            <div className="created-date">10 hours ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/toyosi.jpg")}
              alt="Toyosi Vicker"
            />
            <div className="title-text">Toyosi Vicker</div>
            <div className="created-date">13 hours ago</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/amie.jpg")}
              alt="Amie Peralta"
            />
            <div className="title-text">Amie Peralta</div>
            <div className="created-date">Yesterday</div>
          </div>
          <div className="conversation">
            <img
              className="profile"
              src={require("../src/img/profiles/vik.jpg")}
              alt="Vik Andres"
            />
            <div className="title-text">Vik Andres</div>
            <div className="created-date">Yesterday</div>
          </div>
        </div>
        <div id="chat-title">
          <div>
            <img
              className="profile"
              src={require("../src/img/profiles/kelly.jpg")}
              alt="kelly johnson"
            />
            Kelly Johnson
          </div>
          <div>
            Members:
            <i className="plusIcon">
              <FontAwesomeIcon icon={faPlusCircle} />
            </i>
            <img
              className="youImage"
              src={require("../src/img/profiles/you.jpg")}
              alt="youPic"
            />
            <i className="faCog">
              <FontAwesomeIcon icon={faCog} />
            </i>
          </div>
        </div>
        <div id="chat-message-list">
          <div className="message-row you-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/you.jpg")}
                alt="You"
              />
              <div className="message-text">
                Alright. See Ya!
                <div className="time-info">
                  <div className="timer">few secs ago</div>
                  <div className="timmer2">seen 11:04AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row other-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/kelly.jpg")}
                alt="Kelly Johnson"
              />
              <div className="message-text">
                Sure. Looking forward to our reunion on Monday, cant wait!!!.
                <div className="time-info">
                  <div className="timer">32 mins ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/you.jpg")}
                alt="You"
              />
              <div className="message-text">
                Great! see you 6pm Monday, Icons Lodge.
                <div className="time-info">
                  <div className="timer">Hour ago</div>
                  <div className="timmer2">seen 10:20AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row other-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/kelly.jpg")}
                alt="Kelly Johnson"
              />
              <div className="message-text">
                Absolutely! Just found out my other meetings have been
                rescheduled for next week. so i'll be free after 1pm Monday.
                <div className="time-info">
                  <div className="timer">Hour ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/you.jpg")}
                alt="You"
              />
              <div className="message-text">
                The event is 8pm but it would be great if we all meet up at 6pm
                before the event. You fine with 6pm?
                <div className="time-info">
                  <div className="timer">2 hours ago</div>
                  <div className="timmer">seen 10:00AM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row other-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/kelly.jpg")}
                alt="Kelly Johnson"
              />
              <div className="message-text">
                Still trying to confirm, what time is it?
                <div className="time-info">
                  <div className="timer">2 hours ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/you.jpg")}
                alt="You"
              />
              <div className="message-text">
                I just contacted the others and everyone is set for Monday. You
                comfirmed your schedule?
              </div>
              <div className="message-time">Seen 9:15AM</div>
            </div>
          </div>
          <div className="message-row other-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/kelly.jpg")}
                alt="Kelly Johnson"
              />
              <div className="message-text">Hey what's up?</div>
              <div className="message-time">2 hours ago</div>
            </div>
          </div>
          <div className="message-row you-message">
            <div className="message-content">
              <img
                className="profile"
                src={require("../src/img/profiles/you.jpg")}
                alt="You"
              />
              <div className="message-text">Hey Kelly?</div>
              <div className="message-time">Seen 8:12AM</div>
            </div>
          </div>
        </div>
        <div id="chat-form">
          <i>
            <FontAwesomeIcon icon={faPlusSquare} />
          </i>
          <input
            class="type-message"
            type="text"
            placeholder="Type a message here"
          />
        </div>
      </div>
      <div id="profile-info">
        <figure className="profile-details">
          <img
            className="profile-pic"
            src={require("../src/img/profiles/kelly.jpg")}
            alt="kelly"
          />
          <figcaption className="caption">
            <p className="captionName">Kelly Johnson</p>
            <p>Interior Designer at Sparks Inc</p>
          </figcaption>
        </figure>
        <div className="informationTag">
          {" "}
          Information
          <span class="faAngledown">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="informationTag">
          {" "}
          Images (14)
          <span class="faAngledown">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        <div className="informationTag">
          {" "}
          Files (3)
          <span class="faAngleup">
            <FontAwesomeIcon icon={faAngleUp} />
          </span>
        </div>
        <div className="fileDownload">
          {" "}
          <div>
            <span className="downloadItems">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Landing_Page.zip
          </div>
          <div>
            <span className="downloadItems">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Rquirements.pdf
          </div>
          <div>
            <span className="downloadItems">
              <FontAwesomeIcon icon={faDownload} />
            </span>
            Myfile.docx
          </div>
        </div>
        <div className="informationTag">
          {" "}
          Pinned Items
          <span class="faAngledown">
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
