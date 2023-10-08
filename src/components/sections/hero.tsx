import Image from 'next/image';
import { MapPin, Scroll } from 'lucide-react';
import PrinceProfile from '../../../public/images/prince_profile.jpg'
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import Reavel from '@/hooks/Reavel';
import transition from "@/hooks/transition";
import ScrollAnimation from '@/hooks/scrollAnimation';

const HeroSection = () => {
  return (
    <Container id="hero">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <ScrollAnimation>
            <Reavel>
              <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                <Image
                  src={PrinceProfile}
                  alt="Headshot of Sagar"
                  className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                  style={{ objectFit: 'cover' }}
                ></Image>
                <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
              </div>
            </Reavel>
          </ScrollAnimation>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2">
            <ScrollAnimation>
              <Reavel>
                <Typography variant="h1">
                  Hi, I&apos;m Prince{' '}
                  <span className="inline-block animate-waving-hand">👋</span>
                </Typography>
              </Reavel>
              <Reavel>
                <Typography>
                  I&apos;m a Frontend developer (React.js) with a focus
                  on creating a resposive and good looking websites, also i passionate about coding and contibuting in openSource projects.
                </Typography>
              </Reavel>
            </ScrollAnimation>
          </div>
          <div className="flex flex-col gap-2">
            <ScrollAnimation>
              <Reavel>
                <div className="flex gap-2">
                  <MapPin className="stroke-gray-600" />
                  <Typography>Kolkata, India</Typography>
                </div>
              </Reavel>
            </ScrollAnimation>

            <div className="flex items-center gap-2">
              <ScrollAnimation>
                <Reavel>
                  <div className="flex h-6 w-6 items-center justify-center">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                    </span>
                  </div>
                </Reavel>
              </ScrollAnimation>
              <ScrollAnimation>
                <Reavel>
                  <Typography>Available for new projects</Typography>
                </Reavel>
              </ScrollAnimation>
            </div>
          </div>
          <ScrollAnimation>
            <Reavel>
              <SocialIcons />
            </Reavel>
          </ScrollAnimation>
        </div>
      </div>
    </Container>
  );
};

export default transition(HeroSection);
