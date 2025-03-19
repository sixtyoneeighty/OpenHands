import { useQuery } from "@tanstack/react-query";
import { useConfig } from "./use-config";
import AgentMojo from "#/api/open-hands";
import { BILLING_SETTINGS } from "#/utils/feature-flags";

export const useBalance = () => {
  const { data: config } = useConfig();

  return useQuery({
    queryKey: ["user", "balance"],
    queryFn: AgentMojo.getBalance,
    enabled: config?.APP_MODE === "saas" && BILLING_SETTINGS(),
  });
};
