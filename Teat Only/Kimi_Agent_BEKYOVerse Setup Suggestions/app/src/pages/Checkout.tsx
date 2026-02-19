import { useState } from 'react';
import { usePayment, courses } from '../contexts/PaymentContext';
import { useLanguage } from '../contexts/LanguageContext';

type PaymentMethod = 'kpay' | 'wave' | 'card';

interface CheckoutProps {
  courseId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export default function Checkout({ courseId, onClose, onSuccess }: CheckoutProps) {
  const { requestAccess, getCoursePrice } = usePayment();
  const { t } = useLanguage();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('kpay');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const course = courses.find(c => c.id === courseId);
  const price = getCoursePrice(courseId);

  const handlePayment = async () => {
    setIsProcessing(true);
    const success = await requestAccess(courseId);
    setIsProcessing(false);
    if (success) {
      setIsComplete(true);
      setTimeout(onSuccess, 2000);
    }
  };

  if (isComplete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="glass-card p-8 text-center max-w-md w-full animate-fade-in-up">
          <div style={{
            width: 80, height: 80, borderRadius: '50%',
            background: 'rgba(34,197,94,0.15)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1.5rem',
            border: '2px solid rgba(34,197,94,0.4)',
          }}>
            <i className="fas fa-circle-check" style={{ color: '#22c55e', fontSize: 36 }} />
          </div>
          <h3 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.8rem', marginBottom: 8 }}>{t('Payment Successful!', 'ငွေပေးချေမှု အောင်မြင်ပါသည်!')}</h3>
          <p style={{ color: 'var(--text-gray)', marginBottom: 12 }}>
            {t(`You now have full access to ${course?.name}`, `${course?.name} ကို အသုံးပြုခွင့် ရရှိပါပြီ`)}
          </p>
          <p style={{ color: 'var(--primary-red)', fontSize: '0.875rem' }}>{t('Redirecting to course...', 'သင်တန်းသို့ သွားနေသည်...')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div style={{ padding: '1.5rem 1.5rem 1.2rem', borderBottom: '1px solid var(--border-faint)', display: 'flex', alignItems: 'center', gap: 14 }}>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: '50%', border: '1px solid var(--border-faint)',
              background: 'transparent', color: 'var(--text-light)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--card-bg-hover)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>{t('Checkout', 'ငွေပေးချေရန်')}</h2>
        </div>

        <div className="p-6 space-y-6">
          {/* Course Summary */}
          <div className="p-4 rounded-xl bg-[var(--primary-red-dim)] border border-[var(--border-accent)]">
            <p className="text-sm text-[var(--text-gray)] mb-1">{t('Course', 'သင်တန်း')}</p>
            <h3 className="font-semibold mb-2">{course?.name}</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[var(--primary-red)]">
                {price.toLocaleString()} MMK
              </span>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <p className="text-sm font-medium mb-3">{t('Select Payment Method', 'ငွေပေးချေမှုစနစ် ရွေးချယ်ပါ')}</p>
            <div className="space-y-3">
              {/* KPay */}
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'kpay'
                  ? 'border-[var(--primary-red)] bg-[var(--primary-red-dim)]'
                  : 'border-[var(--border-faint)] hover:border-[var(--primary-red)]'
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="kpay"
                  checked={paymentMethod === 'kpay'}
                  onChange={() => setPaymentMethod('kpay')}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-lg bg-[#9C27B0] flex items-center justify-center text-white font-bold text-sm">
                  KPay
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{t('KBZ Pay', 'KBZ Pay')}</p>
                  <p className="text-sm text-[var(--text-gray)]">{t('Mobile wallet payment', 'မိုဘိုင်းလ် ဝေါလက်ဖြင့် ပေးချေရန်')}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'kpay' ? 'border-[var(--primary-red)]' : 'border-[var(--border-faint)]'
                  }`}>
                  {paymentMethod === 'kpay' && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-red)]" />}
                </div>
              </label>

              {/* Wave Pay */}
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'wave'
                  ? 'border-[var(--primary-red)] bg-[var(--primary-red-dim)]'
                  : 'border-[var(--border-faint)] hover:border-[var(--primary-red)]'
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="wave"
                  checked={paymentMethod === 'wave'}
                  onChange={() => setPaymentMethod('wave')}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white font-bold text-sm">
                  Wave
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{t('Wave Pay', 'Wave Pay')}</p>
                  <p className="text-sm text-[var(--text-gray)]">{t('Mobile wallet payment', 'မိုဘိုင်းလ် ဝေါလက်ဖြင့် ပေးချေရန်')}</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'wave' ? 'border-[var(--primary-red)]' : 'border-[var(--border-faint)]'
                  }`}>
                  {paymentMethod === 'wave' && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-red)]" />}
                </div>
              </label>

              {/* Card */}
              <label
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${paymentMethod === 'card'
                  ? 'border-[var(--primary-red)] bg-[var(--primary-red-dim)]'
                  : 'border-[var(--border-faint)] hover:border-[var(--primary-red)]'
                  }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <i className="fas fa-credit-card" style={{ fontSize: '1.2rem' }} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{t('Credit/Debit Card', 'Credit/Debit ကတ်')}</p>
                  <p className="text-sm text-[var(--text-gray)]">Visa, MasterCard, JCB</p>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[var(--primary-red)]' : 'border-[var(--border-faint)]'
                  }`}>
                  {paymentMethod === 'card' && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-red)]" />}
                </div>
              </label>
            </div>
          </div>

          {/* Phone Number for Mobile Payments */}
          {(paymentMethod === 'kpay' || paymentMethod === 'wave') && (
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('Phone Number (for payment confirmation)', 'ဖုန်းနံပါတ် (အတည်ပြုရန်)')}
              </label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="09XXX XXX XXX"
                className="input-field"
              />
            </div>
          )}

          {/* Card Details */}
          {paymentMethod === 'card' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Card Number</label>
                <div className="relative">
                  <i className="fas fa-credit-card" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-gray)' }} />
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="input-field pl-12"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('Expiry Date', 'သက်တမ်းကုန်ဆုံးရက်')}</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('CVC', 'CVC')}</label>
                  <div className="relative">
                    <i className="fas fa-lock" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-gray)' }} />
                    <input
                      type="password"
                      placeholder="123"
                      className="input-field pl-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing || (paymentMethod !== 'card' && !phoneNumber)}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <>
                <i className="fas fa-spinner" style={{ animation: 'spin 1s linear infinite' }} />
                {t('Processing...', 'လုပ်ဆောင်နေသည်...')}
              </>
            ) : (
              <>
                <i className="fas fa-lock" />
                {t('Pay', 'ပေးချေရန်')} {price.toLocaleString()} MMK
              </>
            )}
          </button>

          <p className="text-center text-xs text-[var(--text-gray)] flex items-center justify-center gap-1">
            <i className="fas fa-lock" style={{ fontSize: '0.7rem' }} />
            {t('Secure payment processing', 'လုံခြုံသော ငွေပေးချေမှုစနစ်')}
          </p>
        </div>
      </div>
    </div>
  );
}
