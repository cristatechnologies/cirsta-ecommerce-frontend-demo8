import PageHead from "../src/components/Helpers/PageHead";
import StorePage from "../src/components/Store";

export default function HomePage({ data }) {
  const { seoSetting } = data;
  return (
    <>

      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      {/* < homepageData={data} /> */}
      <StorePage homepageData={data} />
    </>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/`);
  const data = await res.json();
  return { props: { data } };
}
