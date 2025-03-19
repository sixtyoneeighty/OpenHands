import { useQuery } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";

export const useConfig = () =>
  useQuery({
    queryKey: ["config"],
    queryFn: AgentMojo.getConfig,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 15, // 15 minutes
  });
