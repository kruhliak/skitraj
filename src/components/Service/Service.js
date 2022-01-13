import { Tab, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Datepicker from "../Datepicker/Datepicker";
import Title from "../Title/Title";

export default function Service() {
  return (
    <div>
      <Title title={"Wybierz usługę"}></Title>
      <Tabs>
        <Tab>Przechowaj</Tab>
        <Tab>Wynajmij</Tab>

        <TabPanel>
          <Datepicker />
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
