import { useRouter } from "next/router";
import Panel from "@/components/Panel";
import MemberProfile from "@/components/MemberProfile";
import useAPI from "@/utils/useAPI";
import { MemberOnlyWithAllData } from "@/types";

type Query = { tag: string };

export default function Member() {
  const router = useRouter();
  const { tag } = router.query as Query;
  const { data: member } = useAPI<MemberOnlyWithAllData>(`/member/${tag}`);
  return (
    <Panel>
      <MemberProfile member={ member }/>
    </Panel>
  );
}
