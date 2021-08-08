  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Men_Clothes");
  await seedCateg("Female_Clothes");
  await seedCateg("Cosmetics");
  await seedCateg("Home_Appliances");
  await seedCateg("Food_Grains");
  await seedCateg("Pooja_Items");
  await seedCateg("Briefcases");