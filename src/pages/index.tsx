import MemberLI from '@/components/MemberLI';
import { MemberWithAllData } from '@/types';
import useAPI from '@/utils/useAPI';
import HomePanel from '@/components/HomePanel/index';
import Spinner from '@/components/Spinner';
import WarningSVG from '@/components/WarningSVG';

export default function HomePage() {
  const { data: members, error, isLoading } = useAPI<MemberWithAllData[]>();
  if(error) return <WarningSVG message={ error?.message }/>
  if(isLoading) return <Spinner/>;
  return (
    <HomePanel>
      {members?.length ? (
        <ol className="member-list m-0 p-0">
          {members.map(member => (
            <MemberLI member={ member } key={ member.tag }/>
          ))}
        </ol>
      ) : (
        <h4 className='text-center mb-0'>Members not found!</h4>
      )}
    </HomePanel>
  );
}
