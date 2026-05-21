import "./linear-regression.css";

import Sidebar from "@/components/Sidebar";

export default function LinearRegressionPage() {

  return (

    <>

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

          {/* ================================================= */}
          {/* MATHEMATICS */}
          {/* ================================================= */}

          <div
            className="lr-section"
            id="mathematics"
          >

            <div className="section-header">

              <h2>
                📐 Mathematics Behind Linear Regression
              </h2>

              <p>
                Linear Regression tries to find the best fit line.
              </p>

            </div>

            <div className="math-card">

  <div className="math-left">

    <div className="formula-box">

      <h1>
        y = mx + c
      </h1>

    </div>

    <div className="formula-info">

      <div className="formula-item">

        <span>y</span>

        <p>
          Predicted Output
        </p>

      </div>

      <div className="formula-item">

        <span>m</span>

        <p>
          Slope of Line
        </p>

      </div>

      <div className="formula-item">

        <span>x</span>

        <p>
          Input Feature
        </p>

      </div>

      <div className="formula-item">

        <span>c</span>

        <p>
          Intercept
        </p>

      </div>

    </div>

  </div>

  <div className="math-right">

    <img
      src="/images/machine-learning/linear-regression/lr-math.png"
      alt="Linear Regression Mathematics"
      className="math-image"
    />

  </div>

</div>

          </div>

          {/* End */}

        </div>

      </div>

    </>
  );
}