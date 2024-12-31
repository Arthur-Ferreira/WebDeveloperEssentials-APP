import Nav from "../../atoms/Nav"

import Navigation from "../Navigation"
import SMobileMenu from "./styles"

type MobileMenuProps = {
  isOpen?: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen === true ?
        <SMobileMenu>
          <Nav $mobile>
            <Navigation />
          </Nav>
        </SMobileMenu> : <></>
      }
    </>
  )
}


export default MobileMenu