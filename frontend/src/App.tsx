import { Space } from "antd";
import "./App.css";

import AppHeader from "./components/AppHeader";
import PageContent from "./components/PageContent";
import SideMenu from "./components/SideMenu";
import AppFooter from "./components/AppFooter";


function App() {


  return (
    <div className={"App"}>
      <AppHeader />
      <Space className={"SideMenuAndPageContent"}>
      {/*<div className="SideMenuAndPageContent">*/}
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      {/*</div>*/}
      </Space>
      <AppFooter />
    </div>
  )
}


export default App
