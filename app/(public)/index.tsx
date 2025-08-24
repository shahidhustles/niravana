import { SignIn } from "@/components/clerk/SignIn";
import Gradient from "@/components/gradient";

export default function Index() {
  return (
    <>
      <SignIn scheme="numa" signUpUrl="/sign-up" homeUrl="(protected)"/>
    </>
  );
}
