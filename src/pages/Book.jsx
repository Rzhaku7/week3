import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone } from 'lucide-react';

export const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    'Personal Consultation',
    'Dress Fitting',
    'Custom Design',
    'Alterations',
    'Wedding Planning',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="section-padding bg-gray-50 border-b border-gray-200">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-serif font-light tracking-wide mb-4">
            Book Your Consultation
          </h1>
          <div className="divider-luxury"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl">
            Schedule a personal appointment with our design team to discuss your perfect dress.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding">
        <div className="container-max max-w-2xl">
          {isSubmitted ? (
            <div className="bg-gold-50 border-2 border-gold-600 rounded-lg p-8 md:p-12 text-center animate-fadeIn">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-serif font-light tracking-wide mb-3">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for booking. We'll contact you shortly to confirm your appointment.
              </p>
              <p className="text-sm text-gray-500">
                Check your email for confirmation details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold tracking-widest uppercase text-gray-900 mb-6">
                  Personal Information
                </h3>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (555) 123-4567"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold tracking-widest uppercase text-gray-900 mb-6">
                  Appointment Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                      <Calendar size={16} />
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2 flex items-center gap-2">
                      <Clock size={16} />
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Service */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2">
                    Service Type *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-8">
                <label className="block text-sm font-semibold tracking-wide text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your vision, preferences, or any special requests..."
                  rows="4"
                  className="w-full"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="luxury-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Booking...' : 'Confirm Booking'}
                </button>
                <button
                  type="reset"
                  className="luxury-button-outline"
                >
                  Clear Form
                </button>
              </div>

              {/* Note */}
              <p className="text-xs text-gray-500">
                * Required fields. We'll contact you within 24 hours to confirm your appointment.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-gray-50 border-t border-gray-200">
        <div className="container-max">
          <h2 className="text-3xl font-serif font-light tracking-wide mb-12 text-center">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-4xl font-serif font-light text-gold-600 mb-4">01</div>
              <h3 className="font-serif text-xl font-light tracking-wide mb-3">
                Consultation
              </h3>
              <p className="text-gray-600">
                Meet with our design expert to discuss your style, preferences, and vision for your dress.
              </p>
            </div>

            <div>
              <div className="text-4xl font-serif font-light text-gold-600 mb-4">02</div>
              <h3 className="font-serif text-xl font-light tracking-wide mb-3">
                Design & Planning
              </h3>
              <p className="text-gray-600">
                Our team creates custom sketches and discusses materials, colors, and embellishments.
              </p>
            </div>

            <div>
              <div className="text-4xl font-serif font-light text-gold-600 mb-4">03</div>
              <h3 className="font-serif text-xl font-light tracking-wide mb-3">
                Creation
              </h3>
              <p className="text-gray-600">
                Your dress is handcrafted with meticulous attention to detail over 4-8 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
