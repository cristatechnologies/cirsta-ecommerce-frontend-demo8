import { useRouter } from 'next/router';
import CustomPageCom from '../src/components/CustomPageCom';

const DynamicPage = () => {
  const router = useRouter();
  const customRouter = router.query.slug && `/${router.query.slug}`;
  
  return (
    <>
      <CustomPageCom slug={customRouter} />
    </>
  );
};

export default DynamicPage;
