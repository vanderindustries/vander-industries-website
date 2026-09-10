import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  if (!config.stripeSecretKey) {
    throw createError({ statusCode: 500, statusMessage: 'Stripe secret key not configured' })
  }

  const stripe = new Stripe(config.stripeSecretKey, {
    apiVersion: '2024-06-20',
  })

  const paymentIntent = await stripe.paymentIntents.create({
    amount: 50000, // $500.00 in cents
    currency: 'usd',
    description: 'Vander Industries — $500 Equipment Deposit',
    metadata: {
      company: 'Vander Industries',
      type: 'equipment_deposit',
    },
  })

  return { clientSecret: paymentIntent.client_secret }
})
