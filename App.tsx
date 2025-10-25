import { LeadCard } from "./components/LeadCard";
import { Search, Filter } from "lucide-react";

const mockLeads = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Downtown, Miami",
    phone: "+1 (305) 555-0123",
    email: "sarah.mitchell@email.com",
    overallMatch: 78,
    scores: [
      { label: "Parking Space", score: 70 },
      { label: "Unit Size", score: 60 },
      { label: "Security", score: 54 },
      { label: "Location", score: 92 },
      { label: "Price Range", score: 85 },
      { label: "Amenities", score: 75 },
    ],
  },
  {
    id: "2",
    name: "Marcus Johnson",
    location: "Brickell, Miami",
    phone: "+1 (305) 555-0456",
    email: "marcus.j@email.com",
    overallMatch: 65,
    scores: [
      { label: "Parking Space", score: 80 },
      { label: "Unit Size", score: 72 },
      { label: "Security", score: 88 },
      { label: "Location", score: 45 },
      { label: "Price Range", score: 52 },
      { label: "Amenities", score: 68 },
    ],
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    location: "Coral Gables, Miami",
    phone: "+1 (305) 555-0789",
    email: "emma.rodriguez@email.com",
    overallMatch: 92,
    scores: [
      { label: "Parking Space", score: 95 },
      { label: "Unit Size", score: 88 },
      { label: "Security", score: 90 },
      { label: "Location", score: 94 },
      { label: "Price Range", score: 91 },
      { label: "Amenities", score: 93 },
    ],
  },
  {
    id: "4",
    name: "David Chen",
    location: "Wynwood, Miami",
    phone: "+1 (305) 555-0321",
    email: "david.chen@email.com",
    overallMatch: 45,
    scores: [
      { label: "Parking Space", score: 35 },
      { label: "Unit Size", score: 48 },
      { label: "Security", score: 42 },
      { label: "Location", score: 60 },
      { label: "Price Range", score: 38 },
      { label: "Amenities", score: 50 },
    ],
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-5 py-4">
          <h1 className="text-slate-900 mb-4">Leads</h1>
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors">
              <Filter className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Leads List */}
      <div className="max-w-md mx-auto px-5 py-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-slate-600">{mockLeads.length} leads found</p>
          <select className="text-sm text-slate-600 bg-transparent border border-slate-200 rounded-lg px-3 py-1.5">
            <option>Sort by: Match Score</option>
            <option>Sort by: Name</option>
            <option>Sort by: Location</option>
          </select>
        </div>
        
        <div className="space-y-4">
          {mockLeads.map((lead) => (
            <LeadCard key={lead.id} lead={lead} />
          ))}
        </div>
      </div>
    </div>
  );
}
