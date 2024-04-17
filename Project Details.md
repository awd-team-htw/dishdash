## User Stories

## Implementation of Features

- one or more model class can be created, read, updated and deleted

Created: In the Meating Point App, users can create a new group for a specific activity, such as "Dinner with Friends". When creating a group, they provide details like the activity name and the geographical locations (e.g., latitude and longitude) of each group member.

Read: After creating a group, users can view the details of existing groups they are a part of. They can see the activity name and the list of group members along with their geographical locations.

Updated: If there's a change in the group's plan or if new members join, users can update the group details accordingly. For example, they can edit the activity name or add/remove members from the group. Each time a change is made, the central meeting point is recalculated based on the updated group information.

Deleted: Users have the option to delete a group if they no longer need it. For instance, if the dinner plans are canceled or if the group decides to meet elsewhere, the group organizer can delete the group from the app. Deleting the group removes it from the system and stops any further notifications or calculations related to that group.

- a user model with user authentication is implemented

This can be done through user accounts.
Possibly, users can enter options like "vegan", so that the algorithm can check for vegan restaurants.

- some form of real-time communication is supported (e.g. a chat or notification service)

This can be done through a Group Chat, or via voting on which restaurant people should go to.

- a REST API is available to retrieve data in a JSON format

Will be done with basic requests.