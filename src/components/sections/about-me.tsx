import Image from "next/image";
import PrinceKumar from "../../../public/images/prince_kumar.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";
import Reavel from "@/hooks/Reavel";
import { Scroll } from "lucide-react";
import ScrollAnimation from "@/hooks/scrollAnimation";

const AboutMeSection = () => {
    return (
        <Container className="bg-gray-50" id="about">
            <div className="self-center">
                <ScrollAnimation>
                    <Tag label="About me" />
                </ScrollAnimation>
            </div>

            <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
                {/* Image */}
                <div className="flex justify-center md:order-first md:justify-end">
                    <ScrollAnimation>
                        <Reavel>
                            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                                <Image
                                    src={PrinceKumar}
                                    alt="Fullpose of Sagar"
                                    className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                                    style={{ objectFit: "cover" }}
                                ></Image>
                                <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
                            </div>
                        </Reavel>
                    </ScrollAnimation>
                </div>

                {/* Content */}
                <div className="flex max-w-xl flex-col gap-6">
                    <ScrollAnimation>
                        <Reavel>
                            <Typography variant="h3">
                                Curious about me? Here you have it:
                            </Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <Reavel>
                            <Typography>
                                I&apos;m a passionate{" "}
                                <Link
                                    noCustomization
                                    externalLink
                                    withUnderline
                                    href={EXTERNAL_LINKS.GITHUB}
                                >
                                    developer.
                                </Link>{" "}
                                who focuses on backend development, particularly
                                using (Spring Boot). 
                                I&apos;m passionate about creating visually appealing and seamlessly functioning digital products. I prioritize user experience, perfect designs, and writing clean, efficient code.
                            </Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <Reavel>
                            <Typography>
                                I began my journey as a web developer in 2022, and since
                                then, I&apos;ve continued to grow and evolve as a
                                developer, taking on new challenges and learning the
                                latest technologies along the way.
                            </Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <Reavel>
                            <Typography>
                                I am very much a progressive thinker and enjoy working
                                on products end to end, from ideation all the way to
                                development.
                            </Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <Reavel>
                            <Typography>
                                When I&apos;m not in full-on developer mode, you can
                                find me on{" "}
                                <Link
                                    noCustomization
                                    externalLink
                                    withUnderline
                                    href={EXTERNAL_LINKS.Linkedin}
                                >
                                    Linkedin
                                </Link>
                                .
                            </Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <Reavel>
                            <Typography>Finally, some quick bits about me.</Typography>
                        </Reavel>
                    </ScrollAnimation>
                    <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                        <ul className="flex list-inside list-disc flex-col gap-2">
                            <ScrollAnimation>
                                <Reavel>
                                    <Typography component="li">
                                        B. Tech in Computer science and engineering
                                    </Typography>
                                </Reavel>
                            </ScrollAnimation>
                        </ul>
                        <ul className="flex list-inside list-disc flex-col gap-2">
                            <ScrollAnimation>
                                <Reavel>
                                    <Typography component="li">Avid learner</Typography>
                                </Reavel>
                            </ScrollAnimation>
                        </ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutMeSection;
