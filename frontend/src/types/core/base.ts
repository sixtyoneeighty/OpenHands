export type AgentMojoEventType =
  | "message"
  | "agent_state_changed"
  | "run"
  | "read"
  | "write"
  | "edit"
  | "run_ipython"
  | "delegate"
  | "browse"
  | "browse_interactive"
  | "reject"
  | "think"
  | "finish"
  | "error";

interface AgentMojoBaseEvent {
  id: number;
  source: "agent" | "user";
  message: string;
  timestamp: string; // ISO 8601
}

export interface AgentMojoActionEvent<T extends AgentMojoEventType>
  extends AgentMojoBaseEvent {
  action: T;
  args: Record<string, unknown>;
}

export interface AgentMojoObservationEvent<T extends AgentMojoEventType>
  extends AgentMojoBaseEvent {
  cause: number;
  observation: T;
  content: string;
  extras: Record<string, unknown>;
}
