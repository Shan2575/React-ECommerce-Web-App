import { CiShoppingCart } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoCalendar } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

import { Outlet, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <nav id="topNav">
          <div id="logoContainer">
            <Link to="/">
              <div className="iconBorder logoBorder">
                <img src="public\assets\intellivinci-logo.png"></img>
              </div>
            </Link>
          </div>

          <div id="searchBar">
            <input></input>
            {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Figure out search function !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
            <a id="IoSearchCircle" href="">
              <IoSearchCircle></IoSearchCircle>
            </a>
          </div>

          <div id="iconsContainer">
            <div className="iconBorder">
              <Link className="largeIcons" to="SignInRegister">
                <CiUser />
              </Link>
            </div>
            <div className="iconBorder">
              <Link className="largeIcons" to="Wishlist">
                <CiHeart />
              </Link>
            </div>
            <div className="iconBorder">
              <Link className="largeIcons" to="Cart">
                <CiShoppingCart></CiShoppingCart>
              </Link>
            </div>
          </div>
        </nav>

        <nav id="bottomNav">
          <ul>
            <li>
              <Link id="FaFire" to="/ShopDeals">
                <FaFire /> <span>Shop Deals</span>
              </Link>
            </li>
            <li>
              <Link id="BiSolidCategoryAlt">
                <BiSolidCategoryAlt /> <span>Categories</span>
              </Link>
            </li>
            <li>
              <Link id="IoCalendar" to="/SeasonalOffers">
                <IoCalendar /> <span>Seasonal Offers</span>
              </Link>
            </li>
            <li>
              <Link id="FaBook" to="/About">
                <FaBook /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link>
                <BiSolidMessageSquareDetail /> <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default Header;
