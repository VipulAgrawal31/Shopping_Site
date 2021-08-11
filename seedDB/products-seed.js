const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const backpacks_titles = [
    "Neostreak",
    "Gadgets Appliances",
    "Scott International",
    "Diverse",
    "Alan Jones Clothing",
    "EYEBOGLER",
    "FashMade",
    "KUNDAN SULZ GWALIOR",
    "Rupa",
    "Raymond",
  ];
  const backpacks_imgs = [
    "https://m.media-amazon.com/images/I/81biQWzkS+L._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/61tcWabN6KL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/61fTvIp7dhL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71DqlTtu3XL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/613VSbcKHDL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71ispQDLtQL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/616xchp1ECL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/41FWFgeMdZL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71kQyzNz1gL._AC_UL320_.jpg",
  ];

  //--------------------Travel Bags
  const travel_titles = [
    "Solimo Makeup Removal Wipes",
    "SIBY Leather Cosmetic Large Makeup Case",
    "Solimo Packing Cube Set (4 pieces, Black",
    "Maybelline New York Colossal Bold",
    "Mars Ultra Curl Long lasting Mascara ",
    "Lakmé Perfect Radiance Compact",
    "Lakmé Perfect Radiance Compact",
    "Lakmé Eyeconic Kajal Pencil",
    "Lakmé Eyeconic Kajal Pencil",
    "NIVEA Essential Care Lip Balm Crme",
    "NIVEA Essential Care Lip Balm Crme",
  ];

  const travel_imgs = [
    "https://m.media-amazon.com/images/I/718Maw6kpzL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71pha3Z3xFL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71IzuBi4cFL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71ZGivEgAgL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/71ZGivEgAgL._AC_UL320_.jpg",
    "https://m.media-amazon.com/images/I/51RwlW7m+6L._AC_UL320_.jpg",
    "https://rukminim1.flixcart.com/image/612/612/jeka07k0/foundation/b/c/7/6-9-to-5-weightless-mousse-lakme-original-imaf37yhybf5cdz6.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/612/612/k0463rk0/eye-shadow/n/z/t/9-the-blushed-nudes-maybelline-original-imafjza3vgvpdg8v.jpeg?q=70",
    // https://p0.pxfuel.com/preview/942/496/984/various-bag-bags-luggage.jpg",
    "https://rukminim1.flixcart.com/image/612/612/jeka07k0/foundation/b/c/7/6-9-to-5-weightless-mousse-lakme-original-imaf37yhybf5cdz6.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/612/612/k0463rk0/eye-shadow/n/z/t/9-the-blushed-nudes-maybelline-original-imafjza3vgvpdg8v.jpeg?q=70",
    //https://p0.pxfuel.com/preview/942/496/984/various-bag-bags-luggage.jpg",
    "https://rukminim1.flixcart.com/image/612/612/kckud8w0/lip-balm/4/e/a/9-6-essential-care-lip-balm-nivea-original-imaftz6vjfuhxsyw.jpeg?q=70",
  ];

  //--------------------Briefcases
  const briefcases_titles = [
    "Aluminium Metal Suitcase",
    "Black Leather Durable Suitcase",
  ];

  const briefcases_imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6d/Aluminium_Briefcase.jpg",
    "http://res.freestockphotos.biz/pictures/1/1751-black-leather-briefcase-on-a-white-background-pv.jpg",
  ];

  //--------------------Mini Bags
  const miniBags_titles = [
    "SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam",
    "SAMSUNG 6.5 kg Diamond Drum feature Fully Autom",
    "LG 6.5 kg 5 Star Inverter Fully Automatic ",
    "SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam",
    "SAMSUNG 6.5 kg Diamond Drum feature Fully Autom",
    "LG 6.5 kg 5 Star Inverter Fully Automatic ",
    "SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam",
    "SAMSUNG 6.5 kg Diamond Drum feature Fully Autom",
    "LG 6.5 kg 5 Star Inverter Fully Automatic ",
    "SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam",
    "SAMSUNG 6.5 kg Diamond Drum feature Fully Autom",
    "SAMSUNG 6 kg 5 Star Inverter with Hygiene Steam",
    "SAMSUNG 6.5 kg Diamond Drum feature Fully Autom",
    "LG 6.5 kg 5 Star Inverter Fully Automatic ",
  ];
  const miniBags_imgs = [
    "https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/312/312/k1gr2q80/washing-machine-new/j/2/a/p7020ngay-lg-original-imafhyvrg5kndcy6.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/312/312/k1gr2q80/washing-machine-new/j/2/a/p7020ngay-lg-original-imafhyvrg5kndcy6.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/312/312/k1gr2q80/washing-machine-new/j/2/a/p7020ngay-lg-original-imafhyvrg5kndcy6.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/k7f34i80/washing-machine-new/h/y/j/ww60r20glma-tl-samsung-original-imafpns894qh5zta.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kevpwnk0/washing-machine-new/g/t/5/wa65a4002vs-tl-samsung-original-imafvgz4qzfazbsh.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/312/312/k1gr2q80/washing-machine-new/j/2/a/p7020ngay-lg-original-imafhyvrg5kndcy6.jpeg?q=70",,
  ];

  //--------------------Large Handags

  const largeHandbags_titles = [
    "Elegant Shiny Brown Leather Handbag",
    "Black Leather Handbag with Golden Chains",
    "Elegant Black Leather Handbag",
    "Stylish Blue Handbag with its Purse",
    "A set of Two Elegant Handbags",
    "Practical Blue Leather Handbag with its Purse",
    "Simple Black Leather Handbag",
    "Golden Leather Handbag",
    "Shiny Black Leather Handbag",
    "Gray and Yellow Flowery Shoulder Bag",
    "Blue and Brown Leather Handbag with Shoulder Strap",
  ];
  const largeHandbags_imgs = [
    "https://c.pxhere.com/photos/a8/b7/handbag_purse_fashion_bag_female_style_women_elegance-703150.jpg!d",
    "https://c.pxhere.com/photos/b6/5c/handbag_purse_fashion_bag_female_women_accessory_modern-703145.jpg!d",
    "https://c.pxhere.com/photos/4b/82/handbag_purse_fashion_bag_female_style_women_lady-703156.jpg!d",
    "https://images.unsplash.com/photo-1564422170194-896b89110ef8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://images.unsplash.com/photo-1564222256577-45e728f2c611?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    "https://p1.pxfuel.com/preview/680/478/429/online-shopping-lisaswardrobe-handbags-shopping.jpg",
    "https://p1.pxfuel.com/preview/762/878/334/handbag-black-gold.jpg",
    "https://p1.pxfuel.com/preview/550/178/484/bag-handbag-haberdashery.jpg",
    "https://p1.pxfuel.com/preview/5/396/904/package-briefcase-leather-bags.jpg",
    "https://p1.pxfuel.com/preview/843/210/542/vera-bradley-purse-handbag-shoulder-bag.jpg",
    "https://p1.pxfuel.com/preview/57/634/392/purse-bag-handbag-fashion.jpg",
  ];

  //-----------------------Purses
  const purses_titles = [
    "Chhariya Crafts Pooja Thali with Diya for Home and Office Temple and Pooja Aluminium",
    "Chhariya Crafts Pooja Thali With Laxmi Ganesh Idol And Diya For Home And Office",
    "Anil Rakhi Pooja Thali:Kit Stainless Steel  ",
    "Agromech KUMKUM, HALDI HOLDER Brass",
    "Chhariya Crafts Pooja Thali with Diya for Home and Office Temple and Pooja Aluminium",
    "Chhariya Crafts Pooja Thali With Laxmi Ganesh Idol And Diya For Home And Office",
    "Anil Rakhi Pooja Thali:Kit Stainless Steel  ",
    "Agromech KUMKUM, HALDI HOLDER Brass",
    "Agromech KUMKUM, HALDI HOLDER Brass",
  ];
  const purses_imgs = [
    "https://rukminim1.flixcart.com/image/416/416/kmkxbww0/pooja-thali-set/g/i/z/pooja-thali-with-diya-gold-plated-for-home-and-office-temple-and-original-imagffy98swycsyk.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kehfi4w0/pooja-thali-set/q/7/y/pooja-thali-with-laxmi-ganesh-idol-and-diya-for-home-and-office-original-imafv5hkyx8xm4sx.jpeg?q=70",
    // https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://rukminim1.flixcart.com/image/416/416/kgb5rbk0/pooja-thali-set/w/r/6/tk-3-anil-rakhi-original-imafwkz93dxfjhca.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/jnj7iq80/pooja-thali-set/g/x/4/87105-agromech-original-imafa76vqpduguxg.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kmkxbww0/pooja-thali-set/g/i/z/pooja-thali-with-diya-gold-plated-for-home-and-office-temple-and-original-imagffy98swycsyk.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/kehfi4w0/pooja-thali-set/q/7/y/pooja-thali-with-laxmi-ganesh-idol-and-diya-for-home-and-office-original-imafv5hkyx8xm4sx.jpeg?q=70",
    // https://images.unsplash.com/photo-1564222195116-8a74a96b2c8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
    "https://rukminim1.flixcart.com/image/416/416/kgb5rbk0/pooja-thali-set/w/r/6/tk-3-anil-rakhi-original-imafwkz93dxfjhca.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/jnj7iq80/pooja-thali-set/g/x/4/87105-agromech-original-imafa76vqpduguxg.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/jnj7iq80/pooja-thali-set/g/x/4/87105-agromech-original-imafa76vqpduguxg.jpeg?q=70",
  ];

  //-----------------Totes

  const totes_titles = [
    "Plain White Cotton Tote",
    "Elegant Red Leather Tote",
    "Handmade Embroided White Tote with Red Roses",
    "Multicolored White Tote",
    "Owl White Cotton Tote",
    "Simple Grey Zipped Tote",
    "Earth Positive Tote Bag",
    "Deep Purple Handstamped Tote",
    "White Cotton Tote with Drawings",
    "Grey Wolf Tote",
    "Yellow and Green Bold Tote",
  ];
  const totes_imgs = [
    "https://p1.pxfuel.com/preview/1021/986/529/bag-cotton-cotton-bag-textile-wall-white.jpg",
    "https://p1.pxfuel.com/preview/741/996/910/handbag-fashion-fashionable-woman.jpg",
    "https://p1.pxfuel.com/preview/58/205/88/shop-bag-bags-sale.jpg",
    "https://p1.pxfuel.com/preview/367/279/652/bag-bag-elephant-cloth-bag.jpg",
    "https://p0.pikrepo.com/preview/627/393/white-blue-and-red-owl-print-tote-bag.jpg",
    "https://farm5.staticflickr.com/4022/4714518639_8d9e06be13_b.jpg",
    "https://live.staticflickr.com/3538/3674472019_727d8c4669.jpg",
    "https://live.staticflickr.com/5161/5342130557_7fa8cc5935_b.jpg",
    "https://p1.pxfuel.com/preview/368/540/34/bag-cotton-natural-cotton-bag-advertising-royalty-free-thumbnail.jpg",
    "https://p1.pxfuel.com/preview/726/975/813/bag-handbag-womans-bag-sport-bag.jpg",
    "https://p1.pxfuel.com/preview/844/198/547/bag-burlap-advertising.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(backpacks_titles, backpacks_imgs, "Men_Clothes");
  await seedProducts(briefcases_titles, briefcases_imgs, "Female_Clothes");
  await seedProducts(travel_titles, travel_imgs, "Cosmetics");
  await seedProducts(miniBags_titles, miniBags_imgs, "Home_Appliances");
  await seedProducts(
    largeHandbags_titles,
    largeHandbags_imgs,
    "Briefcases"
  );
  await seedProducts(purses_titles, purses_imgs, "Pooja_Items");
  await seedProducts(totes_titles, totes_imgs, "Food_Grains");

  await closeDB();
}

seedDB();
