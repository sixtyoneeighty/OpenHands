import { useQueryClient, useMutation } from "@tanstack/react-query";
import AgentMojo from "#/api/open-hands";
import { Conversation } from "#/api/open-hands.types";

export const useUpdateConversation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: {
      id: string;
      conversation: Partial<Omit<Conversation, "id">>;
    }) =>
      AgentMojo.updateUserConversation(variables.id, variables.conversation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "conversations"] });
    },
  });
};
