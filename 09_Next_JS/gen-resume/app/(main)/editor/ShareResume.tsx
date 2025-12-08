import { Button } from "@/components/ui/button";
import { ResumeValues } from "@/lib/validation";
import { Copy, Share2 } from "lucide-react";
import { toast } from "sonner";

interface ShareResumeProps {
  resume: ResumeValues;
}

function ShareResume({ resume }: ShareResumeProps) {
  const handleClick = async () => {
    try {
      const shareableLink = `${window.location.origin}/shared/${resume.id}`;
      await navigator.clipboard.writeText(shareableLink);
      toast.success("Shareable link copied to clipboard!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to copy link.");
    }
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      title="Copy Shareable Link"
      onClick={handleClick}
      className="hover:bg-secondary cursor-pointer transition-transform hover:translate-x-1.5"
    >
      <Copy className="size-5" />
    </Button>
  );
}

export default ShareResume;
