import { Download, FileText, Package, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FileItem {
  name: string;
  description: string;
  size: string;
  url: string;
  icon: React.ReactNode;
}

const files: FileItem[] = [
  {
    name: "MyApp_v1.2.apk",
    description: "Android application package",
    size: "24.5 MB",
    url: "#",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    name: "MyApp_v1.2.ipa",
    description: "iOS application package",
    size: "31.2 MB",
    url: "#",
    icon: <Package className="h-5 w-5" />,
  },
  {
    name: "README.txt",
    description: "Installation instructions",
    size: "2 KB",
    url: "#",
    icon: <FileText className="h-5 w-5" />,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated gradient background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[120px] animate-pulse [animation-delay:1s]" />
      </div>

      <div className="relative mx-auto max-w-xl px-4 py-20">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 text-primary">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Sideload Files
            </h1>
            <p className="text-sm text-muted-foreground">
              Grab the files you need below.
            </p>
          </div>
        </div>

        {/* File list */}
        <div className="space-y-3">
          {files.map((file) => (
            <Card
              key={file.name}
              className="group border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_30px_-10px_hsl(270_80%_60%/0.25)]"
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    {file.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {file.description} · {file.size}
                    </p>
                  </div>
                </div>
                <Button
                  size="sm"
                  asChild
                  className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <a href={file.url} download>
                    <Download className="mr-1.5 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground/60">
          All files are provided as-is. Install at your own risk.
        </p>
      </div>
    </div>
  );
};

export default Index;
