import React from "react";
import CustomPageCom from "../../src/components/CustomPageCom";
import { useRouter } from "next/router";

export default function PageWrap ()
{
  try {
    const router = useRouter();
  return (
    <>
      <CustomPageCom slug={router.query.custom} />
    </>
  );
  } catch (error) {
    console.log("router try catch error",error)
  }
  
}
