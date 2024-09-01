import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function RevScroll(){
    return(
        <InfiniteMovingCards items={reviews} direction="right" speed="slow" className="" />

    )
}

const reviews = [
    {

        rating: "⭐⭐⭐⭐⭐",
        quote: "I am really impressed by the work that I had done. Drew was easy to work with on the front end. Noah, kicked it out of the park on the back end.  I wanted a pond in my back meadow and they delivered. Professional, timely and seemed to understand just what I wanted. Thank you and best of luck!",
        name: "Kristy Brandabur",
        pfpdir: "/kristybrandabur.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Rock Solid came out to do a fill job for me. I had an approx. 20' x 30' x 2.5' piece of my backyard that needed filled from the removal of a pool. They did a great job. One of the things that made this job easiest was the communication and attentivenss I received. All questions were answered promptly and you can tell Rock Solid is experts in what they do.",
        name: "Craig Metzcar",
        pfpdir: "/craig.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Really was impressed with the work these guys did in regrading/leveling my backyard. Drew  was so easy to work with. Really appreciate his clear communication, clear expectations, and fair price. Noah was a hard worker, took time to understand my vision, and executed the tasks with excellence. Highly recommended.",
        name: "Dan Sundersingh",
        pfpdir: "/dansundersignh.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Rock Solid Excavation was the best choice I made for my backyard cleanup and grading.  I recently had a pool put in and my back yard and it was in ruins.  Solid Rock graded my property, straightened up my backyard and removed all the unwanted material.  I would certainly use them again for all my backyard cleanup",
        name: "Patricia Decandia",
        pfpdir: "/patricia.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Worked with Drew and the team on clearing a section of woodland with heavy growth of invasive honeysuckle and Russian Olive. Great clear communication, transparent pricing and a good job on the back end that met all our expectations.  Would use again and would recommend",
        name: "Simon Caines",
        pfpdir: "/simoncaines.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "I worked with Drew, co-owner of Rock Solid Excavations on my driveway project and it was an excellent experience all around. From planning to the final product. I needed to extend my driveway and gravel was the most natural, convenient and low-cost option. Drew came in got the measurements done and the job was finished on time and looks fantastic. Really happy with how the project turned out. It’s hard to find a company that cares about their business, their customer and is trustworthy and competent.",
        name: "Gaurav Srivastava",
        pfpdir: "/gauravsrivastava.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Drew gets 5 stars in all of the above categories. You are sure to be more than happy with his work.",
        name: "Judy Kroger",
        pfpdir: "/judykroger.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Called and had an estimate same day. Job was completed next day and great guys to work with.  Appreciate the prompt service and drive way looks great.",
        name: "Chris Williams",
        pfpdir: "/chris.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Drew time and time again has been able to take care of my childhood home, from gravel, junk removal, and land grading. He is always willing to help and he is cheap! Always out bidding these corporations.",
        name: "Alex Helmsworth",
        pfpdir: "/alex.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "I hired Drew and Noah to tear down and dispose an old shed and they did a fast and efficient job. I was impressed by the wide variety of jobs they do beyond excavating. They are very professional and have very reasonable pricing!",
        name: "Gabrielle Glynn",
        pfpdir: "/gabrielle.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Drew and Noah installed a Gravel driveway for me.  They showed up on time ready to work and did a fantastic job.  They also built a retaining wall at my request and back filled it with gravel. They finished on time and at a great price,  they even came back at a later date to fill in a few thin spots! Would recommend them to anyone!",
        name: "Ken Neltner",
        pfpdir: "/ken.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Drew and his team did a great job at my new home. We just had a pool installed and had very uneven and hard soil. The team used a Harley rake to create a smoother and softer ground so I can hopefully grow grass. Great communication and responsiveness.",
        name: "Matthew Broughton",
        pfpdir: "/matthew.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Hi all; I called Drew for help in excavating an old retaining wall and soil on my property. He responded promptly to my inquiry and was honestly the most pleasant guy I know. He evaluated my project, offered some great recommendations and contacted my local utility company to help me identify my gas lines. He was enthusiastic about my project and made what felt overwhelming to me seem like a breeze on his end. If you need an expert in excavation and the like, I URGE you to call Drew Dobyns!. In addition, he’s very easy on the eyes ladies. Thank you Drew for all you did to help me work towards my goal!!!",
        name: "Deborah Pope-Bullucks",
        pfpdir: "/deborahbullucks.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "Thank you, Rock Solid Excavation, for making my pool dream a reality!  Your crew worked so hard!",
        name: "Holly Ward",
        pfpdir: "/holly.png"
    },
    {
        rating: "⭐⭐⭐⭐⭐",
        quote: "I had Drew and Noah put in a gravel driveway it turned out great probably have a few more projects for them in the future.",
        name: "Vernon Tarter",
        pfpdir: "/vernon.png"
    },
]