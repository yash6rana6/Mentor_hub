import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  if (!user || !user.id) {
    return <p>Unauthorized</p>;
  }

  return (
    <>
      <h3>Interview generation</h3>
      <Agent
        userName={user.name}
        userId={user.id}
        type="generate"
      />
    </>
  );
};

export default Page;
