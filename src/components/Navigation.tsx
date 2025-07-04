
import { cn } from '@/lib/utils';

interface NavigationProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const Navigation = ({ activeView, setActiveView }: NavigationProps) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'chat', label: 'Sales Assistant' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-medium text-gray-900">BI Dashboard</div>
            
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    activeView === item.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
