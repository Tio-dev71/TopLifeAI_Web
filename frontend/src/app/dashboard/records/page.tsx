import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload, FileImage, Stethoscope } from "lucide-react";

export default function HealthRecordsPage() {
  const records = [
    { id: 1, title: "Blood Test Results", date: "Jun 15, 2026", type: "LAB_RESULT", icon: <FileText className="w-5 h-5 text-blue-500" /> },
    { id: 2, title: "Chest X-Ray", date: "May 20, 2026", type: "X_RAY", icon: <FileImage className="w-5 h-5 text-purple-500" /> },
    { id: 3, title: "Cardiology Consultation", date: "Apr 10, 2026", type: "REPORT", icon: <Stethoscope className="w-5 h-5 text-primary" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Personal Health Records</h1>
        <Button className="flex items-center gap-2">
          <Upload className="w-4 h-4" /> Upload Record
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {records.map((record) => (
          <Card key={record.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center border">
                  {record.icon}
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  {record.type}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{record.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{record.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
