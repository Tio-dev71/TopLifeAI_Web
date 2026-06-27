import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, Upload, Clock } from "lucide-react";

export default function InternationalDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">International Care & Travel</h1>
      
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Submit New Medical Case</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Condition</label>
                  <Input placeholder="e.g., Cardiology" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Travel Date</label>
                  <Input type="date" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Medical Records</label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 cursor-pointer">
                  <Upload className="w-8 h-8 mb-2 text-primary" />
                  <p>Click to upload or drag and drop</p>
                  <p className="text-xs">PDF, JPG, PNG up to 10MB</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="visa" className="rounded text-primary" />
                  <label htmlFor="visa" className="text-sm">Require Visa Support</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="pickup" className="rounded text-primary" />
                  <label htmlFor="pickup" className="text-sm">Require Airport Pickup</label>
                </div>
              </div>
              <Button className="w-full">Submit Case for Review</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Cases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border rounded-lg border-orange-200 bg-orange-50">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-orange-800">Case #8492</span>
                <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full flex items-center">
                  <Clock className="w-3 h-3 mr-1" /> Under Review
                </span>
              </div>
              <p className="text-sm text-orange-700">Cardiology Consultation</p>
              <div className="mt-4 pt-4 border-t border-orange-200 text-sm text-orange-800 flex items-center">
                <Plane className="w-4 h-4 mr-2" /> ETA: TBD
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
