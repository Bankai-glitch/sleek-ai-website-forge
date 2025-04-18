
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit2, Settings, ExternalLink, Trash2, PlusCircle } from "lucide-react";

export interface Website {
  id: string;
  name: string;
  type: string;
  lastEdited: string;
  status: 'published' | 'draft';
  thumbnail: string;
}

const Dashboard = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: '1',
      name: 'My Business Website',
      type: 'Business',
      lastEdited: '2025-04-15',
      status: 'published',
      thumbnail: 'public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png',
    },
    {
      id: '2',
      name: 'E-commerce Store',
      type: 'E-commerce',
      lastEdited: '2025-04-10',
      status: 'draft',
      thumbnail: 'public/lovable-uploads/1fd922e9-789b-4a68-bc9e-cdee589ecd18.png',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedWebsites, setSelectedWebsites] = useState<string[]>([]);

  const filteredWebsites = websites.filter(website => 
    website.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    website.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleWebsiteSelection = (id: string) => {
    setSelectedWebsites(prev => 
      prev.includes(id) 
        ? prev.filter(webId => webId !== id) 
        : [...prev, id]
    );
  };

  const handleDeleteSelected = () => {
    setWebsites(prev => prev.filter(website => !selectedWebsites.includes(website.id)));
    setSelectedWebsites([]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Websites</h1>
            <Button className="bg-[#3B82F6] text-white hover:bg-blue-600">
              <PlusCircle className="h-4 w-4 mr-2" /> Create New Website
            </Button>
          </div>

          <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="relative w-full md:w-1/3">
                <Input
                  placeholder="Search websites..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-800 border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="flex items-center gap-2">
                {selectedWebsites.length > 0 && (
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={handleDeleteSelected}
                  >
                    <Trash2 className="h-4 w-4 mr-2" /> Delete Selected
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredWebsites.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400">No websites found. Create a new one to get started!</p>
              </div>
            ) : (
              filteredWebsites.map((website) => (
                <div 
                  key={website.id} 
                  className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-1/4 aspect-video md:aspect-square bg-gray-800 relative">
                    <img 
                      src={website.thumbnail} 
                      alt={website.name} 
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    />
                    {website.status === 'published' && (
                      <div className="absolute top-2 left-2 bg-green-600 text-xs text-white px-2 py-1 rounded">
                        Published
                      </div>
                    )}
                    {website.status === 'draft' && (
                      <div className="absolute top-2 left-2 bg-yellow-600 text-xs text-white px-2 py-1 rounded">
                        Draft
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2">
                      <Checkbox 
                        checked={selectedWebsites.includes(website.id)} 
                        onCheckedChange={() => toggleWebsiteSelection(website.id)}
                        className="border-white/50"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold text-white">{website.name}</h2>
                        <div className="text-xs text-gray-400">
                          Last edited: {website.lastEdited}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">Type: {website.type}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button size="sm" className="bg-[#3B82F6] hover:bg-blue-600">
                        <Edit2 className="h-4 w-4 mr-2" /> Edit
                      </Button>
                      <Button size="sm" variant="outline" className="border-gray-700">
                        <Settings className="h-4 w-4 mr-2" /> Settings
                      </Button>
                      {website.status === 'published' && (
                        <Button size="sm" variant="outline" className="border-gray-700">
                          <ExternalLink className="h-4 w-4 mr-2" /> Visit
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
