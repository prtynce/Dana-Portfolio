
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Sparkles, FlaskConical, Loader2, ArrowRight } from "lucide-react";
import { generateExperimentDescription } from "@/ai/flows/generate-experiment-description";
import { useToast } from "@/hooks/use-toast";

export function Lab() {
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [idea, setIdea] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!keyword) return;
    setLoading(true);
    try {
      const result = await generateExperimentDescription({ keywords: keyword });
      setIdea(result.description);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate an idea right now. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lab" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <FlaskConical className="w-4 h-4" />
              <span>DANA&apos;S LAB</span>
            </div>
            <h2 className="text-4xl font-headline font-bold mb-6">
              The <span className="text-primary">Experimental</span> Zone
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Explore my latest creative coding and tech experiments. Use my AI-powered tool to suggest future emerging concepts I should build!
            </p>

            <div className="glass-card p-8 rounded-3xl space-y-6">
              <h3 className="font-headline font-bold text-xl flex items-center gap-2">
                <Sparkles className="text-primary w-5 h-5" />
                AI Concept Generator
              </h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Enter keywords (e.g., &quot;Bionic Hand&quot;, &quot;Mars Rover&quot;, &quot;Smart City&quot;)
                </p>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter tech keywords..." 
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="rounded-full bg-background/50 border-primary/20 focus-visible:ring-primary"
                  />
                  <Button 
                    onClick={handleGenerate} 
                    disabled={loading || !keyword}
                    className="rounded-full gap-2 bg-primary px-6"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Suggest"}
                  </Button>
                </div>
              </div>

              {idea && (
                <div className="pt-6 animate-reveal">
                  <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 relative">
                    <p className="italic text-lg font-medium text-foreground">&quot;{idea}&quot;</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="glass-card p-8 rounded-3xl hover:border-primary transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FlaskConical className="text-primary" />
              </div>
              <h4 className="font-bold mb-2">Neural Art</h4>
              <p className="text-sm text-muted-foreground mb-4">Generative art systems using GANs and style transfer.</p>
              <Button variant="link" className="p-0 h-auto text-primary gap-1 group-hover:gap-2 transition-all">
                Try Demo <ArrowRight className="w-3 h-3" />
              </Button>
            </Card>

            <Card className="glass-card p-8 rounded-3xl hover:border-accent transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Brain className="text-accent" />
              </div>
              <h4 className="font-bold mb-2">Smart IoT Grid</h4>
              <p className="text-sm text-muted-foreground mb-4">Visualizing energy distribution in real-time city models.</p>
              <Button variant="link" className="p-0 h-auto text-accent gap-1 group-hover:gap-2 transition-all">
                Try Demo <ArrowRight className="w-3 h-3" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// Re-using Brain from Hero but it's okay to import locally if needed
import { Brain } from "lucide-react";
