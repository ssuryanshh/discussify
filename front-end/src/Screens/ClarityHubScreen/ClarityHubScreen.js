import React, { useState } from "react";
import "./ClarityHub.css";
import ClarityMain from "../../Components/ClarityHub/ClarityMain/ClarityMain";
import RecentQuestion from "../../Components/ClarityHub/RecentQuestion/RecentQuestion";
import PreviousQuestion from "../../Components/ClarityHub/PreviousQuestions/PreviousQuestion";
import PageHeader from "../../Components/Common/PageHeader/PageHeader";

function ClarityHubScreen({ userInfo }) {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return (
    <div className="clarityhub-screen-container">
      <div className="clarityhub-screen-header">
        <PageHeader headerText={"ClarityHub"} content={"Ask and solve your doubts among youselves"} username={userInfo.username}/>
      </div>
      <div className="clarityhub-screen-main">
        <div className="clarityhub-screen-questions">
          <ClarityMain userId={userInfo.userId} onQuestionSubmit={triggerRefresh} />
          <RecentQuestion category={userInfo.category} refresh={refresh} />
        </div>
        <div className="clarityhub-screen-previous">
          <PreviousQuestion userId={userInfo.userId} refresh={refresh} />
        </div>
      </div>
    </div>
  );
}

export default ClarityHubScreen;
