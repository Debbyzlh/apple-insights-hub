
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DateSelector } from '@/components/DateSelector';
import { AccountTab } from '@/components/compliance/AccountTab';
import { ResellerTab } from '@/components/compliance/ResellerTab';
import { SITab } from '@/components/compliance/SITab';
import { Tab4 } from '@/components/compliance/Tab4';
import { Tab5 } from '@/components/compliance/Tab5';

export const ComplianceScoring = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="space-y-6 font-sf-hello">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light text-gray-900">Daily Compliance Review</h2>
          <p className="text-gray-600 mt-1">Review and approve new client onboarding</p>
        </div>
        <div className="flex items-center space-x-4">
          <DateSelector 
            selectedDate={selectedDate} 
            onDateChange={setSelectedDate} 
          />
          <Input 
            placeholder="Search clients..." 
            className="w-64 border-gray-200 focus:border-gray-400 focus:ring-0"
          />
          <Button variant="outline" className="border-gray-200 hover:bg-gray-50">
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-white/60 backdrop-blur-xl border-white/30 shadow-lg">
          <TabsTrigger value="account" className="font-sf-hello">Account</TabsTrigger>
          <TabsTrigger value="reseller" className="font-sf-hello">Reseller</TabsTrigger>
          <TabsTrigger value="si" className="font-sf-hello">SI</TabsTrigger>
          <TabsTrigger value="tab4" className="font-sf-hello">Tab 4</TabsTrigger>
          <TabsTrigger value="tab5" className="font-sf-hello">Tab 5</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="mt-6">
          <AccountTab selectedDate={selectedDate} />
        </TabsContent>
        
        <TabsContent value="reseller" className="mt-6">
          <ResellerTab selectedDate={selectedDate} />
        </TabsContent>
        
        <TabsContent value="si" className="mt-6">
          <SITab selectedDate={selectedDate} />
        </TabsContent>
        
        <TabsContent value="tab4" className="mt-6">
          <Tab4 selectedDate={selectedDate} />
        </TabsContent>
        
        <TabsContent value="tab5" className="mt-6">
          <Tab5 selectedDate={selectedDate} />
        </TabsContent>
      </Tabs>
    </div>
  );
};
