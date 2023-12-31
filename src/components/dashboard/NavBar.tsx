import React, { useState } from "react";
import styled from "styled-components";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import { MdHome, MdOutlineFavorite, MdOutlineHome, MdRecycling, MdSpaceDashboard, MdWallet } from "react-icons/md";
import { GiTwirlCenter } from "react-icons/gi";
import { NavLink, useLocation } from "react-router-dom";  // Explicitly import useLocation
import BLCGlogo from "./BLCG.png"

export default function Navbar() {
  const [navbarState, setNavbarState] = useState<boolean>(false);
  const location = useLocation();  // Now useLocation is explicitly imported from react-router-dom


  interface NavLinkProps {
    to: string;
    label: string;
    icon: JSX.Element;
  }
  
  const navLinks: NavLinkProps[] = [
    { to: "/", label: "Main Website", icon: <MdHome className="text-xl" /> },
    { to: "/smart-portal", label: "Smart Portal", icon: <MdSpaceDashboard className="text-xl" /> },
    { to: "/my-nfts", label: "My Golden Pass", icon: <MdRecycling className="text-xl" /> },
    { to: "/workshop", label: "Newbie Workshop", icon: <GiTwirlCenter className="text-xl" /> },
  ];

  const getPageName = () => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");
    return pathSegments.length > 0 ? pathSegments[pathSegments.length - 1] : "Home";
  };


  const SidebarHeader = styled.div`
  display: flex;
  items: center;
  justify-content: flex-start;
  padding: 4;
`;


  const toggleNavbar = () => setNavbarState(!navbarState);
  const closeNavbar = () => setNavbarState(false);

    
  return (
<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar">
      <div className="flex-1 px-2 mx-2 gap-2">
      <img
          src="https://www.billionlocalcoin.io/public/images/BLCG-PASS.png"
          alt="Logo"
          width="50px"
        />
        <div className="title text-portal">
        <div className="text-sm breadcrumbs">
  <ul>
    <li><a>Home</a></li> 
    <li><a>{getPageName()}</a></li>
  </ul>
  <h4>Welcome Back!</h4>
        <h1>
         Smart Portal..
        </h1>
</div>

      </div></div>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-none hidden lg:block">
        <ul className="portalmenu menu-horizontal">
          <li> 
            <ConnectWallet
        theme={"dark"}
        btnTitle={"Connect Wallet"}
        modalTitle={"Authenticate Wallet"}
        switchToActiveChain={true}
        modalSize={"compact"}
        welcomeScreen={{}}
        termsOfServiceUrl={
          "https://www.billionlocalcoin.io/"
        }
        privacyPolicyUrl={
          "https://www.billionlocalcoin.io/"
        }
      />
      </li>
        </ul>
      </div>
    </div>
   
  </div> 
  <div className="drawer-side z-[10]">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
    <SidebarHeader className="mt-5 mb-5">
        <img src="https://www.billionlocalcoin.io/public/images/logo.png"
 alt="Logo" className="w-20 h-20 mr-2" />
        <span className="text-xl font-bold text-white tagen-margin">Smart Portal</span>
      </SidebarHeader>
      <div className="profile-wallet"></div>
      <ConnectWallet/>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="nav-link"
                onClick={closeNavbar}
              >
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
  </div>
</div>

  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 768px) {
    /* Hide the Connect Wallet button on screens with max width 768px */
    .connect-wallet {
      display: none;
    }
  }
  .title {
       margin-top:23px;
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ffc107;
        font-family: "Vidaloka", cursive;
        letter-spacing: 0.2rem;
        font-size: 12px;
      }
      
    }

    h4 {
      font-size:small;
    }

    h1 {
      font-size:small;
    }
    
  }

  
  .search {
    background-color: #212121;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ffc107;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ffc107;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ffc107;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
        
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;

