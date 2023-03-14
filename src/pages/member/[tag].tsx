import { useRouter } from "next/router";
import Panel from "@/components/Panel";
import MemberProfile from "@/components/MemberProfile";
import useAPI from "@/utils/useAPI";
import { MemberOnlyWithAllData } from "@/types";
import Spinner from "@/components/Spinner";
import WarningSVG from "@/components/WarningSVG";

type Query = { tag: string };

export default function Member() {
  const router = useRouter();
  const { tag } = router.query as Query;
  const { data: member, error, isLoading } = useAPI<MemberOnlyWithAllData>(`/member/${tag}`);
  if(error) return <WarningSVG message={ error?.message }/>;
  if(isLoading) return <Spinner/>;
  return (
    <Panel>
      <MemberProfile member={ member }/>
    </Panel>
  );
}
