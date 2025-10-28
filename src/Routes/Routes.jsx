// src/Routes/Routes.jsx (or wherever this file lives)
import React from "react";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";

// Layouts
import Main from "../Layout/Main";
import Layout2 from "../Layout/Layout2";
import Layout3 from "../Layout/Layout3";

// Pages
import Home from "../Pages/Home";
import Home2 from "../Pages/Home2";
import Home3 from "../Pages/Home3";
import About from "../Pages/About";
import Team from "../Pages/Team";
import TeamDetails from "../Pages/TeamDetails";
import Testimonial from "../Pages/Testimonial";
import Project from "../Pages/Project";
import ProjectDetails from "../Pages/ProjectDetails";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import PricingPage from "../Pages/PricingPage";
import FaqPage from "../Pages/FaqPage";
import Blog from "../Pages/Blog";
import BlogSidebar from "../Pages/BlogSidebar";
import BlogDetails from "../Pages/BlogDetails";
import Contact from "../Pages/Contact";
import Solutions from "../Pages/Solutions";

// --- Optional: belt-and-suspenders to kill browser auto-restore
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

/** A tiny wrapper that enforces scroll-to-top for each layout */
const withScroll = (LayoutComponent) => (
  <>
    {/* React Router v6 data router scroll manager */}
    <ScrollRestoration
      getKey={(location) => location.pathname} // scroll to top on every path change
    />
    <LayoutComponent />
  </>
);

// Simple 404 fallback
function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0e0f2c",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#A1162A" }}>404 - Page Not Found</h1>
      <p style={{ marginTop: "10px", color: "#ccc" }}>
        The page you’re looking for doesn’t exist.
      </p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: withScroll(Main), // 👈 wrap Main with ScrollRestoration
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Team /> },
      { path: "/team/team-details", element: <TeamDetails /> },
      { path: "/testimonial", element: <Testimonial /> },
      { path: "/project", element: <Project /> },
      { path: "/project/project-details", element: <ProjectDetails /> },
      { path: "/services", element: <Services /> },
      { path: "/service/service-details", element: <ServiceDetails /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog-sidebar", element: <BlogSidebar /> },
      { path: "/blog/blog-details", element: <BlogDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/solutions", element: <Solutions /> },
    ],
  },
  {
    path: "/home2",
    element: withScroll(Layout2), // 👈 wrap Layout2
    children: [{ index: true, element: <Home2 /> }],
  },
  {
    path: "/home3",
    element: withScroll(Layout3), // 👈 wrap Layout3
    children: [{ index: true, element: <Home3 /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
