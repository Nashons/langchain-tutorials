import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import * as dotenv from 'dotenv';

dotenv.config()

const chat = new ChatOpenAI({ temperature: 0 });

// const response = await chat.call([
//     new HumanMessage(
//       "Translate this sentence from English to French. I love programming."
//     ),
//   ]);
  
//   console.log(response);


//multiple messages as input i.e SystemMessage and HumanMessage
//   const responseB = await chat.call([
//     new SystemMessage(
//       "You are a helpful assistant that translates English to spanish."
//     ),
//     new HumanMessage("Translate: I love programming."),
//   ]);
  
//   console.log(responseB);


  //multiple completions
  const responseC = await chat.generate([
    [
      new SystemMessage(
        "You are a helpful assistant that translates English to French."
      ),
      new HumanMessage(
        "Translate this sentence from English to French. I love programming."
      ),
    ],
    [
      new SystemMessage(
        "You are a helpful assistant that translates English to French."
      ),
      new HumanMessage(
        "Translate this sentence from English to French. I love artificial intelligence."
      ),
    ],
  ]);
  
  console.log(responseC.generations);