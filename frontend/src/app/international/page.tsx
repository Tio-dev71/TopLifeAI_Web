import { Button } from "@/components/ui/button";
import { Plane, CalendarCheck, Home, FileText } from "lucide-react";

export default function InternationalPatientsPage() {
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Medical Tourism in Vietnam</h1>
          <p className="text-muted-foreground text-lg">World-class healthcare combined with premium hospitality and seamless travel support.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: <FileText className="w-6 h-6"/>, title: "1. Case Review", desc: "Submit medical records securely." },
            { icon: <CalendarCheck className="w-6 h-6"/>, title: "2. Treatment Plan", desc: "Remote consultation with specialists." },
            { icon: <Plane className="w-6 h-6"/>, title: "3. Arrival Support", desc: "Visa and airport pickup assistance." },
            { icon: <Home className="w-6 h-6"/>, title: "4. Care & Recovery", desc: "Premium accommodation and follow-up." }
          ].map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" className="rounded-full px-8">Submit Your Case for Review</Button>
        </div>
      </div>
    </div>
  );
}
