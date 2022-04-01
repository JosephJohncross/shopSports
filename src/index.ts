import { LocalDataSource } from "./App/localDataSource";
import {HtmlDisplay} from "./htmlDisplay";

let ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement> {
  let display = new HtmlDisplay();
  display.props = {
   dataSource: ds
  };
  return display.getContent();
}

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    displayData().then((elem) => {
      let rootElement = document.getElementById("app");
      rootElement.innerHTML = "";
      rootElement.appendChild(elem);
    });
  }
};

const header = document.querySelector('.header');
const card = document.querySelector('.card');
// card.addEventListener('mouseenter', cardAnimationHandler);



