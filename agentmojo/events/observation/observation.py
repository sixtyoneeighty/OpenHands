from dataclasses import dataclass

from agentmojo.events.event import Event


@dataclass
class Observation(Event):
    content: str
