import { useState } from "react";

export default function useExampleHook() {
  const [sample, setSample] = useState<string | null>("sample");
  return { sample, setSample };
}
