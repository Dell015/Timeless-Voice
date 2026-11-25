"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/actions";

export function LoginForm() {
  const [message, action, pending] = useActionState(login, "");
  return <form action={action} className="studio-login space-y-5">
    <label>Email address<input type="email" name="email" autoComplete="username" required /></label>
    <label>Password<input type="password" name="password" autoComplete="current-password" required /></label>
    <button className="btn" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</button>
    <p role="status" className="field-error">{message}</p>
  </form>;
}
