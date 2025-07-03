const sampleListings = [
  {
    image: {
      url: 'https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_267,q_40,w_400/hotelier-images/0c/3d/70f3a8c2b9532020dd8fec5beeec001361dc524ea643d2dbb51d9ed4331d.jpeg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
    

    title: 'Mussoorie Getaway',
    description: 'Queen of Hills with waterfalls, mall road, and scenic views.',
    price: 4500,
    location: 'Mussoorie',
    country: 'India',
    reviews: '684eab9228bd2b79a2ca0fb5',
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://uttarakhandtourism.gov.in/destination/mussoorie'
  },
  {
    image: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUeTnvE3mqfivfP9A0P7eWuMwu-fRiWhx5Q&s',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
    
    title: 'Spiritual Rishikesh',
    description: 'Spiritual vibes, Ganga aarti, yoga, and river rafting adventure.',
    price: 4000,
    location: 'Rishikesh',
    country: 'India',
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://uttarakhandtourism.gov.in/rishikesh'
  },
  {
    image: {
      url: 'https://www.captureatrip.com/_next/image?url=https%3A%2F%2Fcaptureatrip-cms-storage.s3.ap-south-1.amazonaws.com%2FPlaces_To_Visit_In_Haridwar_b1b1155679.webp&w=3840&q=50&dpl=dpl_8pE7NX6dCFdTGq2AGBxoVpC4JTBb',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
    
    title: 'Haridwar Pilgrimage',
    description: "Holy town on Ganga's banks, known for Har Ki Pauri and Ganga Aarti.",
    price: 3500,
    location: 'Haridwar',
    country: 'India',

    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://uttarakhandtourism.gov.in/destination/haridwar'
  },
  {
    image: {
      url: 'https://albatrosses.in/wp-content/uploads/2024/07/Places-to-visit-in-Kasol-in-August.jpg.webp',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Chill in Kasol',
    description: 'Serene hamlet in Parvati Valley, perfect for nature and cafes.',
    price: 4200,
    location: 'Kasol',
    country: 'India',
  
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://himachaltourism.gov.in/kasol'
  },
  {
    image: {
      url: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/05/Manali-City-Himachal.jpg?fit=1024%2C665&ssl=1',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Manali Adventure',
    description: 'Popular hill station with Solang Valley and Hidimba Temple.',
    price: 4700,
    location: 'Manali',
    country: 'India',

    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://himachaltourism.gov.in/destination/manali'
  },
  {
    image: {
      url: 'https://static.toiimg.com/photo/msid-65022698,width-96,height-65.cms',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Golden Amritsar',
    description: 'Visit the Golden Temple, Wagah Border, and rich Punjabi cuisine.',
    price: 4000,
    location: 'Amritsar',
    country: 'India',
    reviews: '6851b2b6ee8b079ffd917429',
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://punjabtourism.punjab.gov.in/amritsar'
  },
  {
    image: {
      url: 'https://blogboat.com/wp-content/uploads/2022/03/7-Thaku-ji.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Divine Vrindavan',
    description: 'Land of Krishna Leela, full of divine temples and bhakti.',
    price: 250000000,
    location: 'Vrindavan',
    country: 'India',
    reviews: [
      '684e8b25a3ec322fe758cb91',
      '68512e60d18cc2df9465a953'
    ],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://mathura.nic.in/vrindavan'
  },
  {
    image: {
      url: 'https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/14k/14590/p_840561/1000_1663214772.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'McLeod Ganj Retreat',
    description: 'Tibetan culture, monasteries, and Triund trek.',
    price: 4400,
    location: 'McLeod Ganj',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://himachaltourism.gov.in/mcleodganj'
  },
  {
    image: {
      url: 'https://static2.tripoto.com/media/filter/tst/img/2175980/TripDocument/1636190404_images_21.jpeg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Lake Town Nainital',
    description: 'Lake city surrounded by hills, boating and mall road strolls.',
    price: 4600,
    location: 'Nainital',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://uttarakhandtourism.gov.in/nainital'
  },
  {
    image: {
      url: 'https://www.sevencorbett.com/wp-content/uploads/2023/03/corbett-national-park-1.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Corbett Safari',
    description: 'Safari adventure in India’s oldest national park.',
    price: 5500,
    location: 'Jim Corbett',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://corbettonline.uk.gov.in/'
  },
  {
    image: {
      url: 'https://media.istockphoto.com/id/635726330/photo/nahargarh-fort.jpg?s=612x612&w=0&k=20&c=z1hztb9BT6YhxT--G_cW8hBmBHWzrFdwbfM0Pc2jATI=',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Pink Jaipur',
    description: 'Pink city charm with forts, palaces, and traditional food.',
    price: 4800,
    location: 'Jaipur',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://tourism.rajasthan.gov.in/jaipur'
  },
  {
    image: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3wOv4urHFYKsFaQCswbA_ucs1SIsuOE8K1g&s',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Spiritual Pushkar',
    description: 'Spiritual vibes, Brahma Temple, and Pushkar Lake.',
    price: 3900,
    location: 'Pushkar',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://tourism.rajasthan.gov.in/pushkar'
  },
  {
    image: {
      url: 'https://www.aljazeera.com/wp-content/uploads/2024/01/AP24022264190466-1705913013.jpg?resize=1920%2C1080',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Ayodhya Dham',
    description: 'Birthplace of Shri Ram, full of divine temples and history.',
    price: 3600,
    location: 'Ayodhya',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://ayodhya.nic.in'
  },
  {
    image: {
      url: 'https://www.nyoooz.com/uploads/hindi/nyoooz-images/mathura_temple_1630201401.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
    
    title: "Krishna's Mathura",
    description: 'Shri Krishna’s birthplace, vibrant culture, and temples.',
    price: 3700,
    location: 'Mathura',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://mathura.nic.in'
  },
  {
    image: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2wWo_oyAZEUuzElcIq7JmsPwNGBbneBiiA&s',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Taj in Agra',
    description: 'Taj Mahal, Agra Fort, and Mughal heritage.',
    price: 4000,
    location: 'Agra',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://uptourism.gov.in/en/page/agra'
  },
  {
    image: {
      url: 'https://im.hunt.in/cg/Mount-Abu/City-Guide/about-mount-abu4.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Mount Abu Hills',
    description: "Rajasthan's only hill station, known for Dilwara Temples.",
    price: 4200,
    location: 'Mount Abu',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://tourism.rajasthan.gov.in/mountabu'
  },
  {
    image: {
      url: 'https://s7ap1.scene7.com/is/image/incredibleindia/panchgani-mahabaleshwar-maharashtra-2-attr-hero?qlt=82&ts=1726668900737',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Panchgani Escape',
    description: 'Serene hill station with strawberry farms and scenic valleys.',
    price: 4100,
    location: 'Panchgani',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://www.maharashtratourism.gov.in/panchgani'
  },
  {
    image: {
      url: 'https://www.tourword.com/wp-content/uploads/2024/11/Khandala-Lonavala-is-a-popular-tourist-destination-in-the-beautiful-valleys-of-Maharashtra-1.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Lonavala Retreat',
    description: 'Monsoon delight with greenery, forts, and waterfalls.',
    price: 4300,
    location: 'Lonavala',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://www.maharashtratourism.gov.in/lonavala'
  },
  {
    image: {
      url: 'https://s7ap1.scene7.com/is/image/incredibleindia/a-journey-through-masthead-hero-1?qlt=82&ts=1727368343764',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Hampi Ruins',
    description: 'Ancient ruins, temples, and surreal landscapes.',
    price: 4600,
    location: 'Hampi',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://karnatakatourism.org/tour-item/hampi'
  },
  {
    image: {
      url: 'https://thetasteoftrip.com/wp-content/uploads/2024/06/IMG_E1789-scaled.jpg',
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Trimbakeshwar Darshan',
    description: 'One of the 12 Jyotirlingas, near Nashik, peaceful and spiritual.',
    price: 3500,
    location: 'Trimbakeshwar',
    country: 'India',
    reviews: [],
    owner: '684b3aa5c27dc1eb4a551fdd',
    moreInfo: 'https://trimbakeshwartrust.com'
  },
  {
    image: {
      url: "https://assets.architecturaldigest.in/photos/6239f783f0da59bc341a89a7/master/pass/Sujata%20Keshavan's%20charming%20colonial-era%20Coonoor%20bungalow%20.jpg",
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
     
    title: 'Nityanand Bhawan',
    description: '5 logo ki jagaha',
    price: 880000,
    location: 'Coonoor',
    country: 'India',
    reviews: [],
    owner: '684b3fe9c6983329268a6baa',
    moreInfo: 'https://coonoortourism.gov.in'
  },
  {
  image: {
      url: "https://cache.careers360.mobi/media/article_images/2024/6/25/SVVV-Indore-BTech-admissions-2024-featured-image.jpg",
      filename: 'trekStay_DEV/cu6qhg78baeanlbtd0hc'
    },
  title: 'SVVV',
  description: 'Mountains, lake, highway and what not?',
  price: 110000,
  location: 'Ujjain Road, Indore',
  country: 'India',
  reviews: [
    '684f173926500f0c92174df1',
    '68513d276dd3d98d0ad38c4b',
    '68514086f377248782fc1ae5',
    '685142c5905c9f0a9700fac7'
  ],
  owner: '684c64644b85db4b250ff726',
  __v: 4,
  moreInfo: 'https://www.svvv.edu.in/'
}

];

module.exports = { data: sampleListings };