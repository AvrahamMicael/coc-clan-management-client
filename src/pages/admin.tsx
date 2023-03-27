import AdminForm from "@/components/AdminForm";
import AdminPanel from "@/components/AdminPanel";
import useAdminCookieContext from "@/contexts/admin";
import { useRouter } from "next/router";
import useAPI from '../utils/useAPI';

type ResponseBody = { minAccessMsg: string };

const Admin = () => {
  const router = useRouter();
  const adminCookieContext = useAdminCookieContext();
  const { data: { minAccessMsg } } = useAPI<ResponseBody>('/admin');
  if(adminCookieContext.isAdmin)
    router.replace('/');
  return (
    <AdminPanel>
      <h2 className="text-capitalize text-center">admin</h2>
      <p className="text-center text-secondary">{ minAccessMsg }</p>
      <AdminForm/>
    </AdminPanel>
  );
};

export default Admin;
