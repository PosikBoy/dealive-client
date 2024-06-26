import ClientOrderPage from "@/components/screens/ClientOrderPage/ClientOrderPage";
import { NextPage } from "next";

type props = {
  params: {
    id: number;
  };
};

const page: NextPage<props> = ({ params }) => {
  const { id } = params;

  return <ClientOrderPage orderId={id} />;
};

export default page;
