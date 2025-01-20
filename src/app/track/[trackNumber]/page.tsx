"use client";

import TrackOrderByTrackNumberPage from "@/components/screens/TrackOrderByTrackNumberPage/TrackOrderByTrackNumberPage";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";

type props = {
  params: {
    trackNumber: string;
  };
};

const page: NextPage<props> = ({ params }) => {
  const { trackNumber } = params;
  const searchParams = useSearchParams();

  return (
    <TrackOrderByTrackNumberPage
      trackNumber={trackNumber}
      code={searchParams.get("code")}
    />
  );
};

export default page;
