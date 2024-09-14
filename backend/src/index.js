import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import connectDB from "./db/connectDB.js";
import { app } from "./app.js";

console.log("PORT:", process.env.PORT);
console.log("MONGODB_URI:", process.env.MONGODB_URI);
// Connect to the database
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app started at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err, "this is error");
  });

// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app started listening on ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR", error);
//     throw error;
//   }
// })();
