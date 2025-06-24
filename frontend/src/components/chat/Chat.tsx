'use client'
import { useState, useRef, useEffect } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import { ChatIcon } from "@/components/ui/icons";
import { postChatRequest } from "@/services/chat/service";

interface Message {
	id: string;
	text: string;
	sender: 'user' | 'bot';
	timestamp: Date;
}

const Chat = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<Message[]>([
		{
			id: '1',
			text: "Hi! I'm Ivan's AI assistant. How can I help you learn more about him?",
			sender: 'bot',
			timestamp: new Date()
		}
	]);
	const [inputValue, setInputValue] = useState('');
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	const handleSendMessage = async () => {
		if (!inputValue.trim()) return;

		const userMessage: Message = {
			id: Date.now().toString(),
			text: inputValue.trim(),
			sender: 'user',
			timestamp: new Date()
		};

		setMessages(prev => [...prev, userMessage]);
		setInputValue('');
		setIsTyping(true);

		try {
			const response = await postChatRequest(inputValue);
			const botMessage: Message = {
				id: (Date.now() + 1).toString(),
				text: response.answer,
				sender: 'bot',
				timestamp: new Date()
			};

			setMessages(prev => [...prev, botMessage]);
		} catch (error) {
			console.error('Chat request failed:', error);
			const errorMessage: Message = {
				id: (Date.now() + 1).toString(),
				text: "Sorry, there was an error processing your request. Please try again.",
				sender: 'bot',
				timestamp: new Date()
			};

			setMessages(prev => [...prev, errorMessage]);
		} finally {
			setIsTyping(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	const formatTime = (date: Date) => {
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>
				<div className="fixed bottom-6 right-6 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-500 transition-all duration-300 cursor-pointer z-50">
					<ChatIcon className="w-6 h-6 text-white" />
				</div>
			</Dialog.Trigger>

			<Dialog.Portal>
				{/* <Dialog.Overlay className="fixed inset-0 bg-black/50  backdrop-blur-sm" /> */}
				
				<Dialog.Content className="fixed z-[9999] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
										 bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col
										 mx-4 sm:mx-0">
					
					{/* Header */}
					<div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
								<ChatIcon className="w-5 h-5 text-white" />
							</div>
							<div>
								<Dialog.Title className="font-semibold">Chat with Ivan</Dialog.Title>
								<p className="text-xs text-white/80">AI Assistant</p>
							</div>
						</div>
						<Dialog.Close asChild>
							<button className="text-white/80 hover:text-red-500 transition-colors">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</Dialog.Close>
					</div>

					{/* Messages */}
					<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
						{messages.map((message) => (
							<div
								key={message.id}
								className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
							>
								<div
									className={`max-w-[80%] rounded-2xl px-4 py-2 ${
										message.sender === 'user'
											? 'bg-cyan-500 text-white rounded-br-md'
											: 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
									}`}
								>
									<p className="text-sm">{message.text}</p>
									<p className={`text-xs mt-1 ${
										message.sender === 'user' ? 'text-cyan-100' : 'text-gray-500'
									}`}>
										{formatTime(message.timestamp)}
									</p>
								</div>
							</div>
						))}
						
						{isTyping && (
							<div className="flex justify-start">
								<div className="bg-white text-gray-800 rounded-2xl rounded-bl-md shadow-sm border px-4 py-2">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
										<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
										<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
									</div>
								</div>
							</div>
						)}
						
						<div ref={messagesEndRef} />
					</div>

					{/* Input */}
					<div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
						<div className="flex space-x-2">
							<input
								ref={inputRef}
								type="text"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyPress={handleKeyPress}
								placeholder="Type your message..."
								className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
								disabled={isTyping}
							/>
							<button
								onClick={handleSendMessage}
								disabled={!inputValue.trim() || isTyping}
								className="px-4 py-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
								</svg>
							</button>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export { Chat };
