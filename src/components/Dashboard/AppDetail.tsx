import { Bell, MessageCircle, Search, Settings, Star, X } from "lucide-react";

export default function AppDetail() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-500" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          <button className="relative">
            <MessageCircle className="w-6 h-6 text-gray-500" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              25
            </span>
          </button>
          <button>
            <X className="w-6 h-6 text-gray-500" />
          </button>
          <span className="text-gray-700">Demo Company</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 overflow-y-auto">
          <div className="p-4">
            <button className="w-full bg-purple-700 text-white py-2 px-4 rounded">
              Start a meeting
            </button>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 bg-gray-200">
              <MessageCircle className="w-5 h-5 mr-3 text-gray-500" />
              Inbox
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700">
              <Star className="w-5 h-5 mr-3 text-gray-500" />
              Starred
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700">
              <Settings className="w-5 h-5 mr-3 text-gray-500" />
              History
            </a>
          </nav>
          <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-700">
            <span>CHANNELS</span>
            <div className="flex space-x-2">
              <button>
                <Settings className="w-4 h-4" />
              </button>
              <button>+</button>
            </div>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700">
              <span className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs mr-3">
                #
              </span>
              Administrators
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-700">
              <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-3">
                #
              </span>
              general
            </a>
          </nav>
          <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-700">
            <span>DIRECT MESSAGES</span>
            <button>+</button>
          </div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center px-4 py-2 text-gray-700">
              <img
                src="/placeholder.svg"
                width={20}
                height={20}
                alt="OdooBot"
                className="rounded-full mr-3"
              />
              OdooBot
            </a>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-gray-500" />
              <h1 className="text-xl font-semibold">Inbox</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-purple-600">Mark all read</button>
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-semibold mb-2">Your inbox is empty</h2>
            <p className="text-gray-500">
              <a href="#" className="text-blue-500">
                Change your preferences
              </a>{" "}
              to receive new notifications in your inbox.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
