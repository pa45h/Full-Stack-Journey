import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="outline" asChild>
        <Link href="/resumes">Resumes</Link>
      </Button>
    </main>
  );
}
