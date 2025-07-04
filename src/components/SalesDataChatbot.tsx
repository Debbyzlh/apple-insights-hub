
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const SalesDataChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your sales data assistant. I can help you analyze sales performance, client metrics, and compliance data. What would you like to know?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const quickQuestions = [
    'Show me this month\'s top performing clients',
    'What\'s our compliance success rate?',
    'Compare Q2 vs Q1 revenue',
    'Which clients need attention?'
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInput('');
  };

  const generateResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('top performing') || lowerQuestion.includes('best clients')) {
      return 'Based on current data, your top 3 performing clients this month are:\n\n1. TechCorp Industries - $420K revenue (94% compliance)\n2. Global Solutions Ltd - $380K revenue (88% compliance)\n3. Innovation Partners - $295K revenue (92% compliance)\n\nWould you like more details about any specific client?';
    }
    
    if (lowerQuestion.includes('compliance')) {
      return 'Current compliance metrics show:\n\n• Overall success rate: 94.2% (↑2.1% from last month)\n• Clients approved: 847 out of 899\n• Average processing time: 3.2 days\n• High-risk clients flagged: 12\n\nThe improvement is largely due to enhanced data validation processes.';
    }
    
    if (lowerQuestion.includes('revenue') || lowerQuestion.includes('q1') || lowerQuestion.includes('q2')) {
      return 'Q2 vs Q1 Revenue Comparison:\n\n• Q2 2024: $4.2M (↑8.5%)\n• Q1 2024: $3.87M\n• Growth: +$330K\n\nKey drivers:\n- New client acquisitions: +15%\n- Upselling existing clients: +12%\n- Reduced churn: -3%';
    }
    
    if (lowerQuestion.includes('attention') || lowerQuestion.includes('risk')) {
      return 'Clients requiring attention:\n\n🟡 Medium Priority (3 clients):\n• Beta Industries - Compliance review pending\n• Delta Corp - Payment 15 days overdue\n• Echo Systems - Contract renewal in 30 days\n\n🔴 High Priority (1 client):\n• Zeta Holdings - Multiple compliance issues, immediate action required';
    }
    
    return 'I understand you\'re asking about sales data. Could you be more specific? I can help with:\n\n• Client performance metrics\n• Compliance scoring and trends\n• Revenue analysis and comparisons\n• Risk assessment\n• Forecasting and predictions\n\nWhat specific aspect would you like to explore?';
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-light text-gray-900">Sales Data Assistant</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quick Questions */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Quick Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-3 border-gray-200 hover:bg-gray-50"
                  onClick={() => handleQuickQuestion(question)}
                >
                  <span className="text-sm">{question}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="lg:col-span-3 border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Chat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Messages */}
            <ScrollArea className="h-96 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.isUser ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about sales data, compliance, or client metrics..."
                className="flex-1 border-gray-200 focus:border-gray-400 focus:ring-0"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button 
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
