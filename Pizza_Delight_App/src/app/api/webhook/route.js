import {Order} from "@/models/Order";

const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";
const STRIPE_SK="sk_test_51PaKMP2NBl7nlPECGR7Djg0TYA28izRn2GNgXfk5gcwcSQ4mTK5A7TsZoGvljoJhmxRkhx9YRxI7uOb3ZyCyJHza001HR9VWtt";

const stripe = require('stripe')(STRIPE_SK);

export async function POST(req) {
  const sig = req.headers.get('stripe-signature');
  let event;

  try {
    const reqBuffer = await req.text();
    const signSecret = process.env.STRIPE_SIGN_SECRET;
    event = stripe.webhooks.constructEvent(reqBuffer, sig, signSecret);
  } catch (e) {
    console.error('stripe error');
    console.log(e);
    return Response.json(e, {status: 400});
  }

  if (event.type === 'checkout.session.completed') {
    console.log(event);
    const orderId = event?.data?.object?.metadata?.orderId;
    const isPaid = event?.data?.object?.payment_status === 'paid';
    if (isPaid) {
      await Order.updateOne({_id:orderId}, {paid:true});
    }
  }

  return Response.json('ok', {status: 200});
}