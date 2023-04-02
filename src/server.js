require("express-async-errors")
const cors = require("cors");
const express = require ("express")
const sqliteConnection = require("./database/sqlite")
const routes = require("./routes")
const bodyParser = require("body-parser")

const uploadConfig = require("./configs/upload")
const AppError = require("./utils/AppError")
const app = express()


sqliteConnection()
app.use(cors());
app.use(express.json()) 
app.use(bodyParser.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))
app.use(routes)

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json ({
      status: "error",
      message: error.message
    })

  }
  console.log(error)
  return response.status(500).json({
    status: "error",
    message: "Voce estragou tudo"
  })
})

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}.`);
});
