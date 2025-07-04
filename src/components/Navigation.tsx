
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
    <nav className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-medium text-gray-900 font-sf-hello">BI Dashboard</div>
            
            <div className="flex space-x-1 bg-white/40 backdrop-blur-lg rounded-2xl p-1.5 border border-white/30 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={cn(
                    "px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 font-sf-hello",
                    "backdrop-blur-sm border border-transparent",
                    activeView === item.id
                      ? "bg-white/90 text-gray-900 shadow-lg border-white/50 backdrop-blur-xl"
                      : "text-gray-600 hover:text-gray-900 hover:bg-white/50 hover:backdrop-blur-lg hover:border-white/30"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-200/80 to-gray-300/80 rounded-full backdrop-blur-sm border border-white/30"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
