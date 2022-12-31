import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ChatSpriteWrapper = styled(Box)({
  padding: "15px",
  width: "100%",
  borderRadius: "5px",
  display: "flex",
  gap: 4,
});

export function AiChatSprite() {
  return (
    <ChatSpriteWrapper sx={{ backgroundColor: "#e0f7fa47" }}>
      Redis and Amazon Simple Queue Service (SQS) are both message brokers that
      can be used to manage tasks in a distributed system. They can both be used
      in combination with a task queue system like Celery to distribute
      workloads across multiple workers. Redis is an in-memory data structure
      store that can be used as a message broker. It is fast, lightweight, and
      easy to use, making it a popular choice for task queueing. Redis supports
      various data structures such as strings, hashes, lists, and sets, which
      can be used to store and manage tasks in the queue. On the other hand,
      Amazon SQS is a fully managed message queue service that enables you to
      decouple and scale microservices, distributed systems, and serverless
      applications. It can be used to send, store, and receive messages between
      software systems at any scale. SQS is a good choice if you need a robust,
      scalable, and highly available message queue service that can handle a
      large number of messages and is easy to set up and maintain. Both Redis
      and SQS can be used with Celery to manage tasks in a distributed system.
      The choice between the two depends on your specific requirements and use
      case. If you need a fast, lightweight, and easy-to-use message broker for
      task queueing, Redis may be the better choice. If you need a highly
      scalable and highly available message queue service, SQS may be a better
      fit.
    </ChatSpriteWrapper>
  );
}

export function HumanChatSprite() {
  return (
    <ChatSpriteWrapper fontWeight="bold" sx={{ backgroundColor: "#dcfff7" }}>
      <AccountCircleIcon
        sx={{ alignSelf: "flex-start", fontSize: "1.5rem", color: "#008a00" }}
      />
      redis vs sqs with celery
    </ChatSpriteWrapper>
  );
}
