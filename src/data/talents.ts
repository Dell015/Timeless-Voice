export type VoRow = { duration: string; price: number; edit: string };

export type Talent = {
  slug: string;
  name: string;
  tags: string[];
  bio: string;
  hosting: { from: number; outsideExtra: number; note: string };
  voRates: VoRow[];
  voExtra: { price: number; edit: string; note: string };
  voIncludes: string[];
};

export const talents: Talent[] = [
  {
    slug: "sir-sander",
    name: "Sir Sander",
    tags: ["Event host", "Voice over"],
    bio: "[Short bio goes here.]",
    hosting: {
      from: 10000,
      outsideExtra: 2000,
      note: "Usually 3 to 4 hours. Add ₱2,000 if the event is outside Tuguegarao but within Cagayan and Isabela.",
    },
    voRates: [
      { duration: "40 seconds and below", price: 1200, edit: "+₱500" },
      { duration: "41 seconds to 1 minute", price: 1500, edit: "+₱500" },
      { duration: "1:01 to 1:30", price: 1800, edit: "+₱600" },
      { duration: "1:31 to 2:00", price: 2100, edit: "+₱600" },
      { duration: "2:01 to 2:30", price: 2400, edit: "+₱700" },
      { duration: "2:31 to 3:00", price: 2700, edit: "+₱700" },
      { duration: "3:01 to 3:30", price: 3000, edit: "+₱800" },
      { duration: "3:31 to 4:00", price: 3300, edit: "+₱800" },
      { duration: "4:01 to 4:30", price: 3600, edit: "+₱900" },
      { duration: "4:31 to 5:00", price: 3900, edit: "+₱900" },
      { duration: "5:01 to 5:30", price: 4200, edit: "+₱950" },
      { duration: "5:31 to 6:00", price: 4500, edit: "+₱950" },
    ],
    voExtra: { price: 300, edit: "+₱50", note: "6:01 and above: +₱300 for every extra minute (editing +₱50 per minute)." },
    voIncludes: [
      "Denoising and voice enhancement to your liking",
      "You can suggest the pace and mood",
      "Up to 2 revisions, with no changes to the script",
    ],
  },
];

export const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;
