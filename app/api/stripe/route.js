import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15', // Atualize para a versão apropriada da API Stripe
});

export async function POST(req) {
  try {
    // Parse o corpo da requisição
    const body = await req.json();

    // Verifique se o corpo da requisição contém os dados necessários
    if (!body || !Array.isArray(body)) {
      throw new Error('Invalid request body. Expected an array of items.');
    }

    // Crie os parâmetros para a sessão do Stripe
    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1ObW5mBPQ5aQy2Nc9BL5uJbk' }, // Substitua pelo seu `shipping_rate`
      ],
      line_items: body.map((item) => {
        // Valide o item
        if (!item.image || !item.name || !item.price || !item.quantity) {
          throw new Error('Invalid item in request body.');
        }

        // Transforme a imagem do Sanity
        const img = item.image[0]?.asset?._ref;
        const newImage = img
          .replace('image-', 'https://cdn.sanity.io/images/vfxfwnaw/production/')
          .replace('-webp', '.webp');

        return {
          price_data: {
            currency: 'brl',
            product_data: {
              name: item.name,
              images: [newImage],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/canceled`,
    };

    // Cria a sessão do Stripe
    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    console.error('Stripe Error:', err.message); // Log para depuração
    return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
  }
}
