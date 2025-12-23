import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookingConfirmation = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center text-center animate-fade">
      <div className="w-full max-w-lg p-16 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-5xl text-white mx-auto mb-8">✓</div>
        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-slate-400 mb-8">Your journey is secured. A confirmation email has been sent.</p>

        <div className="my-8 p-6 bg-white/5 rounded-lg flex flex-col gap-2">
          <span className="text-sm text-slate-400 uppercase tracking-wider">Booking Reference</span>
          <strong className="text-2xl text-blue-500">#TR-{id}-{Math.floor(Math.random() * 10000)}</strong>
        </div>

        <div className="text-left my-8">
          <h3 className="text-lg font-bold mb-4">Next Steps</h3>
          <ul className="list-disc pl-6 text-slate-400 space-y-2">
            <li>Contact operator for specific pickup location.</li>
            <li>Arrive 15 minutes before departure.</li>
            <li>Keep a screenshot of this page.</li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors" onClick={() => window.print()}>Print / Download PDF</button>
          <Link to="/" className="text-slate-400 hover:text-white transition-colors">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
