import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const [cardData, setCardData] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    });

    const formattedNumber = () => {
        const num = cardData.number.padEnd(16, '•');
        return num.match(/.{1,4}/g)?.join(' ') || '•••• •••• •••• ••••';
    };

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            navigate(`/booking-confirmation/${id}`);
        }, 2500);
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-200/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Secure Payment</h1>
                        <p className="text-slate-500 font-medium mt-2 capitalize">Booking Reference: TR-{id}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Virtual Card Section */}
                        <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="relative group perspective-1000">
                                <div className="w-full aspect-[1.58/1] bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-8 text-white shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:rotate-y-12">
                                    {/* Card Chip */}
                                    <div className="w-12 h-10 bg-gradient-to-br from-amber-400 to-amber-200 rounded-lg mb-8 relative overflow-hidden">
                                        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-30">
                                            {[...Array(9)].map((_, i) => <div key={i} className="border border-black/20"></div>)}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="text-2xl font-mono tracking-[0.2em]">{formattedNumber()}</div>

                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Card Holder</div>
                                                <div className="text-lg font-bold truncate max-w-[180px]">{cardData.name || 'YOUR NAME'}</div>
                                            </div>
                                            <div className="space-y-1 text-right">
                                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Expires</div>
                                                <div className="text-lg font-bold">{cardData.expiry || 'MM/YY'}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className="absolute top-8 right-8 text-3xl opacity-20 italic font-black">VISA</div>
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl"></div>
                                </div>
                            </div>

                            <div className="glass-card p-6 bg-white/50 space-y-4">
                                <div className="flex items-center gap-4 text-slate-600">
                                    <span className="text-2xl text-primary-600">🛡️</span>
                                    <div>
                                        <div className="text-sm font-bold">End-to-End Encryption</div>
                                        <p className="text-xs text-slate-400">Your card data is processed securely and never stored.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Payment Form */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="glass-card p-10 bg-white">
                                <form onSubmit={handlePayment} className="space-y-6">
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Full Name on Card</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Rahul Sharma"
                                            required
                                            className="input-premium"
                                            onChange={(e) => setCardData({ ...cardData, name: e.target.value.toUpperCase() })}
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Card Number</label>
                                        <input
                                            type="text"
                                            placeholder="0000 0000 0000 0000"
                                            maxLength="16"
                                            required
                                            className="input-premium font-mono tracking-widest"
                                            onChange={(e) =>
                                                setCardData({ ...cardData, number: e.target.value.replace(/\D/g, '').slice(0, 16) })
                                            }
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="group">
                                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Expiry (MM/YY)</label>
                                            <input
                                                type="text"
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                required
                                                className="input-premium"
                                                onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                                            />
                                        </div>
                                        <div className="group">
                                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">CVC</label>
                                            <input
                                                type="password"
                                                placeholder="•••"
                                                maxLength="4"
                                                required
                                                className="input-premium"
                                                onChange={(e) => setCardData({ ...cardData, cvc: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="btn-primary w-full py-4 text-lg mt-4 flex items-center justify-center gap-3"
                                    >
                                        {isProcessing ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>Verifying...</span>
                                            </>
                                        ) : (
                                            <span>Authorize Payment</span>
                                        )}
                                    </button>
                                </form>

                                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center gap-6 grayscale opacity-40">
                                    <div className="font-black text-slate-900 border border-slate-900 px-2 rounded italic text-sm">VISA</div>
                                    <div className="font-black text-slate-900 border border-slate-900 px-2 rounded italic text-sm uppercase">Mastercard</div>
                                    <div className="font-black text-slate-900 border border-slate-900 px-2 rounded italic text-sm">RuPay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
