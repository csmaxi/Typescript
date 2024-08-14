import { NextResponse } from 'next/server';
import mercadopago from 'mercadopago';

// Configura las credenciales de MercadoPago
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const { title, price, quantity } = await request.json();

    // Crear la preferencia de pago
    const preference = {
      items: [
        {
          title: title,
          quantity: quantity || 1,
          currency_id: 'ARS',
          unit_price: price,
        },
      ],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/pending`,
      },
      auto_return: 'approved',
    };

    const response = await mercadopago.preferences.create(preference);

    return NextResponse.json({ id: response.body.id });
  } catch (error) {
    console.error('Error al crear la preferencia de Mercado Pago:', error);
    return NextResponse.json({ error: 'Error al crear la preferencia de Mercado Pago' }, { status: 500 });
  }
}
