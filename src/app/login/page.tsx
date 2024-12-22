"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { Button } from "@/components/ui/button";

const SignIn: React.FC = (props) => {
  return (
    <div className="flex flex-col items-center  h-dvh gap-4 mt-6 ">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <Button onClick={() => signIn("google")}>Sign in with Google</Button>
    </div>
  );
};

export default SignIn;
