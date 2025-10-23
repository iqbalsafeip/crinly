import { Download, FileText } from "lucide-react";
import { Button } from "./ui/button";

export default function DownloadWhitepaper() {
  const handleDownload = () => {
    window.open("/Taggy_Whitepaper.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
  onClick={() => window.open("/Taggy_Whitepaper.pdf", "_blank", "noopener,noreferrer")}
  variant="ghost"
  className="ml-auto flex items-center gap-2 rounded-full px-4 py-2
             bg-gradient-to-r from-cyan-500/80 to-blue-600/80
             hover:from-cyan-400 hover:to-blue-500
             text-white shadow-md shadow-blue-900/30
             backdrop-blur-sm border border-white/10
             transition-all duration-300 ease-in-out"
>
  <FileText className="size-4 text-cyan-200" />
  <span className="font-medium tracking-wide">Download Whitepaper</span>
</Button>

  );
}
