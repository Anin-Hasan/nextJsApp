import { signIn } from "@/lib/auth";

//function for login page
export default function LoginPage() {
  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Sign in with GitHub</button>
      </form>
    </div>
  );
}
