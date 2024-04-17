## User Stories

As a user, I want to see the best restaurant nearest to me and my friends, so we can meet up there.

As a user, I want to create an account, to be able to use the service reliably.

As a user, I want to be able to message my friends via the platform, to check if they find the selected location okay.

As a vegan, I want to see only vegan restaurants, so that I can always find good vegan spots for me and my friends.

As an admin, I want to view all users, so I can have an overview about everything.

As a long-distance couple, I want to find restaurants in between us, so that we have a similar arrival time.

As a busy professional, I want to find a convenient meeting point for dinner with my friends after work, so we can minimize travel time and enjoy our meal together.

As a student organizing a group outing, I need a tool to help us decide on a meeting place that is easily accessible to all members, considering our different locations across the city.

As a traveler exploring a new city with my companions, I want to discover local restaurants that are centrally located, allowing us to experience the local cuisine without spending too much time commuting.

As a parent arranging a gathering for my child's birthday party, I require a solution to find a meeting point that is suitable for families and within a reasonable distance for all attendees.

As a tour guide leading a group of tourists, I need a way to identify meeting points near popular attractions, ensuring that everyone can easily reconvene after exploring different areas.

As a event planner organizing a team-building activity, I'm looking for a tool to suggest meeting points with nearby restaurants that can accommodate a large group and cater to various dietary preferences.

As a fitness instructor arranging outdoor workouts for my clients, I want to find meeting points that are centrally located to minimize travel time and provide easy access to nearby parks or fitness facilities.

As a volunteer coordinating a community cleanup effort, I need a tool to help us determine meeting points for different teams of volunteers, considering factors like accessibility and proximity to cleanup sites.

As a group of friends planning a road trip, we want to find meeting points along our route where we can stop for meals, ensuring that no one has to travel far off course to meet up.

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