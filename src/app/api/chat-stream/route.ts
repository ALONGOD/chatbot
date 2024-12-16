// import { last } from './../../../../node_modules/pdf-lib/src/utils/arrays';
import { ragChat } from "@/app/lib/rag-chat";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    const { messages, sessionId } = await req.json()
    const lastMessage = messages[messages.length - 1].content
    const response = await ragChat.chat(lastMessage, { streming: true, sessionId })
    console.log('response:', response)
}