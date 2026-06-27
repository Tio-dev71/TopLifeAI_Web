"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { HeartPulse } from "lucide-react";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Đăng ký thất bại");
      }

      Cookies.set("access_token", data.access_token, { expires: 7 });
      Cookies.set("user", JSON.stringify(data.user), { expires: 7 });
      
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
        <div className="text-center">
          <HeartPulse className="mx-auto h-12 w-12 text-teal-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-slate-900">Đăng ký tài khoản</h2>
          <p className="mt-2 text-sm text-slate-600">
            Đã có tài khoản? <Link href="/login" className="font-medium text-teal-600 hover:text-teal-500">Đăng nhập</Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">{error}</div>}
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="sr-only">Họ</label>
                <Input id="firstName" name="firstName" type="text" required placeholder="Họ" className="h-12" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">Tên</label>
                <Input id="lastName" name="lastName" type="text" required placeholder="Tên" className="h-12" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email</label>
              <Input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Địa chỉ Email" className="h-12" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Mật khẩu</label>
              <Input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Mật khẩu" className="h-12" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full h-12 text-lg bg-teal-600 hover:bg-teal-700" disabled={loading}>
              {loading ? "Đang xử lý..." : "Tạo tài khoản"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
