import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Navbar } from 'react-bootstrap';

import BrandLink, { BrandLinkProps } from './brand-link.component';

const HEADER_LINKS: BrandLinkProps[] = [
  {
    id: 'GitHub',
    icon: faGithub,
    link: 'https://github.com/nakul5harma/camera-integration-react',
  },
  {
    id: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/nakul5harma',
  },
  {
    id: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/nakul5harma/',
  },
];

function Header() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="d-flex justify-content-between my-2">
        <div>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo512.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <span> </span>
            <span className="fs-3">Camera Integration React Demo</span>
          </Navbar.Brand>
        </div>

        <div>
          {HEADER_LINKS.map((linkProps: BrandLinkProps) => {
            return (
              <BrandLink
                key={linkProps.id}
                id={linkProps.id}
                icon={linkProps.icon}
                link={linkProps.link}
              />
            );
          })}
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
