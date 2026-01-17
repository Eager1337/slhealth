import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CreditCard, Phone, Check, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { toast } from "sonner";
import { Link, useSearchParams } from "react-router-dom";

const paymentMethods = [
  {
    id: "afrimoney",
    name: "Afrimoney",
    icon: "📱",
    color: "from-orange-500 to-orange-600",
    description: "Pay with Afrimoney mobile wallet",
  },
  {
    id: "orange",
    name: "Orange Money",
    icon: "🍊",
    color: "from-orange-400 to-yellow-500",
    description: "Pay with Orange Money",
  },
];

const Payment = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "50,000";
  const service = searchParams.get("service") || "Consultation";
  
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = async () => {
    if (!selectedMethod) {
      toast.error("Please select a payment method");
      return;
    }
    if (!phoneNumber || phoneNumber.length < 8) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    setPaymentSuccess(true);
    toast.success("Payment successful!");
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen pb-24">
        <Header />
        <main className="container px-4 pt-20 flex flex-col items-center justify-center min-h-[70vh]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-health-green to-primary flex items-center justify-center mb-6"
          >
            <Check className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold gradient-text mb-2"
          >
            Payment Successful!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center mb-8"
          >
            Your payment of Le {amount} for {service} has been confirmed.
          </motion.p>
          <Link to="/">
            <Button variant="glow" size="lg">Back to Home</Button>
          </Link>
        </main>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/teleconsultation" className="flex items-center gap-2 text-muted-foreground mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          
          <h1 className="text-2xl font-bold mb-2">
            <span className="gradient-text">Payment</span>
          </h1>
          <p className="text-muted-foreground mb-6">
            Complete your payment securely
          </p>

          {/* Amount Summary */}
          <div className="glow-card p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-semibold text-foreground">{service}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-2xl font-bold text-primary">Le {amount}</p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-primary" />
              Select Payment Method
            </h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <motion.div
                  key={method.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`glow-card p-4 cursor-pointer transition-all ${
                    selectedMethod === method.id 
                      ? 'border-primary ring-2 ring-primary/30' 
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center text-2xl`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{method.name}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                    {selectedMethod === method.id && (
                      <Check className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Phone Number Input */}
          {selectedMethod && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                Enter Phone Number
              </h2>
              <div className="glow-card p-4">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">+232</span>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                    placeholder="73 095 177"
                    className="flex-1 bg-transparent border-none outline-none text-foreground text-lg"
                    maxLength={9}
                  />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                You will receive a payment prompt on your phone
              </p>
            </motion.section>
          )}

          {/* Pay Button */}
          <Button
            variant="glow"
            size="xl"
            className="w-full"
            onClick={handlePayment}
            disabled={!selectedMethod || !phoneNumber || isProcessing}
          >
            {isProcessing ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </span>
            ) : (
              `Pay Le ${amount}`
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Your payment is secured and encrypted
          </p>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Payment;
