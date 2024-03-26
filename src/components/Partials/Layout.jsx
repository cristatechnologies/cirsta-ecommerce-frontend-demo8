import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DiscountBanner from "../DiscountBanner";
import Drawer from "../Mobile/Drawer";
import Header from "./Headers/Header";
import Footer from "./Footers/Footer";
import FooterTheme2 from "./Footers/FooterTwo";
import apiRequest from "../../../utils/apiRequest";
import HeaderTwo from "./Headers/HeaderTwo";
export default function Layout({ children, childrenClasses }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [settings, setSettings] = useState(null);
  const themeSetting = JSON.parse(localStorage.getItem("settings"));
  const [subscribeData, setSubScribeDAta] = useState(null);
  const [contact, setContact] = useState(null);
  useEffect(() => {
    if (!subscribeData) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}api/`)
        .then((res) => {
          if (res.data) {
            setSubScribeDAta(res.data.subscriptionBanner);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [subscribeData]);

  useEffect(() => {
    if (websiteSetup) {
      setSettings(websiteSetup.payload.setting);
    }
  }, [websiteSetup]);
  useEffect(() => {
    if (!contact) {
      apiRequest
        .contactUs()
        .then((res) => {
          if (res.data) {
            setContact(res.data.contact);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <Drawer open={drawer} action={() => setDrawer(!drawer)} />
      <div className="w-full overflow-x-hidden">
        {themeSetting && themeSetting.selected_theme === "theme1" && (
          <Header
            contact={contact && contact}
            settings={settings}
            drawerAction={() => setDrawer(!drawer)}
          />
        )}

        {themeSetting && themeSetting.selected_theme === "theme2" && (
          <HeaderTwo
            contact={contact && contact}
            settings={settings}
            drawerAction={() => setDrawer(!drawer)}
          />
        )}

        <div
          className={`w-full min-h-screen  ${
            childrenClasses || "pt-[30px] pb-[60px]"
          }`}
        >
          {children && children}
        </div>
        {subscribeData && <DiscountBanner datas={subscribeData} />}

        {themeSetting && themeSetting.selected_theme === "theme1" && (
          <Footer settings={settings} />
        )}

        {themeSetting && themeSetting.selected_theme === "theme2" && (
          <FooterTheme2 settings={settings} />
        )}
      </div>
    </>
  );
}
