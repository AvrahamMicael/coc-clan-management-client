type Props = { name: string, role: string, roleToPromote?: string };

const MemberNameRole = ({ name, role, roleToPromote }: Props) => {
  if(role == 'admin') role = 'elder';
  const formattedRole: string = roleToPromote ? `${roleToPromote} 🡢` : role;
  return (
    <div className="d-inline-block mx-2 position-relative text-nowrap">
      <span className="d-block special-text-outline position-relative">
        { name }
      </span>
      <span className="member-role position-relative role-position secondary-color text-capitalize">
        { formattedRole }
        {roleToPromote && ( 
          <span>{ role }</span>
        )}
      </span>
    </div>
  );
};

export default MemberNameRole;
