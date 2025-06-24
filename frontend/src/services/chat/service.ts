import { CHAT_CONFIG } from "./config";
import { ChatResponse} from "@/interfaces";



export async function postChatRequest(question: string): Promise<ChatResponse> {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
        };

    const response = await fetch(`${CHAT_CONFIG.API_URL}${CHAT_CONFIG.ENDPOINTS.CHAT}`, requestOptions);
    return response.json();
}