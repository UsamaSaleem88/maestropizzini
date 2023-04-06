// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ success: true, data: [
    { image: '/pizza1.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '50.00' },
    { image: '/pizza2.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '90.00' },
    { image: '/pizza3.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '80.00' }, 
    { image: '/pizza4.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '70.00' }, 
    { image: '/pizza5.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '30.00' }, 
    { image: '/pizza6.png', name: 'Pizza Margeritta', desc: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', price: '22.00' }
  ] })
}
