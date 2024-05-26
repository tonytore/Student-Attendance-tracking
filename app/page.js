"use client";

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-2">
      <h1>student attendance tracking</h1>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </main>
  );
}
