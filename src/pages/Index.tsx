import { Download, FileText, Package, Smartphone } from "lucide-react";
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
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="mb-2 text-2xl font-semibold text-foreground">
          Sideload Files
        </h1>
        <p className="mb-8 text-muted-foreground">
          Download files for sideloading onto your device.
        </p>

        <div className="space-y-3">
          {files.map((file) => (
            <Card key={file.name}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    {file.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {file.description} · {file.size}
                    </p>
                  </div>
                </div>
                <Button size="sm" asChild>
                  <a href={file.url} download>
                    <Download className="mr-1.5 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
