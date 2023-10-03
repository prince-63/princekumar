import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { TestimonialDetails as TestimonialDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';
import Link from '@/components/navigation/link';

const TestimonialDetails = ({
  organizationLogo,
  organizationName,
  about,
  startingDate,
  endingDate,
  link
}: TestimonialDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <a href={link}>
        <Image src={organizationLogo!} alt={`${organizationName} avatar`}></Image>
      </a>
      <Typography className='text-xs'>&quot;{about}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-700"
        >
          {organizationName}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {startingDate} {' - '} {endingDate}
        </Typography>
      </div>
    </Card>
  );
};

export default TestimonialDetails;
