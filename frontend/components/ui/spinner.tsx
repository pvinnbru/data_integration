import { cn } from "@/lib/utils";
import { ImSpinner8 } from "react-icons/im";

function Spinner({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return <ImSpinner8 className={cn("animate-spin", className)} />;
}

export { Spinner };
