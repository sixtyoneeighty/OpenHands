import { useQuery } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";
import { useIsAuthed } from "./use-is-authed";

export const useUserConversations = () => {
  const { data: userIsAuthenticated } = useIsAuthed();

  return useQuery({
    queryKey: ["user", "conversations"],
    queryFn: AgentMojo.getUserConversations,
    enabled: !!userIsAuthenticated,
  });
};
