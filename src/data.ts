export type Product = { id: string; name: string; description: string; price: number; image: string; tag?: string }
export const products: Product[] = [
  { id: 'dark', name: 'Classic Dark Chocolate', description: 'Deep, smooth cocoa with a beautifully balanced finish.', price: 480, image: 'photo-1548907040-4d42daa6fd7b', tag: 'Bestseller' },
  { id: 'milk', name: 'Silky Milk Chocolate', description: 'A creamy, melt-in-the-moment kind of classic.', price: 420, image: 'photo-1606313564200-e75d5e30476c' },
  { id: 'nutty', name: 'Nutty Crunch Chocolate', description: 'Roasted almonds meet a delicate snap of chocolate.', price: 520, image: 'photo-1481391319762-47dff72954d9' },
  { id: 'assorted', name: 'Assorted Chocolate Gift Box', description: 'A little of everything lovely, ready to share.', price: 1190, image: 'photo-1549007994-cb92caebd54b', tag: 'Gift favourite' },
  { id: 'personalized', name: 'Personalized Chocolate Box', description: 'Your words, thoughtfully wrapped in chocolate.', price: 1490, image: 'photo-1606312619070-d48b4c652a52' },
  { id: 'corporate', name: 'Premium Corporate Gift Box', description: 'A considered thank-you for teams and clients.', price: 2190, image: 'photo-1511381939415-e44015466834' },
]
export const photo = (id: string, width = 800) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
export const formatPrice = (price: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)
