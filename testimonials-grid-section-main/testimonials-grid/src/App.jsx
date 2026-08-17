import LightCard from "./components/LightCard";
import DarkCard from "./components/DarkCard";
import imageDaniel from "../images/image-daniel.jpg";
import imageJonathan from "../images/image-jonathan.jpg";
import imageJeanette from "../images/image-jeanette.jpg";
import imagePatrick from "../images/image-patrick.jpg";
import imageKira from "../images/image-kira.jpg";

function App() {
  return (

    <main className=" min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 p-5 justify-items-center lg:grid-cols-4 lg:gap-10 7" >
        <DarkCard
          image={imageDaniel}
          title="Verified Graduate"
          color="purple-500"
          name="Daniel Clifford"
          highlight="     I received a job offer mid-course, and the subjects I learned were current, if not more so, 
                            in the company I joined. I honestly feel I got every penny’s worth."
          testimonial=" “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
                            transition and have heard some people who had an amazing experience here. I signed up 
                              for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
                                The next 12 weeks was the best - and most grueling - time of my life. Since completing 
                                  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
          textColor="text-purple-200"
          highlightColor="white"
          gridPlacement="lg:col-start-1 lg:col-span-2"
        />
        <DarkCard
          image={imageJonathan}
          title="Verified Graduate"
          color="gray-500"
          textColor="text-gray-200"
          name="Jonathan Walters"
          highlight=" The team was very supportive and kept me motivated "
          testimonial="“ I started as a
                          total newbie with virtually no coding skills. I now work as a mobile
                           engineer for a big company. This was one of the best investments I’ve made
                             in myself. ” "

          highlightColor="white"
          gridPlacement="lg:col-start-3 lg:row-start-1 "
        />
        <LightCard
          image={imageJeanette}
          title="Verified Graduate"
          name="Jeanette Harmon"
          highlight=" An overall wonderful and rewarding experience "
          testimonial=" “ Thank you for the wonderful experience! I now have a
                            job I really enjoy, and make a good living while doing something I love. ”"
          textColor="text-gray-200"
          gridPlacement="lg:col-start-1 lg:row-start-2 "
          
        />

        <DarkCard
          image={imagePatrick}
          title="Verified Graduate"
          color="dark-blue"
          textColor="text-gray-200"
          name="Patrick Abrams"
          highlight="Awesome teaching support from TAs who did
                      the bootcamp themselves. Getting guidance from them and learning from their
                       experiences was easy.  "
          testimonial=" “ The staff seem genuinely concerned about my progress
                            which I find really refreshing. The program gave me the confidence necessary
                            to be able to go out in the world and present myself as a capable junior
                            developer. The standard is above the rest. You will get the personal
                            attention you need from an incredible community of smart and amazing people.
    ” "
          highlightColor="gray-200"
          gridPlacement="lg:col-start-2 lg:col-span-2 lg:row-start-2"
    
        />

        <LightCard
          image={imageKira}
          title="Verified Graduate"
          name="Kira Whittle"
          highlight=" Such a life-changing experience. Highly recommended!"
          testimonial=" “ Before joining the bootcamp, I’ve never written a line of
                            code. I needed some structure from professionals who can help me learn
                            programming step by step. I was encouraged to enroll by a former student of
                            theirs who can only say wonderful things about the program. The entire
                            curriculum and staff did not disappoint. They were very hands-on and I never
                            had to wait long for assistance. The agile team project, in particular, was
                            outstanding. It took my learning to the next level in a way that no tutorial
                            could ever have. In fact, I’ve often referred to it during interviews as an
                            example of my developent experience. It certainly helped me land a job as a
                            full-stack developer after receiving multiple offers. 100% recommend! ”"
          textColor="text-gray-200"
          gridPlacement="lg:col-start-4 lg:row-span-2 lg:row-start-1"
        />
      </div>
    </main>
  );
}

export default App;
