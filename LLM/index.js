import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

import * as dotenv from 'dotenv';

//load environment variables
dotenv.config()

//////LLMs/////////
// const model = new OpenAI({ temperature: 0.9 });

// const res = await model.call("what would be a good idea to treat my girlfriend?")

// console.log(res)




///////TEMPLATES////////

//we define the prompt template
// const template = "What is a good name for a company that makes {product}?";
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ["product"],
// });

// //we call the format function to format it to 0ur needs and style
// const res = await prompt.format({ product: "colorful socks" });
// console.log(res);




///////CHAINS///////

// const model = new OpenAI({ temperature: 0.9 });
// const template = "What is a good name for a company that makes {product}?";
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ["product"],
// });

// const chain = new LLMChain({ llm: model, prompt: prompt });

// const res = await chain.call({ product: "colorful socks" });
// console.log(res);




////////STREAMING///////

// To enable streaming, we pass in `streaming: true` to the LLM constructor.
// Additionally, we pass in a handler for the `handleLLMNewToken` event.
// const chat = new OpenAI({
//   streaming: true,
//   callbacks: [
//     {
//       handleLLMNewToken(token) {
//         process.stdout.write(token);
//       },
//     },
//   ],
// });

// await chat.call("Write me a song about my crash.");




/////AGENTS//////

// const model = new OpenAI({ temperature: 0 });
// const tools = [
//   new SerpAPI(process.env.SERPAPI_API_KEY, {
//     location: "Austin,Texas,United States",
//     hl: "en",
//     gl: "us",
//   }),
//   new Calculator(),
// ];


// const executor = await initializeAgentExecutorWithOptions(tools, model, {
//     agentType: "zero-shot-react-description",
//   });
//   console.log("Loaded agent.");


// const input =
// "Who is Olivia Wilde's boyfriend?" +
// " What is his current age raised to the 0.23 power?";
// console.log(`Executing with input "${input}"...`);

// const result = await executor.call({ input });

// console.log(`Got output ${result.output}`);


//////MEMORY//////


const model = new OpenAI({});
const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });
const res1 = await chain.call({ input: "Hi! I'm Jim." });
console.log(res1);
const res2 = await chain.call({ input: "What's my name?" });
console.log(res2);
