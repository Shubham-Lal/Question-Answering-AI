import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.send("Hello from Code Helper AI");
});

app.post("/chat", (req, res) => {
    const question = req.body.question;
    openai
        .createCompletion({
            model: "text-davinci-003",
            prompt: question,
            max_tokens: 4000,
            temperature: 0,
        })
        .then((response) => {
            return response.data.choices?.[0].text;
        })
        .then(answer => {
            const array = answer
                ?.split("\n")
                ?.filter((value) => value)
                ?.map(value => value
                    .replace("?", "")
                    .replace(",", "")
                    .trim());
            return array;
        })
        .then((answer) => {
            res.json({
                answer: answer,
                prompt: question,
            });
        });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});