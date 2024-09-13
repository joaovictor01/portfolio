import React, { useState, useEffect } from "react";
import ScrollService from "../../utilities/ScrollService";
import "./ScrollToHome.css";
import { TOTAL_SCREENS, GET_SCREEN_INDEX } from "../../utilities/commonUtils";

export default function ScrollToHome() {
  let [visible, setVisible] = useState(false);
  let ScrollToHomeElement = () => {
    return (
      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    );
  };
  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) return;

    if (currentScreen.screenInView === "Home") {
      console.log("HOME SCREEN");
      setVisible(false);
      // ScrollToHomeElement({ visible: false });
    } else {
      console.log(currentScreen.screenInView);
      // ScrollToHomeElement({ visible: true });
      setVisible(true);
    }

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);
    if (screenIndex < 0) return;
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  useEffect(() => {
    return () => {
      currentScreenSubscription.unsubscribe();
    };
  }, [currentScreenSubscription]);

  return <div>{visible && <ScrollToHomeElement />}</div>;
}
