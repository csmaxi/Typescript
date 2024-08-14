// src/app/success/page.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Success = () => {
  const router = useRouter();

  useEffect(() => {
    // Lógica para desbloquear contenido
    localStorage.setItem('mercadopago-payment-status', 'approved');
    router.push('/');
  }, []);

  return (
    <div className="p-6 bg-green-100 min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">¡Pago Exitoso!</h1>
    </div>
  );
};

export default Success;
