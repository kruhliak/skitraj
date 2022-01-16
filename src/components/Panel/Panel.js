import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Calendar from "../Calendar/Calendar";
import Title from "../Title/Title";
import ProductList from "../ProductList/ProductList";
import BoxList from "../BoxList/BoxList";
import { Wrapper, StyledTitle } from "./Panel.styled";
import products from "../ProductList/products-data.json";
import boxes from "../ProductList/boxes-data.json";

export default function Panel() {
  return (
    <Wrapper>
      <StyledTitle title={"Wybierz usługę"} />
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

          <ProductList
            text={
              "Dodaj dodatkowe produkty pakunkowe, aby ułatwić zapakowanie przedmiotów do pudełek"
            }
            productsData={products}
          >
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
          <ProductList
            productsData={boxes}
            text={
              "Wybierając pakiety Skitraj.pl stawiasz na najbardziej optymalną formę zamówienia, oszczędzasz na kosztach wysyłki, a także przyczyniasz się do ochrony środowiska."
            }
          >
            <Title title={"lub zamów pakiet"} />
          </ProductList>
          <ProductList
            text={
              "Dodaj dodatkowe produkty pakunkowe, aby ułatwić zapakowanie przedmiotów do pudełek"
            }
            productsData={products}
          >
            <Title title={"Produkty pakowe"} />
          </ProductList>
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
}
