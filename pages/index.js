import PageHead from "../src/components/Helpers/PageHead";
import StorePage from "../src/components/Store";
import StorePageThemeTwo from "../src/components/StoreThemeTwo";
import settings from "../utils/settings";

export default function HomePage({ data }) {
  const { seoSetting } = data;
  const { selected_theme } = settings();

  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      {/* < homepageData={data} /> */}
      {/* {selected_theme === 'theme1' &&
        <StorePage homepageData={data} />} */}

      {selected_theme === 'theme1' &&
        <StorePageThemeTwo homepageData={data} />}
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/`);
  const data = await res.json();
  return { props: { data } };
}
