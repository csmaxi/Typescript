import React, { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const MercadoPagoWallet: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY!, { locale: 'es-AR' });

    const createPreference = async () => {
      try {
        const response = await fetch('/api/mercadopago', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: 'Curso Completo de TypeScript',
            price: 5, // Precio en ARS
            quantity: 1,
          }),
        });

        if (!response.ok) {
          throw new Error('Error al crear la preferencia de pago');
        }

        const data = await response.json();

        if (data.id) {
          setPreferenceId(data.id);
        }
      } catch (error) {
        console.error('Error al crear la preferencia:', error);
      }
    };

    createPreference();
  }, []);

  useEffect(() => {
    if (preferenceId) {
      onSuccess();
    }
  }, [preferenceId, onSuccess]);

  return (
    <div>
      {preferenceId ? (
        <Wallet initialization={{ preferenceId }} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default MercadoPagoWallet;
