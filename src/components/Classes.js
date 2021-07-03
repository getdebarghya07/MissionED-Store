import React from "react";
import { Link } from "react-router-dom";
import "./Classes.css";
import "../App.css";
import { Explore } from "./Explore";
import "./Explore.css";

function Classes() {
  return (
    <div id="courses">
      <h1 className="courseheading">
        Earn <span className="missioncoin-class"> MISSIONED Coins </span> by
        joing a course today !!
      </h1>
      <div className="main-container">
        <div class="college StartLearningCards__CardWrapper-sc-11nh8iv-4 jotQdt">
          <h2 class="prepare H2-s1k28w-0 StartLearningCards__Label-sc-11nh8iv-1 WOSgl bfdJwJ">
            Prepare for
          </h2>
          <h2 class="course H2-s1k28w-0 StartLearningCards__ExamLabel-sc-11nh8iv-2 WOSgl dTCSMb">
            College Level Courses
          </h2>
          <p class="start-learning P1-llcrra-0 StartLearningCards__SubHeader-sc-11nh8iv-3 fnpjok gUdVPq">
            Popular goals
          </p>
          <picture>
            <source
              srcset="https://static.uacdn.net/production/_next/static/images/home/test-prep-learning.svg"
              type="image/svg"
            />
            <img
              src="https://static.uacdn.net/production/_next/static/images/home/test-prep-learning.svg"
              alt="Competitive exams"
              width="240px"
              height="240px"
              loading="lazy"
              class="StartLearningCards__LearningImage-sc-11nh8iv-0 czDarl"
            />
          </picture>
          <div class="StartLearningCards__PopularGoalsContainer-sc-11nh8iv-6 bdblAM">
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Entrepreneurship
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Finance
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Data Science
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Consultancy
            </Link>
          </div>
          <div class="StartLearningCards__BtnContainer-sc-11nh8iv-8 esmPIJ">
            <Explore>Start learning</Explore>
          </div>
        </div>

        <div class="school StartLearningCards__CardWrapper-sc-11nh8iv-4 jotQdt">
          <h2 class="prepare H2-s1k28w-0 StartLearningCards__Label-sc-11nh8iv-1 WOSgl bfdJwJ">
            Prepare for
          </h2>
          <h2 class="course H2-s1k28w-0 StartLearningCards__ExamLabel-sc-11nh8iv-2 WOSgl dTCSMb">
            Class 8 to 12
          </h2>
          <p class="start-learning P1-llcrra-0 StartLearningCards__SubHeader-sc-11nh8iv-3 fnpjok gUdVPq">
            Choose a goal
          </p>
          <picture>
            <source
              srcset="https://static.uacdn.net/production/_next/static/images/home/k12-learning.svg"
              type="image/svg"
            />
            <img
              src="https://static.uacdn.net/production/_next/static/images/home/k12-learning.svg"
              alt="Class 8 to 12"
              width="240px"
              height="240px"
              loading="lazy"
              class="StartLearningCards__LearningImage-sc-11nh8iv-0 czDarl"
            />
          </picture>
          <div class="StartLearningCards__PopularGoalsContainer-sc-11nh8iv-6 bdblAM">
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Class 8
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Class 9
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Class 10
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Class 11
            </Link>
            <Link
              to="/Explorecourses"
              class="H5-ozdkiq-0 StartLearningCards__PopularGoals-sc-11nh8iv-7 giExaH bgkeEa"
            >
              Class 12
            </Link>
          </div>
          <div class="StartLearningCards__BtnContainer-sc-11nh8iv-8 esmPIJ">
            <Explore>Start learning</Explore>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Classes;
