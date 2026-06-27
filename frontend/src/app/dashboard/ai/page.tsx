"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, ShieldAlert } from "lucide-react";

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am your ToplifeAI Health Assistant. How can I help you with your health, nutrition, or lifestyle today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { role: "assistant", content: "I've analyzed your request. Based on your recent health metrics, I recommend increasing your water intake and trying a 15-minute meditation before bed to improve your sleep quality." }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-120px)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-2xl font-bold tracking-tight">AI Health Assistant</h1>
        <div className="flex items-center text-xs text-orange-600 bg-orange-50 p-2 mt-2 rounded-md border border-orange-200">
          <ShieldAlert className="w-4 h-4 mr-2" />
          Disclaimer: AI does not replace professional medical advice. Always consult with a doctor for serious conditions.
        </div>
      </div>

      <Card className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`p-4 rounded-2xl max-w-[80%] ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-white border shadow-sm'}`}>
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="p-4 bg-white border-t">
          <div className="relative">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your health..." 
              className="pr-12 h-12 bg-slate-50 border-slate-200"
            />
            <Button size="icon" className="absolute right-1 top-1 h-10 w-10" onClick={handleSend}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
