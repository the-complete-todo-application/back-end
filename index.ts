import server from "./src/server";

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n***Listening on Port ${port}***\n`));
