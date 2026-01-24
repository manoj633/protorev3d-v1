import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md border-white/10 bg-card/50 backdrop-blur-sm shadow-2xl rounded-none">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-20 w-20 text-destructive animate-pulse" strokeWidth={1} />
          </div>
          
          <h1 className="text-4xl font-bold font-mono-tech text-white">
            ERROR 404
          </h1>
          
          <p className="text-muted-foreground font-mono-tech text-sm uppercase tracking-widest">
            Module Not Found<br/>
            System Path Invalid
          </p>

          <div className="pt-6">
            <Link href="/">
              <Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest w-full">
                Reboot System
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
