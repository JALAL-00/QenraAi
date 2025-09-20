"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";

export const AuthCard = () => {
  const [formType, setFormType] = useState<"login" | "signup">("signup");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-8 shadow-input bg-black/80 backdrop-blur-sm border border-white/10">
      <h2 className="font-bold text-xl text-neutral-200">
        Welcome to Qenra
      </h2>
      <p className="text-neutral-300 text-sm max-w-sm mt-2">
        {formType === "signup"
          ? "Create an account to experience the future of AI."
          : "Login to your account to continue."}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {formType === "signup" && (
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="you@domain.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-800 to-zinc-900 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] hover:from-zinc-700 hover:to-zinc-800 transition-all duration-300"
          type="submit"
        >
          {formType === "signup" ? "Sign up" : "Login"} &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
            type="button"
          >
            <span className="text-neutral-300 text-sm">Continue with Google</span>
            <BottomGradient />
          </button>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
            type="button"
          >
            <span className="text-neutral-300 text-sm">Continue with Apple</span>
            <BottomGradient />
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-sm text-neutral-400">
        {formType === "signup" ? (
          <p>
            Already have an account?{" "}
            <button onClick={() => setFormType("login")} className="text-blue-400 hover:underline font-semibold">
              Login
            </button>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <button onClick={() => setFormType("signup")} className="text-blue-400 hover:underline font-semibold">
              Sign up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);