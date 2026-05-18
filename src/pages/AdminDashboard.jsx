import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Plus, Edit2, Trash2, Upload, Calendar, ShoppingBag } from 'lucide-react';

export const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dresses');
  const [dresses, setDresses] = useState([
    { id: 1, name: 'Midnight Elegance', category: 'Evening', price: '2,500', status: 'Available' },
    { id: 2, name: 'Ethereal Blush', category: 'Wedding', price: '3,800', status: 'Available' },
  ]);
  const [bookings, setBookings] = useState([
    { id: 1, name: 'Jane Doe', date: '2024-06-15', time: '10:00', service: 'Personal Consultation', status: 'Confirmed' },
    { id: 2, name: 'Sarah Smith', date: '2024-06-20', time: '14:00', service: 'Custom Design', status: 'Pending' },
  ]);
  const [newDress, setNewDress] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    designer: 'Élégance Studio',
  });
  const [showNewDressForm, setShowNewDressForm] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  const handleAddDress = (e) => {
    e.preventDefault();
    if (newDress.name && newDress.category && newDress.price) {
      setDresses([...dresses, { id: Date.now(), ...newDress, status: 'Available' }]);
      setNewDress({ name: '', category: '', price: '', description: '', designer: 'Élégance Studio' });
      setShowNewDressForm(false);
    }
  };

  const handleDeleteDress = (id) => {
    setDresses(dresses.filter(d => d.id !== id));
  };

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-padding container-max">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-serif font-light tracking-wide mb-2">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container-max">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('dresses')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all ${
                activeTab === 'dresses'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <ShoppingBag size={20} />
              <span className="text-sm font-semibold tracking-wide uppercase">Dresses</span>
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-all ${
                activeTab === 'bookings'
                  ? 'border-gray-900 text-gray-900'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <Calendar size={20} />
              <span className="text-sm font-semibold tracking-wide uppercase">Bookings</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="section-padding">
        <div className="container-max">
          {activeTab === 'dresses' && (
            <div>
              {/* Dresses Section */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h2 className="text-2xl font-serif font-light tracking-wide">
                  Collections
                </h2>
                <button
                  onClick={() => setShowNewDressForm(!showNewDressForm)}
                  className="luxury-button flex items-center gap-2"
                >
                  <Plus size={18} />
                  Add New Dress
                </button>
              </div>

              {/* Add Dress Form */}
              {showNewDressForm && (
                <div className="card-luxury p-8 mb-8">
                  <h3 className="text-xl font-serif font-light tracking-wide mb-6">
                    Add New Dress
                  </h3>
                  <form onSubmit={handleAddDress} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Dress Name"
                        value={newDress.name}
                        onChange={(e) => setNewDress({ ...newDress, name: e.target.value })}
                        required
                      />
                      <select
                        value={newDress.category}
                        onChange={(e) => setNewDress({ ...newDress, category: e.target.value })}
                        required
                      >
                        <option value="">Select Category</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Evening">Evening</option>
                        <option value="Cocktail">Cocktail</option>
                        <option value="Casual">Casual</option>
                      </select>
                      <input
                        type="number"
                        placeholder="Price"
                        value={newDress.price}
                        onChange={(e) => setNewDress({ ...newDress, price: e.target.value })}
                        required
                      />
                      <div className="flex items-center gap-2 px-4 py-2 border border-gray-300">
                        <Upload size={18} />
                        <input
                          type="file"
                          accept="image/*"
                          className="flex-1"
                        />
                      </div>
                    </div>
                    <textarea
                      placeholder="Description"
                      value={newDress.description}
                      onChange={(e) => setNewDress({ ...newDress, description: e.target.value })}
                      rows="3"
                    ></textarea>
                    <div className="flex gap-4">
                      <button type="submit" className="luxury-button">
                        Add Dress
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowNewDressForm(false)}
                        className="luxury-button-outline"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Dresses Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Name</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Category</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Price</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Status</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dresses.map((dress) => (
                      <tr key={dress.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4">{dress.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{dress.category}</td>
                        <td className="py-4 px-4 font-semibold">${dress.price}</td>
                        <td className="py-4 px-4">
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-semibold">
                            {dress.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                              <Edit2 size={18} className="text-gray-600" />
                            </button>
                            <button
                              onClick={() => handleDeleteDress(dress.id)}
                              className="p-2 hover:bg-red-100 rounded transition-colors"
                            >
                              <Trash2 size={18} className="text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'bookings' && (
            <div>
              {/* Bookings Section */}
              <h2 className="text-2xl font-serif font-light tracking-wide mb-8">
                Customer Bookings
              </h2>

              {/* Bookings Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Customer</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Date</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Time</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Service</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Status</th>
                      <th className="text-left py-4 px-4 font-semibold text-sm tracking-wide uppercase text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-4">{booking.name}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{booking.date}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{booking.time}</td>
                        <td className="py-4 px-4 text-sm text-gray-600">{booking.service}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                            booking.status === 'Confirmed'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-blue-100 rounded transition-colors">
                              <Edit2 size={18} className="text-blue-600" />
                            </button>
                            <button
                              onClick={() => handleDeleteBooking(booking.id)}
                              className="p-2 hover:bg-red-100 rounded transition-colors"
                            >
                              <Trash2 size={18} className="text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
