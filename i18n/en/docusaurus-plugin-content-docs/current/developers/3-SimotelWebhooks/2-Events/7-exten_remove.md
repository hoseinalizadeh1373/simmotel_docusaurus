---
sidebar_position: 2
---
# Exten Remove

When a user is removed from SimoTel, the ExtenRemoved event is triggered.


## Event Parameters
<div class="custom-table">

|                         Description                         | Defined Data | Sample Data   |    Parameter    |
|:----------------------------------------------------------:|:------------:|:-------------:|:---------------:|
|                       Event Name                           |      -       |  ExtenRemoved  | **event_name**  |
|                     Extension Number (user for whom the event was generated) |      -       |      559      |   **number**    |
|                       Extension State                      |      -       |  Unavailable  |    **state**    |
</div>

## Sample Output of Exten Removed Event



```shell
{
  "event_name": "ExtenRemoved",
  "exten": "77777",
  "state": "Unavailable"
}
```