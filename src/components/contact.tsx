
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, CheckCircle2, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("dana.retardo@engineer.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-6">Let&apos;s <span className="text-primary">Connect</span></h2>
            <p className="text-muted-foreground text-lg mb-10">
              Have a question or want to collaborate on a project? I&apos;m always open to new opportunities and interesting tech discussions.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group cursor-pointer" onClick={copyEmail}>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email me at</p>
                  <p className="text-lg font-bold flex items-center gap-2">
                    dana.retardo@engineer.com
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 opacity-30" />}
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Follow My Journey</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, label: "GitHub", color: "hover:bg-black" },
                    { icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                    { icon: Twitter, label: "Twitter", color: "hover:bg-sky-500" }
                  ].map((social) => (
                    <Button key={social.label} variant="outline" size="icon" className={cn("rounded-2xl transition-all hover:scale-110", social.color + " hover:text-white")}>
                      <social.icon className="w-5 h-5" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-reveal">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-2">Message Sent Successfully!</h3>
                <p className="text-muted-foreground mb-8">I&apos;ll get back to you within 24 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="rounded-full">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-2">Name</label>
                    <Input required placeholder="Your Name" className="rounded-2xl bg-background/50 border-primary/20 focus:ring-primary py-6" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-2">Email</label>
                    <Input required type="email" placeholder="Your Email" className="rounded-2xl bg-background/50 border-primary/20 focus:ring-primary py-6" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-2">Message</label>
                  <Textarea required placeholder="Tell me about your project..." className="rounded-3xl bg-background/50 border-primary/20 focus:ring-primary min-h-[150px] p-6" />
                </div>
                <Button disabled={loading} className="w-full rounded-2xl bg-primary hover:bg-primary/90 text-white h-14 font-headline text-lg gap-2 shadow-lg shadow-primary/30">
                  {loading ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
