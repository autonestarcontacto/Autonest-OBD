
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setIsLoading(true);
            setTimeout(() => {
                 setMessages([{ sender: 'ai', text: '¡Hola! 🚗 Soy el asesor de Autonest. ¿En qué puedo ayudarte hoy? 💧' }]);
                 setIsLoading(false);
            }, 1000);
        }
    }, [isOpen, messages.length]);

    const handleSend = async () => {
        if (userInput.trim() === '' || isLoading) return;

        const newMessages: Message[] = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');
        setIsLoading(true);

        try {
            const aiResponse = await getAiResponse(userInput);
            setMessages([...newMessages, { text: aiResponse, sender: 'ai' }]);
        } catch (error: unknown) {
            setMessages([...newMessages, { text: 'Lo siento, hubo un error. Intenta de nuevo. 🔧', sender: 'ai' }]);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <div className={`fixed bottom-5 right-5 transition-all duration-300 z-40 ${isOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-autonest-blue text-white rounded-full p-4 shadow-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-autonest-blue"
                    aria-label="Abrir chat"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457.167-.92.22-1.392h.02c.006-.04.01-.079.014-.118.04-.386.075-.774.1-1.162M21 12a9 9 0 00-9-9c-5.186 0-9.428 4.146-9.428 9.283A12.978 12.978 0 003 21.169V21h.004c.109.02.217.04.324.06a4.5 4.5 0 004.84-2.233A9.002 9.002 0 0012 21c4.97 0 9-4.03 9-9z" />
                    </svg>
                </button>
            </div>

            <div className={`fixed bottom-5 right-5 w-[calc(100%-40px)] max-w-sm h-[70vh] max-h-[500px] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right z-40 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-autonest-dark text-white p-4 rounded-t-xl flex justify-between items-center">
                    <h3 className="font-bold text-lg">Asesor Virtual Autonest</h3>
                    <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex mb-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`rounded-xl px-4 py-2 max-w-[80%] ${msg.sender === 'user' ? 'bg-autonest-blue text-white rounded-br-none' : 'bg-gray-200 text-autonest-dark rounded-bl-none'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-gray-200 text-autonest-dark rounded-xl px-4 py-2 rounded-bl-none">
                                <span className="animate-pulse">...</span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t bg-white rounded-b-xl flex items-center">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Escribe tu pregunta..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-autonest-blue"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="ml-3 bg-autonest-orange text-white p-3 rounded-full hover:bg-orange-500 disabled:bg-gray-400 shrink-0">
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;
