 

import { NextResponse } from 'next/server';
import Stripe from 'stripe'; // Using ES6 imports for Stripe

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json(); // For App Router, get the body from req.json()

    const params = {
      submit_type: 'pay',
      mode: 'payment',
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      shipping_options: [
        { shipping_rate: 'shr_1ObW5mBPQ5aQy2Nc9BL5uJbk' },
      ],
      line_items: body.map((item) => {
        const img = item.image[0].asset._ref;
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

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create(params);

    return NextResponse.json(session, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: err.statusCode || 500 });
  }
}