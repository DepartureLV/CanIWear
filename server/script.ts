import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.accessories.deleteMany();
  await prisma.activewear.deleteMany();
  await prisma.bottoms.deleteMany();
  await prisma.dresses.deleteMany();
  await prisma.footwear.deleteMany();
  await prisma.others.deleteMany();
  await prisma.outerwear.deleteMany();
  await prisma.tops.deleteMany();

  const accessories = await prisma.accessories.createMany({
    data: [
      {
        itemName: "Hats",
        maxtemp_resistant: 5,
        mintemp_resistant: 2,
        wind_resistant: 3,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 4,
        uv_resistant: 3,
      },
      {
        itemName: "Scarves",
        maxtemp_resistant: 1,
        mintemp_resistant: 5,
        wind_resistant: 3,
        rain_resistant: 2,
        snow_resistant: 5,
        heat_resistant: 1,
        uv_resistant: 2,
      },
      {
        itemName: "Gloves",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 4,
        rain_resistant: 4,
        snow_resistant: 4,
        heat_resistant: 3,
        uv_resistant: 4,
      },
      {
        itemName: "Belts",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Ties",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Sunglasses",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 4,
      },
      {
        itemName: "Watches",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Jewelry",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
    ],
  });

  const activewear = await prisma.activewear.createMany({
    data: [
      {
        itemName: "Sports bras",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Yoga pants",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Running shorts",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Athletic tops",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Sweatpants",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Tracksuits",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 2,
        uv_resistant: 2,
      },
    ],
  });

  const bottoms = await prisma.bottoms.createMany({
    data: [
      {
        itemName: "Pants",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Jeans",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Shorts",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Skirts",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Leggings",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Trousers",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
    ],
  });

  const dresses = await prisma.dresses.createMany({
    data: [
      {
        itemName: "Casual dresses",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Formal dresses",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Maxi dresses",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Mini dresses",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Cocktail dresses",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Evening gowns",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 5,
        rain_resistant: 5,
        snow_resistant: 4,
        heat_resistant: 2,
        uv_resistant: 2,
      },
    ],
  });

  const footwear = await prisma.footwear.createMany({
    data: [
      {
        itemName: "Sneakers",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Boots",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 3,
        rain_resistant: 5,
        snow_resistant: 4,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Sandals",
        maxtemp_resistant: 4,
        mintemp_resistant: 2,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 1,
        heat_resistant: 4,
        uv_resistant: 3,
      },
      {
        itemName: "Flats",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Heels",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "High heels",
        maxtemp_resistant: 2,
        mintemp_resistant: 4,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 2,
        uv_resistant: 3,
      },
      {
        itemName: "Loafers",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Oxfords",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Slippers",
        maxtemp_resistant: 5,
        mintemp_resistant: 5,
        wind_resistant: 5,
        rain_resistant: 5,
        snow_resistant: 5,
        heat_resistant: 5,
        uv_resistant: 5,
      },
    ],
  });

  const others = await prisma.others.createMany({
    data: [
      {
        itemName: "Maternity wear",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Petite clothing",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Costumes",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
    ],
  });

  const outerwear = await prisma.outerwear.createMany({
    data: [
      {
        itemName: "Hoodies",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 3,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Coats",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 5,
        rain_resistant: 5,
        snow_resistant: 4,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Jackets",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 4,
        rain_resistant: 4,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Blazers",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 4,
        rain_resistant: 4,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Parkas",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 5,
        rain_resistant: 5,
        snow_resistant: 4,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Trench coats",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 5,
        rain_resistant: 5,
        snow_resistant: 4,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Windbreakers",
        maxtemp_resistant: 3,
        mintemp_resistant: 3,
        wind_resistant: 4,
        rain_resistant: 4,
        snow_resistant: 3,
        heat_resistant: 3,
        uv_resistant: 3,
      },
    ],
  });

  const tops = await prisma.tops.createMany({
    data: [
      {
        itemName: "T-shirts",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 2,
        rain_resistant: 2,
        snow_resistant: 1,
        heat_resistant: 4,
        uv_resistant: 3,
      },
      {
        itemName: "Shirts",
        maxtemp_resistant: 4,
        mintemp_resistant: 3,
        wind_resistant: 3,
        rain_resistant: 3,
        snow_resistant: 2,
        heat_resistant: 3,
        uv_resistant: 3,
      },
      {
        itemName: "Tank tops",
        maxtemp_resistant: 5,
        mintemp_resistant: 3,
        wind_resistant: 1,
        rain_resistant: 1,
        snow_resistant: 1,
        heat_resistant: 5,
        uv_resistant: 4,
      },
      {
        itemName: "Sweaters",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 3,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 2,
        uv_resistant: 2,
      },
      {
        itemName: "Long sleeves",
        maxtemp_resistant: 3,
        mintemp_resistant: 4,
        wind_resistant: 3,
        rain_resistant: 2,
        snow_resistant: 2,
        heat_resistant: 2,
        uv_resistant: 2,
      },
    ],
  });

  console.log(accessories);
  console.log(activewear);
  console.log(bottoms);
  console.log(dresses);
  console.log(footwear);
  console.log(others);
  console.log(outerwear);
  console.log(tops);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
