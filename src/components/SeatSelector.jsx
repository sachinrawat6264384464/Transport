import React, { useState } from 'react';

const SeatSelector = ({ transport, onSeatSelect, bookedSeats = [] }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const isWindowSeat = (seatId) => {
        const seatLetter = seatId[0];
        return seatLetter === 'A' || seatLetter === 'D';
    };

    const toggleSeat = (seatId) => {
        if (bookedSeats.includes(seatId)) return;

        const newSelection = selectedSeats.includes(seatId)
            ? selectedSeats.filter((s) => s !== seatId)
            : [...selectedSeats, seatId];

        setSelectedSeats(newSelection);
        onSeatSelect(newSelection);
    };

    const renderSeat = (seatId) => {
        const isBooked = bookedSeats.includes(seatId);
        const isSelected = selectedSeats.includes(seatId);
        const isWindow = isWindowSeat(seatId);

        return (
            <div
                key={seatId}
                className={`
          w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center text-[10px] md:text-xs font-black transition-all duration-300 cursor-pointer border-b-4
          ${isBooked ? 'bg-slate-200 text-slate-400 border-slate-300 cursor-not-allowed' :
                        isSelected ? 'bg-primary-600 text-white border-primary-800 scale-105 shadow-lg shadow-primary-200' :
                            isWindow ? 'bg-white border-slate-200 text-slate-800 hover:border-primary-400' :
                                'bg-white border-slate-200 text-slate-800 hover:border-primary-400'}
        `}
                onClick={() => toggleSeat(seatId)}
                title={`${seatId} ${isWindow ? '(Window)' : ''} ${isBooked ? '- Booked' : ''}`}
            >
                {isSelected && <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>}
                {seatId}
            </div>
        );
    };

    const rows = 10;
    const layout = [];
    for (let r = 1; r <= rows; r++) {
        layout.push(
            <div className="flex justify-between items-center mb-3 group" key={r}>
                <div className="flex gap-2.5">
                    {renderSeat(`A${r}`)}
                    {renderSeat(`B${r}`)}
                </div>
                <div className="w-8 h-10 flex items-center justify-center">
                    <div className="w-px h-full bg-slate-100 group-hover:bg-primary-50 transition-colors"></div>
                </div>
                <div className="flex gap-2.5">
                    {renderSeat(`C${r}`)}
                    {renderSeat(`D${r}`)}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-[320px] mx-auto">
            <div className="flex justify-between items-center mb-10 px-4">
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center mb-2 text-xl opacity-50">🎡</div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Driver</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-2 text-xl">🚪</div>
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Entry</span>
                </div>
            </div>

            <div className="space-y-1">
                {layout}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-md border-2 border-slate-200"></div>
                    <span className="text-xs font-bold text-slate-500">Available</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-md bg-primary-600 shadow-md shadow-primary-200"></div>
                    <span className="text-xs font-bold text-slate-500">Selected</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-md bg-slate-200 border-b-2 border-slate-300"></div>
                    <span className="text-xs font-bold text-slate-500">Booked</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-md bg-white border-b-4 border-slate-200 flex items-center justify-center text-[6px] font-black">⭐</div>
                    <span className="text-xs font-bold text-slate-500">Window (+₹{transport.window_fare})</span>
                </div>
            </div>
        </div>
    );
};

export default SeatSelector;
