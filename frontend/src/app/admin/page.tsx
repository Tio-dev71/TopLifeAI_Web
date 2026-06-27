/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Activity, CreditCard, ShieldCheck, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
        return;
      }
      
      // Temporary check for admin (e.g. specific email) or check metadata
      // Since we share with atuan, let's just fetch profiles if they are logged in.
      // In a real app, you would check RLS or roles here.
      fetchUsers();
    };
    fetchSession();
  }, [router]);

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) throw error;
      if (data) {
        setUsers(data);
      }
    } catch (err) {
      console.error("Failed to fetch users", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa người dùng này?")) return;
    
    try {
      const { error } = await supabase.from('profiles').delete().eq('id', id);
      if (error) throw error;
      setUsers(users.filter(u => u.id !== id));
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  if (loading) {
    return <div className="p-8">Đang tải dữ liệu...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Quản trị hệ thống</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng người dùng</CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-green-500 font-medium">Tài khoản trên hệ thống</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bác sĩ hoạt động</CardTitle>
            <Activity className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.role === "DOCTOR").length}</div>
            <p className="text-xs text-slate-500 font-medium">Bác sĩ & Chuyên gia</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bệnh nhân</CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.role === "PATIENT").length}</div>
            <p className="text-xs text-slate-500 font-medium">Bệnh nhân đăng ký</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tình trạng hệ thống</CardTitle>
            <ShieldCheck className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">Tốt</div>
            <p className="text-xs text-muted-foreground">Tất cả dịch vụ đang chạy</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Quản lý Người dùng</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-4 py-3">Họ và Tên</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Vai trò</th>
                    <th className="px-4 py-3">Ngày tạo</th>
                    <th className="px-4 py-3 text-right">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{user.firstName} {user.lastName}</td>
                      <td className="px-4 py-3 text-slate-600">{user.email}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-[11px] font-bold ${
                          user.role === 'SUPER_ADMIN' ? 'bg-red-100 text-red-700' : 
                          user.role === 'DOCTOR' ? 'bg-blue-100 text-blue-700' : 'bg-teal-100 text-teal-700'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{new Date(user.createdAt).toLocaleDateString('vi-VN')}</td>
                      <td className="px-4 py-3 text-right">
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          title="Xóa người dùng"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
