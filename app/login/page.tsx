"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Layout from "@/app/components/ui/Layout";
import PageHero from "@/app/components/ui/PageHero";
import Button from "@/app/components/ui/Button";

import { supabaseBrowser } from "@/app/lib/supabase-browser";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabaseBrowser.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <Layout>

      <PageHero
        eyebrow="Project Manji"
        title="Admin Login"
        description="Sign in to access the Project Manji dashboard."
      />

      <form
        onSubmit={handleLogin}
        className="mx-auto max-w-md space-y-6 rounded-3xl border border-red-600/20 bg-zinc-900 p-8"
      >

        <div>
          <label className="mb-2 block font-bold">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-red-600/20 bg-black p-4 outline-none focus:border-red-500"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-red-600/20 bg-black p-4 outline-none focus:border-red-500"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Login"}
        </Button>

      </form>

    </Layout>
  );
}