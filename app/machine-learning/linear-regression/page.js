import "./linear-regression.css";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function LinearRegressionPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="ml" />

        <div className="content">

          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

          <div className="lr-hero">

            <div className="lr-left">

              <p className="hero-badge">
                📈 Machine Learning
              </p>

              <h1 className="page-title">
                Linear Regression
              </h1>

              <p className="lr-description">

                Learn Linear Regression deeply with
                mathematics, visualization, manual implementation
                and Scikit Learn.

              </p>

            </div>

            <div className="lr-right">

              <img
                src="/images/machine-learning/linear-regression/lr-hero.png"
                alt="Linear Regression"
                className="lr-image"
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* WHAT IS LINEAR REGRESSION */}
          {/* ================================================= */}

          <div className="lr-section" id="overview">

            <div className="section-header">

              <h2>
                📘 What is Linear Regression?
              </h2>

            </div>

            <div className="lr-info-card">

              <p>

                Linear Regression is a supervised machine learning
                algorithm used to predict continuous values by finding
                the best fit line between input and output variables.

              </p>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}