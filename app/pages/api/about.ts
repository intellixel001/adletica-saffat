import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    title: "About Us",
    subtitle:
      "We’re an elite team of creatives, engineers, hackers and quants – changing the way companies grow.",
    topImages: ["/about-img1.png", "/about-img2.png"],
    middleSection: {
      title: "The team behind some of the world’s fastest growing brands",
      text: "adletica® is an elite team of digital marketers, media strategists, designers...",
      image: "/about-img3.png",
    },
    bottomSection: {
      title: "Why is adletica Special?",
      text: "We embed a tailored team of highly experienced marketing experts...",
      image: "/about-img4.png",
    },
  });
}
