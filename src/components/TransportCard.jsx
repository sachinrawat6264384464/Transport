import React from 'react';
import { Link } from 'react-router-dom';

const TransportCard = ({ transport }) => {
  return (
    <div className="glass-card hover:border-primary-500/50 transition-all duration-500 group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
        <img
          src={transport.image || `https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000`}
          alt={transport.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-600 text-xs font-bold rounded-full shadow-sm uppercase tracking-wider">
            {transport.vehicle_type}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20 text-left">
          <h3 className="text-xl font-bold text-white mb-1 leading-tight">{transport.name}</h3>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <span>⭐ 4.8</span>
            <span>•</span>
            <span className={`${transport.seats_available < 5 ? 'text-rose-400 font-black animate-pulse' : ''}`}>
              {transport.seats_available < 5 ? `Hurry! Only ${transport.seats_available} left` : `${transport.seats_available} seats available`}
            </span>
          </div>
          <div className="flex gap-1 mt-2">
            {transport.operating_days?.split(',').slice(0, 3).map(day => (
              <span key={day} className="text-[8px] font-black px-1.5 py-0.5 bg-white/10 rounded uppercase">
                {day}
              </span>
            ))}
            {transport.operating_days?.split(',').length > 3 && <span className="text-[8px] font-black text-white/50">+</span>}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="text-left">
            <div className="text-2xl font-black text-slate-900 leading-none">₹{transport.fare}</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-1">Starting from</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-slate-900">{transport.from_city} → {transport.to_city}</div>
            <div className="text-xs text-slate-500 mt-1">Direct Journey</div>
          </div>
        </div>

        <div className="flex gap-2">
          <Link
            to={`/transport/${transport.id}`}
            className="flex-1 btn-primary py-2.5 text-center text-sm"
          >
            View Details
          </Link>
          <div className="flex items-center gap-1">
            <a
              href={`https://wa.me/${transport.whatsapp}`}
              className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors"
              title="WhatsApp"
            >
              💬
            </a>
            <a
              href={`tel:${transport.phone}`}
              className="p-2.5 bg-primary-50 text-primary-600 rounded-xl hover:bg-primary-100 transition-colors"
              title="Call"
            >
              📞
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportCard;
