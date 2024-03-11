import SignIn from './auth/signin/page';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SiginIn",
  description: "This is Home for TailAdmin",
};

export default function Home() {
  return (
    <>
      <SignIn />
    </>
  );
}
