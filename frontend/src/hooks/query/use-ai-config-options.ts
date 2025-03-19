import { useQuery } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";

const fetchAiConfigOptions = async () => ({
  models: await AgentMojo.getModels(),
  agents: await AgentMojo.getAgents(),
  securityAnalyzers: await AgentMojo.getSecurityAnalyzers(),
});

export const useAIConfigOptions = () =>
  useQuery({
    queryKey: ["ai-config-options"],
    queryFn: fetchAiConfigOptions,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 15, // 15 minutes
  });
