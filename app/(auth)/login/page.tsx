import { handleGithubLogin } from "@/lib/action";

//function for login page
export default async function LoginPage() {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Sign in with GitHub</button>
      </form>
    </div>
  );
}
