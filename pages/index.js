import PageHead from "../src/components/Helpers/PageHead";
import Home from "../src/components/Home";

export default function HomePage() {
  return (
    <>
      <PageHead
        title={'Home page'}
        metaDes={'Home page'}
      />
      <Home/>
    </>
  );
}
