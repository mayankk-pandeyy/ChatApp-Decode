const chats = [
    {
      isGroupChat: false,
      users: [
        {
          name: "Aditya",
          email: "aditya@example.com",
        },
        {
          name: "Mayank",
          email: "mayank@example.com",
        },
      ],
      _id: "617a077e18c25468bc7c4dd4",
      chatName: "Aditya",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Guest User",
          email: "guest@example.com",
        },
        {
          name: "Pranav",
          email: "pranav@example.com",
        },
      ],
      _id: "617a077e18c25468b27c4dd4",
      chatName: "Pranav Patil",
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Anthony",
          email: "anthony@example.com",
        },
        {
          name: "Mayank",
          email: "mayank@example.com",
        },
      ],
      _id: "617a077e18c2d468bc7c4dd4",
      chatName: "Anthony",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Lakshay",
          email: "lakshay@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150716472c78",
      chatName: "Friends",
      groupAdmin: {
        name: "Lakshay",
        email: "lakshay@example.com",
      },
    },
    {
      isGroupChat: false,
      users: [
        {
          name: "Jane Doe",
          email: "jane@example.com",
        },
        {
          name: "Abhishek",
          email: "abhishek@example.com",
        },
      ],
      _id: "617a077e18c25468bc7cfdd4",
      chatName: "Abhishek",
    },
    {
      isGroupChat: true,
      users: [
        {
          name: "John Doe",
          email: "jon@example.com",
        },
        {
          name: "Mayank",
          email: "mayank@example.com",
        },
        {
          name: "Guest User",
          email: "guest@example.com",
        },
      ],
      _id: "617a518c4081150016472c78",
      chatName: "Chill Zone",
      groupAdmin: {
        name: "Guest User",
        email: "guest@example.com",
      },
    },
  ];

module.exports = {chats}