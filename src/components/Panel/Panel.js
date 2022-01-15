import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Calendar from "../Calendar/Calendar";
import Title from "../Title/Title";
import ProductList from "../ProductList/ProductList";
import BoxList from "../BoxList/BoxList";
import { Wrapper } from "./Panel.styled";

export default function Panel() {
  return (
    <Wrapper>
      <div>
        <Title title={"Wybierz usługę"} />
        <Tabs>
          <TabList>
            <Tab>Przechowaj</Tab>
            <Tab>Wynajmij</Tab>
          </TabList>

          <TabPanel>
            <Calendar
              titleFirstDate={"Kiedy chcesz dostać puste pudełka?"}
              titleSecondDate={"Do kiedy chcesz przechowywać swoje rzeczy?"}
              textTime={"Czas wynajmu:"}
            >
              <Title title={"Termin przechowania"} />
            </Calendar>

            <BoxList />

            <ProductList>
              <Title title={"Produkty pakowe"} />
            </ProductList>
          </TabPanel>

          <TabPanel>
            <Calendar
              titleFirstDate={"Kiedy chcesz dostać wynajmowane pudełka?"}
              titleSecondDate={"Kiedy chcesz zwrócić wynajmowane pudełka?"}
              textTime={"Czas wynajmu:"}
            >
              <Title title={"Termin wynajmu"}></Title>
            </Calendar>
            <BoxList />
            <ProductList>
              <Title title={"Produkty pakowe"} />
            </ProductList>
          </TabPanel>
        </Tabs>
      </div>
    </Wrapper>
  );
}
