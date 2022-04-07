// import { LocalDataSource } from "./App/localDataSource";
import {HtmlDisplay} from "./htmlDisplay";
import {RemoteDataSource} from "./App/remoteDataSource";

let ds = new RemoteDataSource();

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





