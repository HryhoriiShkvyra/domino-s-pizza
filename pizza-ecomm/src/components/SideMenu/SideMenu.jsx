import {
  Cookie,
  KebabDining,
  LocalDrink,
  LocalPizza,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export const SideMenu = ({ sideBarActive }) => {
  const SidebarTopBtns = [
    {
      title: "pizza",
      icon: LocalPizza,
    },
    {
      title: "drinks",
      icon: LocalDrink,
    },
    {
      title: "sides",
      icon: KebabDining,
    },
    {
      title: "desserts",
      icon: Cookie,
    },
  ];

  const SidebarBottomBtns = [
    "pizza constructor",
    "pizza tracker",
    "pizzerias",
    "news",
    "work and career",
    "franchise",
    "domino's club",
    "leave feedback",
  ];

  return (
    <>
      {sideBarActive === true ? (
        <div className="side-menu-active">
          <div className="side-menu-btns">
            {SidebarTopBtns.map((page) => {
              const Icon = page.icon;
              return (
                <Link className="side-menu-btn" to={`/${page.title}/`}>
                  <div className="side-menu-icon">
                    <Icon />
                  </div>
                  <h3>{page.title}</h3>
                </Link>
              );
            })}
          </div>
          <div className="side-menu-btns">
            {SidebarBottomBtns.map((page, index) => (
              <Link className="side-menu-btn" key={page + "_" + index}>
                <h3>{page}</h3>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="side-menu-deActive">
          <div className="first-part">
            <div className="first-part-btns">
              <Link className="first-part-btn">
                <div className="icon">
                  <LocalPizza />
                </div>
                <div className="btn-title">Pizza</div>
              </Link>
              <Link className="first-part-btn">
                <div className="icon">
                  <LocalDrink />
                </div>
                <div className="btn-title">Drinks</div>
              </Link>
              <Link className="first-part-btn">
                <div className="icon">
                  <KebabDining />
                </div>
                <div className="btn-title">Sides</div>
              </Link>
              <Link className="first-part-btn">
                <div className="icon">
                  <Cookie />
                </div>
                <div className="btn-title">Dessert</div>
              </Link>
            </div>
          </div>
          <div className="second-part">
            <Link className="infoBtn">Pizza Constructor</Link>
            <Link className="infoBtn">Pizza Tracker</Link>
            <Link className="infoBtn">Pizzerias</Link>
            <Link className="infoBtn">News</Link>
            <Link className="infoBtn">Work and career</Link>
            <Link className="infoBtn">Franchise</Link>
            <Link className="infoBtn">Domino's Club</Link>
            <Link className="infoBtn">Leave feedback</Link>
          </div>
        </div>
      )}
    </>
  );
};
