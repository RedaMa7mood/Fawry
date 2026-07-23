## Problem Understanding

The system represents a traffic radar that receives observations
from a physical radar.

Each observation contains:
- Plate number
- Date
- Car type
- Speed
- Seatbelt status

For every observation, the system evaluates a set of traffic rules.
An observation may produce zero or more violations.

If violations are found, a fine is created containing:
- The vehicle plate number
- The violated rules
- The fee of each violation
- The total amount

## Main Design Challenge

The main design challenge is to make the system extensible.

New traffic rules should be added without modifying the `QuRadar` class.

Therefore, the radar should not contain hardcoded conditions for every rule.
Instead, each rule is modeled as an independent object behind a common abstraction.

For example, adding a new `BusSpeedRule` should only require creating
a new rule implementation and registering it with the radar.
The existing `QuRadar` implementation should remain unchanged.



## Domain Model

### Observation

Represents one observation received from the physical radar.

Contains:
- Plate number
- Date
- Car type
- Speed
- Seatbelt status

### Rule

Represents a traffic rule that can evaluate an observation.

Each rule is responsible for determining whether the observation violates it.

### Violation

Represents a violation detected by a rule.

Contains:
- Rule name
- Description
- Fee

### Fine

Represents the fine generated for an observation.

Contains:
- Plate number
- List of violations
- Total amount

### QuRadar

Responsible for:
- Receiving observations
- Applying all registered rules
- Collecting violations
- Creating fines
- Providing fine-related queries

It does not contain the implementation details of individual rules.

## Class Diagram


![Class Diagram](./images/Class%20Diagram.png)