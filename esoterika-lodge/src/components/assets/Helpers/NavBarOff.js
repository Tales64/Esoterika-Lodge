import React from 'react';
import '../css/style.css'
import {
  Link
} from "react-router-dom";
import logo from '../images/EsoterikaSeal.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavbarOff () {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3" data-bs-theme="dark">
          <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Lodge
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/seekers">Seekers</Link>
                  <Link to="/initiates">Initiates</Link>
                  <Link to="/joyfulLeader">Leader</Link>
                  <Link to="/schedule">Calendar</Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">



  
    <>
      <NavDropdown.Item variant="primary" onClick={handleShow}>About</NavDropdown.Item>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Origins of the Grand Lodge</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>


{`Origin of the Grand Lodge

            In 1717 four Lodges in London met together and decided to form a Grand Lodge, possibly for no other reason than for strength and self-preservation. The seeds had been planted and their numbers grew. In 1723 they adopted a Constitution. Their success led to the establishment of still other Grand Lodges. In 1725 some of the Lodges in Ireland formed a Grand Lodge and a similar body was instituted in Scotland in 1726. Moreover, the original Grand Lodge in England did not remain without rivals, and at one time in the eighteenth century three Grand Lodges existed in England in addition to the original one organized in 1717. Two of these died out without influencing the history of Masonry in general, but the third had a great part in the spread and popularizing of Masonry throughout the world. It called itself the “Ancient” Grand Lodge. The two surviving Grand Lodges became long and vigorous rivals.

            The origins of Masonic Ritual are lost in the mists of history. It is accepted by researchers that two Degrees were worked in 1723 and much earlier, at least as early as 1659. Three Degrees are first mentioned in 1726. The complier of the English Ritual was undoubtedly William Preston. The Ritual has been refined and polished without being basically changed in character in the nearly two centuries since Preston first used it in London.

            Before that time the Ritual was a continuation of the practice and customs of the day-to-day work of the Operative Freemason. The emphasis gradually shifted from the practical to moral and spiritual values as the Accepted Masons began to outnumber the Operative Brethren in the Lodges. In early days there may have been only one Degree and a Master’s part. After a few years, three Degrees were used.

Titles of Grand Lodges in the United States also vary. Some Grand Lodges are called A. F. & M. which means Ancient Free and Accepted Masons. The most commonly used title, like that used in Washington, is F. & A. M., or Free and Accepted Masons.

            Masonry was established in France sometime between 1718 and 1725. The first Lodge in Spain was established in 1728. A Lodge was established in Prague in 1729, in Calcutta in 1728, and in Naples in 1731. Masonry came to Poland in 1734 and Sweden in 1725.

 

The Great Schism of Ancient and Moderns

            The growth of Freemasonry and its ideals and beliefs came not without opposition. Masons are taught that all men are equal – we meet upon the level. Individual freedom of thought and action, as well as morality and ethics, are the concepts and ideals upon which our order is founded. The teachings are a condemnation of autocratic government, who in turn condemn Freemasonry.

On 17 July 1751, representatives of six Lodges gathered at the Turk's Head Tavern, in Greek Street, Soho, London. Five were unaffiliated lodges of mainly Irish membership, and the sixth appears to have been formed shortly beforehand for the business of the evening. On that night they established the "Most Ancient and Honourable Society of Free and Accepted Masons according to the Old Institutions", now commonly known as the Grand Lodge of the Antients.

                While the emergence of the Antients simply consolidated a division in English Freemasonry, a schism occurred within the Moderns in 1777-78. While this only involved one lodge, it was the oldest and most prestigious in the constitution, and its Master was the Moderns’ most respected author and historian, William Preston.  Preston was already in dispute with the Grand Secretary over the royalties to the new Book of Constitutions he had just written. Some members of his Lodge of Antiquity (formerly the Goose and Gridiron, or the Old Lodge of St. Pauls), having attended church as masons walked back to the lodge in their regalia. Three brethren saw fit to report this to the Moderns Grand Lodge as an unauthorized masonic parade. Preston, the Master of Antiquity, sided with the accused, arguing that since the lodge was one of the original four, it had only subscribed to the original constitutions, and did not require any other authority to hold a parade. For this, he was promptly expelled. Antiquity responded by expelling the three who had complained. At least half of the lodge seceded to the Grand Lodge of All England at York, quoting Article 39 of Payne's regulations, that the Landmarks of the order must be preserved in any new regulations of Grand Lodge (alluding to their own rights and privileges). Antiquity became, for the period of separation, "the Grand Lodge of All England South of the River Trent", warranting at least two lodges in its own right. The dispute was not resolved until May 1789, when Preston and his brethren were received back into the Moderns with much feasting and fanfare.

                However, it wasn’t until 1809 that the Grand Lodge of England (the Moderns) set up a "Lodge of Promulgation". Its purpose was to "revert to the Ancient Land Marks of the Society" and to promulgate those landmarks amongst the brethren. By 1813 the new Grand Lodge, The United Grand Lodge of England[1], essentially ended up with a compromise - the ritual of the Ancients and the infrastructure of the Moderns. While the "Emulation Ritual" became the standard, many variations still exist, which, while mutually recognizable, present many flavors of Masonic ritual within the English Constitution.

            The new United Grand Lodge of England declared and pronounced that pure Ancient Masonry consists of three Degrees and no more, those of the Entered Apprentice, the Fellow Craft, and the Master Mason, including the Supreme Order of the Holy Royal Arch.

            The United Grand Lodge of England is comprised of the two Grand Bodies in England, along with those of Ireland and Scotland – from which all Grand Lodges in the world today are descended.

 

Masonic History in the United States

            It was inevitable that Freemasonry should follow the colonists to America and play a most important role in the establishment of the thirteen colonies. Freemasonry was formally recognized for the first time in America with the appointment by the Grand Lodge of England of a Provincial Grand Master in New York, New Jersey, and Pennsylvania in 1730.  American Masons worked under foreign jurisdiction until 1731, when the first American Grand Lodge was established in the Commonwealth of Pennsylvania.

            One of the most romantic portions of all Masonic history is in the story of the part played by Freemasons in the formation of our country. Without exaggeration, we can say that Freemasonry and Masonic thinking contributed most significantly to the founding of this great Republic. Many of the signers of the Declaration of Independence, as well as the drafters of the Constitution, were members of the Fraternity. George Washington was a staunch Freemason. He was the first of fourteen Masonic Presidents[2] and the only one to serve as Worshipful Master of a Lodge and President as the same time. The others after Washington are Monroe, Jackson, Polk, Buchanan, Jackson, Garfield, McKinley, Teddy and Franklin Roosevelt, Taft, Harding, Truman and Ford – of whom Truman and Jackson served as Grand Masters.

            In the struggle for independence, many well-known patriots, such as Paul Revere, Benjamin Franklin, John Hancock, Marquis de Lafayette, and Baron van Steuben were members in the Craft. No doubt Freemasonry was responsible for and shared much of their thinking and opinions. Much has been written about the participation of the Fraternity in the Revolution and the founding of America, and it is an episode of which we can be very proud. Since that period, Freemasonry has grown and flourished, following closely the growth and expansion of the United States.

 



 

 

The Marks of a Mason - The Ancient & Accepted Scottish Rite of Freemasonry by Charles Sumner Lobinger, page 42

"...all political legislators have failed to make their institutions lasting. However wise their laws may have been, they have not been able to spread through all countries and ages. As they only kept in view victories and conquests, military violence, and the elevation of on people at the expense of another, they have not had the power to become universal, nor to make themselves acceptable to the taste, spirit, and interest of all nations. Philanthropy was not their basis. Patriotism badly understood and pushed to excess, often destroyed in these warrior republics love and humanism in general. Mankind is not essentially distinguished by the tongues spoken, the clothes worn, the lands occupied, or the dignities with which it is invested. The world is nothing but a great republic, of which every nation is a family, and every individual a child. Our Society was at the outset established to revive and spread these essential maxims borrowed from the nature of man. We desire to reunite all men enlightened minds, gentle manners, and agreeable wit, not only by a love for the fine arts, but much more by the grand principles of virtue, science, and religion, where the interests of the Fraternity shall become those of the whole human race, whence all nations shall be enabled to draw useful knowledge, and where the subjects of all kingdoms shall learn to cherish one another without renouncing their own country."

 

George Washington, Master Mason

[1] The United Grand Lodge of England website - www.ugle.org.uk

[2] Abraham Lincoln was not a Freemason. He did apply for membership in Tyrian Lodge, Springfield, Ill., shortly after his nomination for the presidency in 1860 but withdrew the application because he felt that his applying for membership at that time might be construed as a political ruse to obtain votes. He advised the lodge that he would resubmit his application again when he returned from the presidency.`}
        </Offcanvas.Body>
      </Offcanvas>
    </>

                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

