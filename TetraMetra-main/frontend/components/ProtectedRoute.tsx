"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAdmin } from "@/lib/authHelper";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAdmin()) {
      router.push("/admin-login");
    }
  }, [router]);

  return isAdmin() ? <>{children}</> : null;
}
