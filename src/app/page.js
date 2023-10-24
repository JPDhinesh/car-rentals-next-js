import React from "react";
import Playstore from "./component/Playstore";
import Searchbar from "./component/Searchbar";
import Logos from "./component/Logos";
import HowWorks from "./component/HowWorks";
import ChooseUs from "./component/ChooseUs";
import Vehicle from "./component/Vehicle";
import Subscription from "./component/Subscription";
import ScrollUp from "./component/ScrollUp";

function Home() {
  return (
    <main>
      <Playstore />
      <Searchbar />
      <Logos />
      <HowWorks />
      <ChooseUs />
      <Vehicle />
      <Subscription />
      <ScrollUp />
    </main>
  );
}

export default Home;
