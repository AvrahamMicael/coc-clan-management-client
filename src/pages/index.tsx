import { MemberWithAllData } from '@/types';
import useAPI from '@/utils/useAPI';
import dynamic from 'next/dynamic';

const MemberLI = dynamic(() => import('@/components/MemberLI'));
const HomePanel = dynamic(() => import('@/components/HomePanel/index'));

export default function HomePage() {
  const { data: members } = useAPI<MemberWithAllData[]>('/');
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
