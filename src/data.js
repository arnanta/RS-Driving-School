// Single source of truth for site copy and numbers.
// Edit prices, reviews and contact details here — components just render this.

export const business = {
  name: 'RS Driving School',
  owner: 'Rahul Roy',
  tagline: 'Safe Drive, Safe Life',
  phonePrimary: '8240549507',
  phoneSecondary: '8100246384',
  whatsapp: '918240549507',
  location: 'Near Jayshree Post Office, Kolkata',
  hoursLabel: 'Mon – Sun',
  hoursValue: '6:00 – 5:00',
  rating: 5.0,
}

export const trustPoints = [
  { icon: 'instructor', label: 'Experienced Instructors' },
  { icon: 'vehicle', label: 'Well-Maintained Vehicles' },
  { icon: 'shield', label: 'Safe & Secure Training' },
  { icon: 'thumb', label: '100% Satisfaction Guarantee' },
]

export const services = [
  {
    icon: 'car',
    vehicle: 'car',
    title: 'Car Driving',
    tagline: 'Beginner to confident driver',
    body: '15–18 classes with 4 km of real road per class, plus traffic and parking practice. Optional AC vehicle.',
  },
  {
    icon: 'scooty',
    vehicle: 'scooty',
    title: 'Scooty Training',
    tagline: 'Perfect for first-time riders',
    body: '12 half-hour classes covering low-speed handling and traffic basics, three days a week.',
  },
  {
    icon: 'bike',
    vehicle: 'bike',
    title: 'Bike Training',
    tagline: 'Build balance and road awareness',
    body: '12 half-hour classes building balance and control from the ground up, then road practice.',
  },
]

export const licenceService = {
  title: 'Licence assistance, included in the Complete packages',
  body: 'Learner’s and permanent licence paperwork is handled alongside your lessons — one less queue to stand in.',
}

export const pricing = {
  car: {
    label: 'Car',
    note: '4 km of driving per class · AC add-on available',
    cols: 3,
    plans: [
      {
        name: 'Without Licence',
        classes: '15 classes',
        price: 4999,
        featured: false,
        features: ['15 on-road classes', '4 km driving per class', 'Traffic & parking practice'],
      },
      {
        name: 'Complete Licence',
        classes: '18 classes',
        price: 6999,
        featured: true,
        badge: 'Most booked',
        features: ['18 on-road classes', 'Learner’s + permanent licence handled', 'Test-day readiness check'],
      },
      {
        name: 'With Endorsement',
        classes: '18 classes',
        price: 7299,
        featured: false,
        features: ['18 on-road classes', 'Licence endorsement included', 'Full paperwork support'],
      },
    ],
    addOns: [{ label: 'AC vehicle add-on', value: '₹599' }],
  },
  bike: {
    label: 'Bike',
    note: '30-minute classes · 3 classes a week, alternate days',
    cols: 2,
    plans: [
      {
        name: 'Without Licence',
        classes: '12 classes',
        price: 4200,
        featured: false,
        features: ['12 classes, 30 min each', 'Balance, control & road practice'],
      },
      {
        name: 'Complete Licence',
        classes: '12 classes',
        price: 6200,
        featured: true,
        badge: 'Most booked',
        features: ['12 classes, 30 min each', 'Learner’s + permanent licence handled'],
      },
    ],
  },
  scooty: {
    label: 'Scooty',
    note: '30-minute classes · 3 classes a week, alternate days',
    cols: 2,
    plans: [
      {
        name: 'Without Licence',
        classes: '12 classes',
        price: 3600,
        featured: false,
        features: ['12 classes, 30 min each', 'Low-speed handling & traffic basics'],
      },
      {
        name: 'Complete Licence',
        classes: '12 classes',
        price: 5600,
        featured: true,
        badge: 'Most booked',
        features: ['12 classes, 30 min each', 'Learner’s + permanent licence handled'],
      },
    ],
  },
}

export const whyChooseUs = [
  {
    icon: 'instructor',
    title: 'Patient, one-to-one coaching',
    body: 'Every class is one-on-one and paced to you — reviewers consistently point to Rahul Roy’s patience as the reason nervous first-timers stick with it.',
  },
  {
    icon: 'shield',
    title: 'Built for first-attempt passes',
    body: 'Structured, test-ready practice — several students report passing their driving test on the first try.',
  },
  {
    icon: 'licence',
    title: 'Licence paperwork, handled',
    body: 'Learner’s and permanent licence formalities are folded into your course, so you’re not stuck in separate queues.',
  },
  {
    icon: 'tag',
    title: 'Transparent, fixed pricing',
    body: 'Every package lists its full class count and price up front on the pricing table — no surprise add-ons.',
  },
]

export const quotes = [
  {
    text: 'My instructor Rahul Roy sir has been a great guide and friend in my journey to be able to drive a car. Very learned and helpful — detailed explanation of everything you need to know.',
    author: 'Johan Harsh Dutta',
  },
  {
    text: 'Rahul is an exceptional instructor and a wonderful person. He trained both my wife and me, breaking down complex concepts so clearly that everything became easy to grasp. Passed the driving test on the first attempt.',
    author: 'Debabrato Halder',
  },
]

export const reviews = [
  {
    name: 'Arjun Ghosh',
    time: '2 months ago',
    text: 'Thankful that I enrolled here instead of any other motor school. Rahul Sir was really patient with me and guided me through all the tricks and intricacies of driving.',
  },
  {
    name: 'Piya Ds',
    time: '2 months ago',
    text: 'Rahul sir is a very polite and skilled teacher. Helps students learn driving without fear.',
  },
  {
    name: 'Sunny Dey',
    time: '2 months ago',
    text: 'Great experience with RS driving school. The training and support for obtaining my driving licence was smooth and hassle-free. Highly recommended.',
  },
  {
    name: 'Rupanjan Dhar',
    time: '2 months ago',
    text: 'Very good experience. Rahul sir was patient and his instructions were easy to follow. Would recommend.',
  },
  {
    name: 'Bikramjit Bhuiya',
    time: '1 month ago',
    text: 'The trainers are great. They mold the students in such a way that they can foster their own development.',
  },
  {
    name: 'Rony Suranjan',
    time: '1 month ago',
    text: 'Very good nature of the trainer. Explained everything with patience and always helped to learn to drive smoothly.',
  },
]

export const nav = [
  { href: '#services', label: 'Courses' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export const heroChecks = ['Beginner friendly', 'One-to-one lessons', 'Licence paperwork handled']

export const steps = [
  { title: 'Contact us', body: 'Call or WhatsApp and tell us what you want to learn.' },
  { title: 'Choose your package', body: 'Pick the car, bike or scooty plan that suits you — prices are listed up front.' },
  { title: 'Start training', body: 'Learn one-to-one with your instructor, at your own pace.' },
  { title: 'Drive with confidence', body: 'Build real road experience and be ready for your licence test.' },
]

export const faqs = [
  {
    q: 'Do I need any driving experience?',
    a: 'No. Classes are one-to-one and paced to you, and bike and scooty lessons start from balance and control. Many students come to us nervous about driving.',
  },
  {
    q: 'Which vehicles do you teach?',
    a: 'Car, bike and scooty. Licence assistance is available with each.',
  },
  {
    q: 'How many classes are in each course?',
    a: 'Car courses are 15 or 18 classes, with about 4 km of driving per class. Bike and scooty courses are 12 classes of 30 minutes, three days a week on alternate days.',
  },
  {
    q: 'How much does it cost?',
    a: 'Scooty courses start at ₹3,600, bike at ₹4,200 and car at ₹4,999. The full package list is in the pricing section. An AC vehicle for car classes is ₹599 extra.',
  },
  {
    q: 'Do you help with the learner’s and permanent licence?',
    a: 'Yes. The “Complete Licence” and “With Endorsement” packages include the learner’s and permanent licence paperwork.',
  },
  {
    q: 'When are classes held?',
    a: 'Every day, 7:00 to 20:00. Tell us your preferred time when you enquire.',
  },
  {
    q: 'Where are you located?',
    a: 'Near Jayshree Post Office, Kolkata. Use the location link in the contact section for directions.',
  },
  {
    q: 'How do I book?',
    a: 'Call, WhatsApp, or fill in the booking form — it opens WhatsApp with your details filled in. We’ll confirm your timing from there.',
  },
]

export const experienceOptions = ['Complete beginner', 'Some experience', 'Need confidence']
export const timeOptions = ['Morning (7–12)', 'Afternoon (12–4)', 'Evening (4–8)', 'Flexible']

export const courseOptions = [
  'Car — Without Licence',
  'Car — Complete Licence',
  'Car — With Endorsement',
  'Bike — Without Licence',
  'Bike — Complete Licence',
  'Scooty — Without Licence',
  'Scooty — Complete Licence',
]

export const whatsappLink = (text) =>
  `https://wa.me/${business.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const enquiryText = 'Hi RS Driving School, I’d like to enquire about driving lessons.'
