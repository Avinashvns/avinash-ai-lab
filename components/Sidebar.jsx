"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { getSidebarConfig } from "@/lib/sidebar-config";
import "./Sidebar.css";

export default function Sidebar({ type }) {

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const config = getSidebarConfig(type);

  const normalizedPath =
    pathname?.replace(/\/$/, "") ?? "";

  const pageNav =
    config?.pages?.[normalizedPath];

  // console.log("SIDEBAR DEBUG");

  // console.log({
  //   pathname,
  //   normalizedPath,
  //   config,
  //   pageNav,
  //   pages: config?.pages,
  // });

  const isHub = config && pathname === config.hubPath;

  return (

    <>

      {/* ================================================= */}
      {/* MOBILE BUTTON */}
      {/* ================================================= */}

      <button
        className="mobile-menu-btn"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {/* ================================================= */}
      {/* OVERLAY */}
      {/* ================================================= */}

      {isOpen && (

        <div
          className="sidebar-overlay"
          onClick={() => setIsOpen(false)}
        />

      )}

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`sidebar ${isOpen ? "mobile-sidebar-open" : ""}`}
      >

        {/* ================================================= */}
        {/* CLOSE BUTTON */}
        {/* ================================================= */}

        <button
          className="close-sidebar-btn"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        {/* ================================================= */}
        {/* SECTION NAV */}
        {/* ================================================= */}

        {config && (

          <div className="sidebar-section">

            <h2 className="sidebar-title">
              {config.title}
            </h2>

            {isHub && config.roadmapPhases?.length > 0 && (

              <div className="sidebar-roadmap">

                {config.roadmapPhases.map((phase) => (

                  <div key={phase.id} className="sidebar-phase">

                    <div className="sidebar-phase-label">
                      {phase.icon} {phase.label}
                    </div>

                    <div className="sidebar-links">

                      {phase.topics.map((topic) => (

                        <a key={topic.href} href={topic.href}>
                          {topic.icon} {topic.label}
                        </a>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            )}

            {isHub && !config.roadmapPhases?.length && (

              <div className="sidebar-links">

                {config.topics.map((topic) => (

                  <a key={topic.href} href={topic.href}>
                    {topic.label}
                  </a>

                ))}

              </div>

            )}

            {pageNav && (

              <div className="inner-sidebar">

                <h3>
                  {pageNav.title}
                </h3>

                {pageNav.links.map((link) => (

                  <a key={link.href} href={link.href}>
                    {link.label}
                  </a>

                ))}

              </div>

            )}

          </div>

        )}

      </aside>

    </>

  );

}
