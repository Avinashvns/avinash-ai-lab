"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ type }) {

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

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
        {/* MACHINE LEARNING */}
        {/* ================================================= */}

        {type === "ml" && (

          <div className="sidebar-section">

            <h2 className="sidebar-title">
              🤖 Machine Learning
            </h2>

            {/* ================================================= */}
            {/* ML MAIN PAGE */}
            {/* ================================================= */}

            {pathname === "/machine-learning" && (

              <div className="sidebar-links">

                <a href="/machine-learning/linear-regression">
                  📈 Linear Regression
                </a>

                <a href="/machine-learning/logistic-regression">
                  📊 Logistic Regression
                </a>

                <a href="/machine-learning/knn">
                  📍 KNN
                </a>

                <a href="/machine-learning/kmeans">
                  🎯 K-Means
                </a>

                <a href="/machine-learning/decision-tree">
                  🌳 Decision Tree
                </a>

                <a href="/machine-learning/random-forest">
                  🌲 Random Forest
                </a>

              </div>

            )}

            {/* ================================================= */}
            {/* LINEAR REGRESSION PAGE */}
            {/* ================================================= */}

            {pathname === "/machine-learning/linear-regression" && (

              <div className="inner-sidebar">

                <h3>
                  📘 Linear Regression
                </h3>

                <a href="#overview">
                  Overview
                </a>

                <a href="#mathematics">
                  Mathematics
                </a>

                <a href="#visualization">
                  Visualization
                </a>

                <a href="#manual">
                  From Scratch
                </a>

                <a href="#sklearn">
                  Scikit Learn
                </a>

                <a href="#applications">
                  Applications
                </a>

                <a href="#project">
                  Mini Project
                </a>

                <a href="#interview">
                  Interview Questions
                </a>

              </div>

            )}

          </div>

        )}

      </aside>

    </>

  );
}