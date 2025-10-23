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
            className="
              flex items-center gap-2 w-full justify-center rounded-full
              bg-blue-100/30 dark:bg-blue-500/10
              hover:bg-blue-200/50 dark:hover:bg-blue-500/30
              transition-all
            "
          >
            <FileText className="size-4" /> Whitepaper
          </Button>

  );
}
