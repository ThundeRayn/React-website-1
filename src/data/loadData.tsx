export const notifications = [
  "UserA leave an unread comment", "UserB replied you", "this is good"
]

export const annoucement = "The manager left some important annoucement for everyone to view. However the text here is reeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaally long if you don't wanna miss anything you should really scroll down a bit"
//export const annoucement = "That is just a joke"

export const milestones = [
    { id: 1, title: "Milestone not been started", type: "task goal", description: "some d", deadline: "2024/11/11", progress: 20 },
    { id: 2, title: "Milestone In Progress", type: "task goal", description: "some d", deadline: "2024/12/01", progress: 0 },
    { id: 3, title: "Milestone Completed", type: "revenue goal", amount: 2000, description: "some more detailed description", deadline: "2024/11/11", progress: 30 },
    { id: 4, title: "Milestone OverDue!", type: "task goal", description: "you have to explain us about this", deadline: "2024/08/20", progress: 100 }
  ];

//milestone
export const mstypes = ["task goal", "revenue goal"]

export const tasks = [
    { id: 1, title: "Task 1 to build dashboard", type: "M1", priority: "high", members: ["peopleA"], description: "some d", deadline: "a string", progress: 20 },
    { id: 2, title: "Task 2 to build milestone page", type: "M1", priority: "high", members: ["peopleA", "peopleB"], description: "some d", deadline: "a string", progress: 40 },
    { id: 3, title: "Task 3 to integrate our work", type: "M2", priority: "high", members: ["peopleA"], description: "some d", deadline: "a string", progress: 98 }
  ]

//tasks
export const tstypes = ["M1", "M2"]

//users
export const users = [
  {first_name: "Shirong", last_name: "tang", email: "shirong.tang@onedrug.co but really long name", position:"web developer", timezone:"EDT"}
]

